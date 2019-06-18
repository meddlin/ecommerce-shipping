using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceShipping.Models
{
    public class Order
    {
        public Guid OrderId { get; set; }
        public List<Product> ItemsList { get; set; }

        public DateTime DateOrdered { get; set; }
        public DateTime ShipDate { get; set; } 
        public DateTime DateCreated { get; set; }

        /// <summary>
        /// Calculates the order date as the date of the "latest" item in the list with the latest date.
        /// </summary>
        /// <param name="ordered"></param>
        /// <param name="products"></param>
        /// <returns></returns>
        public DateTime CalculateOrderShipDate(DateTime ordered, List<Product> items) => items.OrderBy(p => p.ShipDate).SingleOrDefault().ShipDate;
    }
}
