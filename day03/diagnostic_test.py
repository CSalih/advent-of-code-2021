import unittest
from diagnostic import part_one, part_two

class TestDiagnostic(unittest.TestCase):
    def setUp(self):
        with open("./resources/input_short.txt") as file:
            self.diagnostic_report_short = [int(line.strip(), 2) for line in file]
        with open("./resources/input.txt") as file:
            self.diagnostic_report = [int(line.strip(), 2) for line in file]

    def test_part_one_short(self):
        result = part_one(self.diagnostic_report_short)
        self.assertEqual(result, 198)

    def test_part_one_full(self):
        result = part_one(self.diagnostic_report)
        self.assertEqual(result, 4006064)

    def test_part_two_short(self):
        result = part_two(self.diagnostic_report_short)
        self.assertEqual(result, 230)

    def test_part_two_full(self):
        result = part_two(self.diagnostic_report)
        self.assertEqual(result, 5941884)

if __name__ == "__main__":
    unittest.main()