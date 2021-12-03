from typing import List, Callable
from statistics import mode, multimode, StatisticsError


def most_common_bit(bits: List[str], default: str = "1") -> str:
    """
    Returns the most common bit of the given bits
    """
    most_common_bits = multimode(bits)
    if len(most_common_bits) == 1:
        return most_common_bits[0]
    
    # no unique mode found
    return default

def least_common_bit(bits: List[str]) -> str:
    """
    Returns the least common bit of the given bits
    """
    return str(abs(int(most_common_bit(bits), 2) - 1))


def common_bit_values(values: List[str], bit_length, compare: Callable) -> str:
    """
    Compares the bits column wise and returns the common value with respect to the compare function.
    """
    for i in range(bit_length):
        common_bit_value = compare(val[i] for val in values)
        values = list(filter(lambda report_string: report_string[i] == common_bit_value, values))

        if len(values) == 1:
           return values[0]

    raise Exception("There are too many values left")


def part_one(diagnosticReport: List[int])  -> int:
    bit_length = max(report.bit_length() for report in diagnosticReport)
    diagnosticReport = ["{0:0{width}b}".format(report, width = bit_length) for report in diagnosticReport]

    gamma = ""
    for i in range(bit_length):
        gamma += most_common_bit(report[i] for report in diagnosticReport)

    gamma = int(gamma, 2)
    # the least common bit is the inverse of gamma
    epsilon = gamma ^ int(bit_length*'1', 2)
    return gamma * epsilon


def part_two(diagnosticReport: List[int]) -> int:
    bit_length = max(report.bit_length() for report in diagnosticReport)
    diagnosticReport = ["{0:0{width}b}".format(report, width = bit_length) for report in diagnosticReport]

    oxygen_generator_rating = int(common_bit_values(diagnosticReport, bit_length, most_common_bit), 2)
    co2_scrubber_rating = int(common_bit_values(diagnosticReport, bit_length, least_common_bit), 2)
    return oxygen_generator_rating * co2_scrubber_rating
