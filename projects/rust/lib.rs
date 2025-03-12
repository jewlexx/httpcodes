#![doc = include_str!("../../README.rust.md")]
#![warn(clippy::all, clippy::pedantic, missing_docs, clippy::nursery)]
#![no_std]

mod decl;
pub use decl::*;

include!(concat!(env!("OUT_DIR"), "/code_ranges.rs"));
