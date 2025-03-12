use std::io::Write;

include!("./src/decl.rs");
const CODES_JSON: &str = include_str!("../../codes.json");

fn map_code(code: &serde_json::Value) -> Code {
    let message = code
        .get("message")
        .and_then(|value| value.as_str())
        .unwrap();
    let code = code.get("code").and_then(|value| value.as_u64()).unwrap() as u16;

    Code { message, code }
}

fn map_code_range(code_range: &serde_json::Value) -> CodeRange {
    let name = code_range
        .get("name")
        .and_then(|value| value.as_str())
        .unwrap();

    let reference = code_range
        .get("reference")
        .and_then(|value| value.as_str())
        .unwrap();

    let range = code_range
        .get("range")
        .and_then(|value| value.as_str())
        .unwrap();

    let codes = code_range
        .get("codes")
        .and_then(|value| value.as_array())
        .unwrap()
        .iter()
        .map(map_code)
        .collect::<Vec<_>>();

    CodeRange {
        name,
        reference,
        range,
        codes: Vec::leak(codes),
    }
}

fn main() {
    let serde_json::Value::Array(code_ranges) =
        serde_json::from_str(CODES_JSON).expect("valid json")
    else {
        panic!("Expected an array of codes");
    };

    let code_ranges = code_ranges.iter().map(map_code_range).collect::<Vec<_>>();

    let out_path = std::path::PathBuf::from(std::env::var("OUT_DIR").unwrap());
    let out_path = out_path.join("code_ranges.rs");

    let mut file = std::fs::File::create(&out_path).expect("create file");

    for range in code_ranges {
        writeln!(
            &mut file,
            "/// HTTP Codes for {title} responses ({xx_range}) \n\
            /// \n\
            /// See <{reference}> for more info \n\
            pub mod {mod_name} {{ {} }}",
            range
                .codes
                .iter()
                .map(|code| {
                    let const_name = heck::AsShoutySnakeCase(&code.message);
                    let happy_name = heck::AsTitleCase(&code.message);
                    format!(
                        "/// HTTP Code for {happy_name} ({code})\n\
                        /// \n\
                        /// See <{reference}> for more info \n\
                        pub const {const_name}: crate::Code = crate::Code {{ message: {:?}, code: {code} }};",
                        code.message,
                        reference = format_args!("https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{}", code.code),
                        code = code.code,
                    )
                })
                .collect::<Vec<_>>()
                .join("\n"),
            title = heck::AsTitleCase(&range.name),
            reference = range.reference,
            xx_range = range.range.replace("00", "XX"),
            mod_name = heck::AsSnakeCase(&range.name),
        )
        .expect("write to file");
    }
}
