#[derive(Debug, Clone, PartialEq, Eq, Hash)]
/// Represents a range of codes, i.e Informational (1xx)
pub struct CodeRange<'a> {
    /// The name of the range, i.e Informational
    pub name: &'a str,
    /// The MDN reference for the documentation for this range
    pub reference: &'a str,
    /// The range of codes, i.e 1xx
    pub range: &'a str,
    /// The codes in this range
    pub codes: &'a [Code<'a>],
}

/// Represents a single code, i.e 200 OK
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub struct Code<'a> {
    /// The message for the code, i.e OK
    pub message: &'a str,
    /// The code itself, i.e 200
    pub code: u16,
}
