import { constantCase } from "jsr:@mesqueeb/case-anything";
import codeRanges from "../codeRanges.ts";
export const outputFileName = "consts.ts";

export function generateConsts() {
  let outputString = "";

  const formatCode = (code: (typeof codeRanges)[0]["codes"][0]): string =>
    `/**
* HTTP Code for ${code.message} (${code.code})
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${
      code.code
    } ${code.message}}
*/
export const ${constantCase(code.message)} = ${code.code};\n`;

  const formatRange = (range: (typeof codeRanges)[0]): string =>
    `/**
* HTTP Codes for ${range.name} responses (${range.range})
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses}
*/
export const ${constantCase(range.name)} = {
${range.codes.map((code) => constantCase(code.message)).join(",\n")}
};\n`;

  codeRanges.map((range) => {
    range.codes.map((code) => {
      outputString += formatCode(code);
    });
    outputString += "\n";

    outputString += formatRange(range);
  });

  return outputString;
}
