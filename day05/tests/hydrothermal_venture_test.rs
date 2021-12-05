use aoc::hydrothermal_venture::{part_one, part_two};

mod common;

#[test]
fn test_part_one_short_result_is_5() {
    let segments = common::get_segments_from_input_short();
    assert_eq!(part_one(&segments), 5);
}

#[test]
fn test_part_two_short_result_is_12() {
    let segments = common::get_segments_from_input_short();
    assert_eq!(part_two(&segments), 12);
}

#[test]
fn test_part_one_input_full_result_is_5() {
    let segments = common::get_segments_from_input();
    assert_eq!(part_one(&segments), 8350);
}

#[test]
fn test_part_two_input_full_result_is_12() {
    let segments = common::get_segments_from_input();
    assert_eq!(part_two(&segments), 19374);
}