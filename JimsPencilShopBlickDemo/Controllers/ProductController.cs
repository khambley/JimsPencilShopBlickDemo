using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using JimsPencilShopBlickDemo.Models;

namespace JimsPencilShopBlickDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        ProductDataAccessLayer objProduct = new ProductDataAccessLayer();

        [HttpGet]
        [Route("api/Product/Index")]
        public IEnumerable<Product> Index()
        {
            return objProduct.GetAllProducts();
        }

        [HttpPost]
        [Route("api/Product/Create")]
        public int Create(Product product)
        {
            return objProduct.CreateProduct(product);
        }

        [HttpGet]
        [Route("api/Product/Details/{id}")]
        public Product Details(int id)
        {
            return objProduct.GetProductDetails(id);
        }

        [HttpPut]
        [Route("api/Product/Edit")]
        public int Edit(Product product)
        {
            return objProduct.UpdateProduct(product);
        }

        [HttpDelete]
        [Route("api/Product/Delete/{id}")]
        public int Delete (int id)
        {
            return objProduct.DeleteProduct(id);
        }

        [HttpGet]
        [Route("api/Product/GetBuyerList")]
        public IEnumerable<Buyer> Details()
        {
            return objProduct.GetBuyers();
        }
    }
}