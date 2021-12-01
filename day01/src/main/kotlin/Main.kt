fun getAsBufferReader(filename: String) = {}::class.java.getResourceAsStream(filename)?.bufferedReader()

fun partOne(numbers: List<Int>): Int {
    var lastValue = 0
    var largerThanPrevious = -1

    // may use reduce
    numbers.forEach {
        val currentValue = it
        if (currentValue > lastValue) {
            largerThanPrevious++
        }
        lastValue = currentValue
    }

    return largerThanPrevious
}

fun partTwo(numbers: List<Int>): Int {
    // read and get sum of three, increment by 3
    val numbersGrouped: MutableList<Int> = ArrayList()
    for (i in numbers.indices) {
        if (numbers.getOrNull(i+2) == null ||  numbers.getOrNull(i+1) == null) {
            break
        }

        val sum = numbers[i] + numbers[i + 1] + numbers[i + 2]
        numbersGrouped.add(sum)
    }

    // run partOne
    return partOne(numbersGrouped)
}


fun main() {
    val filename = "input.txt"
    val bufferedReader = getAsBufferReader(filename)
    require(bufferedReader != null) { "Can't read File!" }
    val numbers: List<Int> = bufferedReader.readLines().map { it.toInt() }

    val largerThanPrevious = partOne(numbers)
    println("There are %s larger values then the previous one".format(largerThanPrevious))
    require(largerThanPrevious == 1681) { "Result is wrong" }

    val largerThanPreviousSlidingWindow = partTwo(numbers)
    println("There are %s larger values then the sum of the three previous".format(largerThanPreviousSlidingWindow))
    require(largerThanPreviousSlidingWindow == 1704) { "Result is wrong" }
}