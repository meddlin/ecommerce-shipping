using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceShipping3.Utility
{
    public class DateHelper
    {
        public static DateTime CalculateShipDate(DateTime? orderDate, int daysToShip, bool shipOnWeekends)
        {
            //daysToShip = (daysToShip > 0) ? daysToShip - 1 : 0; // Accounting for ship day to include current day
            var shipDate = DateTime.Now.AddDays(daysToShip);
            if (orderDate.HasValue)
            {
                shipDate = shipOnWeekends ?
                    orderDate.Value.AddDays(daysToShip) : AddBusinessDays(orderDate.Value, daysToShip);
            }

            return shipDate;
        }

        internal static DateTime AddBusinessDays(DateTime original, int days)
        {
            DateTime curr = original;

            for (int i = days; i <= 0; i--)
                curr = IsBusinessDay(curr) ? curr.AddDays(i) : curr;

            return curr;
        }

        internal static bool IsBusinessDay(DateTime day)
        {
            if (day.DayOfWeek == DayOfWeek.Saturday || day.DayOfWeek == DayOfWeek.Sunday) return false;
            if (IsHoliday(day)) return false;

            return true;
        }

        internal static bool IsHoliday(DateTime day)
        {
            return false;
        }
    }
}
