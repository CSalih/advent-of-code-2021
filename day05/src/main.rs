use std::fs;

mod hydrothermal_venture;

fn main() {
    let filename = "resources/input.txt";
    let input = fs::read_to_string(&filename).unwrap_or_else(|_| panic!("Error reading file {}", filename));

    let segments = hydrothermal_venture::create_segment_from_input(&input);
    println!("Solution for part one is: {}", hydrothermal_venture::part_one(&segments));
    println!("Solution for part two is: {}", hydrothermal_venture::part_two(&segments));
}