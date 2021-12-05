use std::collections::HashMap;

/// Point(x, y) in coordinate system
#[derive(Debug, Copy, Clone, Eq, PartialEq, Hash)]
struct Point(i32, i32);

/// Line segment with a begin and end point
#[derive(Debug, Clone)]
pub struct LineSegment(Point, Point);


/// Thanks to https://github.com/richardneililagan/adventofcode-2021 for this nice solution
impl LineSegment {
    fn is_diagonal(&self) -> bool {
        let p1 = self.0;
        let p2 = self.1;

        (p1.0 != p2.0) && (p1.1 != p2.1)
    }

    /// Get the points that are on this line segment, including the endpoints.
    fn get_line_points(&self) -> Vec<Point> {
        match self {
            LineSegment(Point(x1, m), Point(x2, n)) if x1 == x2 => {
                let yrange = if m < n {
                    (*m..=*n).collect::<Vec<i32>>()
                } else {
                    (*n..=*m).rev().collect::<Vec<i32>>()
                };

                yrange.iter().map(|&y| Point(*x1, y)).collect()
            }
            LineSegment(Point(m, y1), Point(n, y2)) if y1 == y2 => {
                let xrange = if m < n {
                    (*m..=*n).collect::<Vec<i32>>()
                } else {
                    (*n..=*m).rev().collect::<Vec<i32>>()
                };

                xrange.iter().map(|&x| Point(x, *y1)).collect()
            }
            LineSegment(Point(x1, y1), Point(x2, y2)) => {
                let xrange = if x1 < x2 {
                    (*x1..=*x2).collect::<Vec<i32>>()
                } else {
                    (*x2..=*x1).rev().collect::<Vec<i32>>()
                };

                let yrange = if y1 < y2 {
                    (*y1..=*y2).collect::<Vec<i32>>()
                } else {
                    (*y2..=*y1).rev().collect::<Vec<i32>>()
                };

                let pairwise = xrange.iter().zip(yrange.into_iter());
                pairwise.map(|(&x, y)| Point(x, y)).collect()
            }
        }
    }
}

pub fn create_segment_from_input(input: &str) -> Vec<LineSegment> {
    input
        .lines()
        .map(|line| {
            line
                .split(" -> ")
                .map(|coordinate| {
                    coordinate
                        .split(",")
                        .map(|point| point.parse::<i32>().unwrap())
                        .collect::<Vec<i32>>()
                })
                .map(|point| Point(point[0], point[1]))
                .collect::<Vec<Point>>()
        })
        .map(|points| LineSegment(points[0], points[1]))
        .collect::<Vec<LineSegment>>()
}

/// Counts the intersection for all points within the given line segments.
fn line_segment_point_intersection_count(line_segments: &Vec<LineSegment>) -> HashMap<Point, i32> {
    let mut map: HashMap<Point, i32> = HashMap::new();
    line_segments
        .iter()
        .for_each(|segment| {
            segment
                .get_line_points()
                .iter()
                .for_each(|point| {
                    let count = map.entry(*point).or_insert(0);
                    *count += 1;
                })
        });
    return map;
}

pub fn part_one(line_segments: &Vec<LineSegment>) -> usize {
    let line_segments_without_diagonal: Vec<LineSegment> = line_segments
        .iter()
        .filter(|segment| !segment.is_diagonal())
        .cloned()
        .collect();

    return line_segment_point_intersection_count(&line_segments_without_diagonal)
        .iter()
        .filter(|(_, &i)| i >= 2)
        .count();
}

pub fn part_two(line_segments: &Vec<LineSegment>) -> usize {
    return line_segment_point_intersection_count(line_segments)
        .iter()
        .filter(|(_, &i)| i >= 2)
        .count();
}

#[cfg(test)]
mod tests {
    use super::*;

    fn get_segments() -> Vec<LineSegment> {
        let mut segments: Vec<LineSegment> = Vec::new();
        segments.push(LineSegment(Point(0, 9), Point(5, 9)));
        segments.push(LineSegment(Point(8, 0), Point(0, 8)));
        segments.push(LineSegment(Point(9, 4), Point(3, 4)));
        segments.push(LineSegment(Point(2, 2), Point(2, 1)));
        segments.push(LineSegment(Point(7, 0), Point(7, 4)));
        segments.push(LineSegment(Point(6, 4), Point(2, 0)));
        segments.push(LineSegment(Point(0, 9), Point(2, 9)));
        segments.push(LineSegment(Point(3, 4), Point(1, 4)));
        segments.push(LineSegment(Point(0, 0), Point(8, 8)));
        segments.push(LineSegment(Point(5, 5), Point(8, 2)));
        return segments;
    }

    #[test]
    fn test_part_one_result_is_5() {
        let segments = get_segments();
        assert_eq!(part_one(&segments), 5);
    }

    #[test]
    fn test_part_two_result_is_12() {
        let segments = get_segments();
        assert_eq!(part_two(&segments), 12);
    }
}