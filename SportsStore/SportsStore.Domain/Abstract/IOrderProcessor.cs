
namespace SportsStore.Domain.Abstract
{
    using SportsStore.Domain.Entities;

    public interface IOrderProcessor
    {
        void ProcessOrder(Cart cart, ShippingDetails shippingDetails);
    }
}
