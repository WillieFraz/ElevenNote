using RestaurantRaterMVC.Data;
using RestaurantRaterMVC.Models.Restaurant;
using Microsoft.EntityFrameworkCore;
using Index = Microsoft.EntityFrameworkCore.Metadata.Internal.Index;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace RestaurantRaterMVC.Servcies
{
    public class RestaurantService
    {
        private RestaurantDbContext _context;
        public RestaurantService(RestaurantDbContext context)
        {          
            _context = context;
        }

        public async Task<List<RestaurantListItem>> GetAllRestaurants()
        {
            List<RestaurantListItem> restaurants = await _context.Restaurants.Include(r => r.Ratings)
                .Select( r => new RestaurantListItem()
                {
                    Id = r.Id,
                    Name = r.Name,
                    Score = r.Score,
                }).ToListAsync();
           
            return restaurants;
        }

        public async Task<bool> CreateRestaurant(RestaurantCreate model)
        {
            Restaurant restaurant = new Restaurant()
            {
                Name = model.Name,
                Location = model.Location,
            };

            _context.Restaurants.Add(restaurant);
            return await _context.SaveChangesAsync() == 1;
        }

        public async Task<RestaurantDetail> GetRestaurantById(int id)
        {
            Restaurant restaurant = await _context.Restaurants
            .Include(r => r.Ratings)
                .FirstOrDefaultAsync(r => r.Id == id);


            return restaurant;
        }

        
        
    }
}