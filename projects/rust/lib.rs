//! This library is a collection of HTTP Code constants. Helpful for working with HTTP status codes.

#![warn(clippy::all, clippy::pedantic, missing_docs, clippy::nursery)]
#![no_std]

mod decl;
pub use decl::*;

include!(concat!(env!("OUT_DIR"), "/code_ranges.rs"));
