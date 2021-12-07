using System;
using System.IO;
using Microsoft.VisualStudio.TestTools.UnitTesting;

using TheTreacheryOfWhales;

namespace TheTreacheryOfWhalesTest
{
    [TestClass]
    [DeploymentItem(@"resources/input.txt", "resources")]
    public class TreacheryOfWhaleUnitTest
    {
        TheTreacheryOfWhale whale = new TheTreacheryOfWhale();

        private int[] GetCrabPositionsFromInput()
        {
            string fileContent = File.ReadAllText(@"resources/input.txt");
            return Array.ConvertAll(fileContent.Split(','), s => int.Parse(s));
        }

        [TestMethod]
        public void TestPartOneInputShortResultIs37()
        {
            int[] input = { 16, 1, 2, 0, 4, 2, 7, 1, 2, 14 };

            // Assert
            int actual = whale.PartOne(input);
            int expected = 37;
            Assert.AreEqual(expected, actual, "Not the cheapest possible fuel costs outcome");
        }

        [TestMethod]
        public void TestPartOneInputFullResultIs336131()
        {
            int[] input = GetCrabPositionsFromInput();

            // Assert
            int actual = whale.PartOne(input);
            int expected = 336131;
            Assert.AreEqual(expected, actual, "Not the cheapest possible fuel costs outcome");
        }

        [TestMethod]
        public void TestPartTwoInputShortResultIs168()
        {
            int[] input = { 16, 1, 2, 0, 4, 2, 7, 1, 2, 14 };

            // Assert
            int actual = whale.PartTwo(input);
            int expected = 168;
            Assert.AreEqual(expected, actual, "Not the cheapest possible fuel costs outcome");
        }

        [TestMethod]
        public void TestPartTwoInputFullResultIs92676646()
        {
            int[] input = GetCrabPositionsFromInput();

            // Assert
            int actual = whale.PartTwo(input);
            int expected = 92676646;
            Assert.AreEqual(expected, actual, "Not the cheapest possible fuel costs outcome");
        }
    }
}
