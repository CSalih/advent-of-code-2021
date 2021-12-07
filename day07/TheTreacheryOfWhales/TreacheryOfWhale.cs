using System;
using System.Linq;
using System.Collections.Generic;

namespace TheTreacheryOfWhales
{
    public class TheTreacheryOfWhale
    {
        /// <summary>
        /// Calculates the minimal fuel. When <c>dynamicIncrease</c> is true the fuel
        /// will increment with each movement by 1, otherwise a movement cost one fuel.
        /// </summary>
        /// <remarks>1 + 2 + ... + n = (n * (n + 1)) / 2</remarks>
        /// 
        /// <param name="crabPositions">
        ///     List of positions of the cabs
        /// </param>
        /// <param name="dynamicIncrease">
        ///     Fuel will increased with each movement, otherwise a movement cost 1 fuel
        /// </param>
        /// <returns>The minimal fuel cost with respect to <c>dynamicIncrease</c></returns>
        private int CaclulateMinimalFuelCost(int[] crabPositions, bool dynamicIncrease = false)
        {
            return Enumerable
                .Range(0, crabPositions.Max())
                .Select(c => crabPositions
                    .Select(c2 => Math.Abs(c2 - c))
                    .Sum(fuelCost => dynamicIncrease ? fuelCost * (fuelCost + 1) / 2 : fuelCost))
                .Min();
        }

        public int PartOne(int[] crabHorizontalPositions)
        {
            return CaclulateMinimalFuelCost(crabHorizontalPositions);
        }

        public int PartTwo(int[] crabHorizontalPositions)
        {
            return CaclulateMinimalFuelCost(crabHorizontalPositions, true);
        }
    }
}