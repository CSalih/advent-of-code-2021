use std::fs;

use aoc::hydrothermal_venture::{create_segment_from_input, LineSegment};

fn crate_segments(filename: &str) -> Vec<LineSegment> {
    let input = fs::read_to_string(&filename).unwrap_or_else(|_| panic!("Error reading file {}", filename));
    return create_segment_from_input(&input);
}

pub fn get_segments_from_input_short() -> Vec<LineSegment> {
    let filename = "resources/input_short.txt";
    return crate_segments(&filename);
}

pub fn get_segments_from_input() -> Vec<LineSegment> {
    let filename = "resources/input.txt";
    return crate_segments(&filename);
}