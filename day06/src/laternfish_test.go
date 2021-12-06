package main

import "testing"

func TestPartOneShortInputResultIsAfter18Days26(t *testing.T) {
	laternfishes := []int{3, 4, 3, 1, 2}
	got := calculatePopulation(laternfishes, 18)
	want := 26

	if got != want {
		t.Errorf("got %d, wanted %d", got, want)
	}
}

func TestPartOneShortInputResultIsAfter80Days5934(t *testing.T) {
	laternfishes := []int{3, 4, 3, 1, 2}
	got := calculatePopulation(laternfishes, 80)
	want := 5934

	if got != want {
		t.Errorf("got %d, wanted %d", got, want)
	}
}

func TestPartOneShortInputResultIsAfter256Days26984457539(t *testing.T) {
	laternfishes := []int{3, 4, 3, 1, 2}
	got := calculatePopulation(laternfishes, 256)
	want := 26984457539

	if got != want {
		t.Errorf("got %d, wanted %d", got, want)
	}
}

func TestPartOneFullInputResultIsAfter80Days362666(t *testing.T) {
	laternfishes := []int{
		2,4,1,5,1,3,1,1,5,2,2,5,4,2,1,2,5,3,2,4,1,3,5,3,1,3,1,3,5,4,1,1,1,1,5,1,2,5,5,5,2,3,4,1,1,1,
		2,1,4,1,3,2,1,4,3,1,4,1,5,4,5,1,4,1,2,2,3,1,1,1,2,5,1,1,1,2,1,1,2,2,1,4,3,3,1,1,1,2,1,2,5,4,
		1,4,3,1,5,5,1,3,1,5,1,5,2,4,5,1,2,1,1,5,4,1,1,4,5,3,1,4,5,1,3,2,2,1,1,1,4,5,2,2,5,1,4,5,2,1,
		1,5,3,1,1,1,3,1,2,3,3,1,4,3,1,2,3,1,4,2,1,2,5,4,2,5,4,1,1,2,1,2,4,3,3,1,1,5,1,1,1,1,1,3,1,4,
		1,4,1,2,3,5,1,2,5,4,5,4,1,3,1,4,3,1,2,2,2,1,5,1,1,1,3,2,1,3,5,2,1,1,4,4,3,5,3,5,1,4,3,1,3,5,
		1,3,4,1,2,5,2,1,5,4,3,4,1,3,3,5,1,1,3,5,3,3,4,3,5,5,1,4,1,1,3,5,5,1,5,4,4,1,3,1,1,1,1,3,2,1,
		2,3,1,5,1,1,1,4,3,1,1,1,1,1,1,1,1,1,2,1,1,2,5,3,
	}
	got := calculatePopulation(laternfishes, 80)
	want := 362666

	if got != want {
		t.Errorf("got %d, wanted %d", got, want)
	}
}

func TestPartOneFullInputResultIsAfter256Days362666(t *testing.T) {
	laternfishes := []int{
		2,4,1,5,1,3,1,1,5,2,2,5,4,2,1,2,5,3,2,4,1,3,5,3,1,3,1,3,5,4,1,1,1,1,5,1,2,5,5,5,2,3,4,1,1,1,
		2,1,4,1,3,2,1,4,3,1,4,1,5,4,5,1,4,1,2,2,3,1,1,1,2,5,1,1,1,2,1,1,2,2,1,4,3,3,1,1,1,2,1,2,5,4,
		1,4,3,1,5,5,1,3,1,5,1,5,2,4,5,1,2,1,1,5,4,1,1,4,5,3,1,4,5,1,3,2,2,1,1,1,4,5,2,2,5,1,4,5,2,1,
		1,5,3,1,1,1,3,1,2,3,3,1,4,3,1,2,3,1,4,2,1,2,5,4,2,5,4,1,1,2,1,2,4,3,3,1,1,5,1,1,1,1,1,3,1,4,
		1,4,1,2,3,5,1,2,5,4,5,4,1,3,1,4,3,1,2,2,2,1,5,1,1,1,3,2,1,3,5,2,1,1,4,4,3,5,3,5,1,4,3,1,3,5,
		1,3,4,1,2,5,2,1,5,4,3,4,1,3,3,5,1,1,3,5,3,3,4,3,5,5,1,4,1,1,3,5,5,1,5,4,4,1,3,1,1,1,1,3,2,1,
		2,3,1,5,1,1,1,4,3,1,1,1,1,1,1,1,1,1,2,1,1,2,5,3,
	}
	got := calculatePopulation(laternfishes, 256)
	want := 1640526601595

	if got != want {
		t.Errorf("got %d, wanted %d", got, want)
	}
}


