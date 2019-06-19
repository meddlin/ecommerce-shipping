using EcommerceShipping3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceShipping3.DataAccess
{
    public class ProductData
    {
        public static Product Lookup(int id)
        {
            return new Product() { ProductId = id, ShipOnWeekends = true, MaxBusinessDaysToShip = 2 };
        }

        public static void Update(Product original, Product updated)
        {
            original = new Product()
            {
                ProductId = (original.ProductId != updated.ProductId) ? updated.ProductId : original.ProductId,
                ProductName = (original.ProductName != updated.ProductName) ? updated.ProductName : original.ProductName,
                InventoryQuantity = (original.InventoryQuantity != updated.InventoryQuantity) ? updated.InventoryQuantity : original.InventoryQuantity,
                ShipOnWeekends = (original.ShipOnWeekends != updated.ShipOnWeekends) ? updated.ShipOnWeekends : original.ShipOnWeekends,
                MaxBusinessDaysToShip = (original.MaxBusinessDaysToShip != updated.MaxBusinessDaysToShip) ? updated.MaxBusinessDaysToShip : original.MaxBusinessDaysToShip,
                ShipDate = (original.ShipDate != updated.ShipDate) ? updated.ShipDate : original.ShipDate
            };
        }
    }
}
