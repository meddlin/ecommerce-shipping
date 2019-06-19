using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EcommerceShipping3.DataAccess;
using EcommerceShipping3.Models;
using EcommerceShipping3.Utility;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EcommerceShipping3.Controllers
{
    [Produces("application/json")]
    [EnableCors("AppPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return new List<Product>() {
                new Product() { ProductName = "prod 1", InventoryQuantity = 10 },
                new Product() { ProductName = "prod 2", InventoryQuantity = 2 }
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id)
        {
            return new Product() { ProductName = "prod 1", InventoryQuantity = 10 };
        }

        [HttpPost]
        [Route("shipdate")]
        public Product ShipDate([FromBody]Product item)
        {
            item.ShipDate = DateHelper.CalculateShipDate(null, item.MaxBusinessDaysToShip, item.ShipOnWeekends);
            return item;
        }
    }
}