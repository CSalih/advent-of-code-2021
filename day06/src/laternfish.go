package main

import (
	"fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

func getInputAsIntegers(filename string) []int {
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		panic(err)
	}

	numbersAsString := strings.Split(string(data), ",")
	numbers := []int{}
	for _, numberAsString := range numbersAsString {
		number, err := strconv.Atoi(numberAsString)
		if err != nil {
			panic(err)
		}
		numbers = append(numbers, number)
	}
	return numbers
}

// States of a timer 
const (
	READY_TO_HATCH = 0
	ALREADY_HATCHED = 6
	NEW_LATERNFISCH = 8
)

// Instead of calculate everything again and again we use a greedy algorithm approach
func calculatePopulation(laternfishes []int, days int) int {
	laternfishesTimerMap := make(map[int]int)
	for laternfishTimer := range laternfishes {
		laternfishesTimerMap[laternfishes[laternfishTimer]] += 1
	}

	for day := 0; day < days; day++ {
		bornLaternfishes := laternfishesTimerMap[READY_TO_HATCH]

		for i := 0; i < NEW_LATERNFISCH; i++ {
			laternfishesTimerMap[i] = laternfishesTimerMap[i+1]
		}

		laternfishesTimerMap[ALREADY_HATCHED] += bornLaternfishes
		laternfishesTimerMap[NEW_LATERNFISCH] = bornLaternfishes
	}
	totalLivingLaternfishes := 0
	for _, count := range laternfishesTimerMap {
		totalLivingLaternfishes += count;
	}
	return totalLivingLaternfishes
}

func main() {
	inputShort := getInputAsIntegers("resources/input.txt")
	laternfishesAfter80Days := calculatePopulation(inputShort, 80)
	fmt.Println(laternfishesAfter80Days)
	laternfishesAfter256Days := calculatePopulation(inputShort, 256)
	fmt.Println(laternfishesAfter256Days)
}
