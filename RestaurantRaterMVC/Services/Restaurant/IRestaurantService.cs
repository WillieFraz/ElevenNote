using RestaurantRaterMVC.Data;
using RestaurantRaterMVC.Models.Restaurant;

namespace RestaurantRaterMVC.Servcies
{
    public interface IRestaurantService
    {
        Task<bool> CreateRestaurant(RestaurantCreate model);
        Task<List<RestaurantListItem>> GetAllRestaurants();
        Task<RestaurantDetail> GetRestaurantById(int id);
        Task<bool> UpdateRestaurant(RestaurantEdit model);
        Task<bool> DeleteRestaurant(int id);
        Task<Restaurant> GetRestaurantById();
    }

    
}