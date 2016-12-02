using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using SportsStore.Domain.Abstract;
using System.Collections.Generic;
using SportsStore.Domain.Entities;
using SportsStore.WebUI.Controllers;
using System.Linq;

namespace SportsStore.UnitTests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void CanPaginate()
        {
            Mock<IProductRepository> mock = new Mock<IProductRepository>();
            mock.Setup(m => m.Products).Returns(new List<Product> {
                new Product { Name = "Football", ProductID = 1},
                new Product { Name = "SurfBoard", ProductID = 2},
                new Product { Name = "Running shoes", ProductID = 3},
                new Product { Name = "Running shoes", ProductID = 4},
                new Product { Name = "Running shoes", ProductID = 5}
            });

            ProductController controller = new ProductController(mock.Object);
            controller.PageSize = 3;

            IEnumerable<Product> result = (IEnumerable<Product>)controller.List(2).Model;
            Product[] pArray = result.ToArray();
            Assert.IsTrue(pArray.Length == 2);
            Assert.AreEqual(pArray[0].Name, "Football");
            Assert.AreEqual(pArray[1].Name, "SurfBoard");
        }
    }
}
