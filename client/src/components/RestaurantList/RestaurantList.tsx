import React, { useContext, useEffect } from "react";
import "./RestaurantList.css";
import RestaurantFinder from "../../apis/RestaurantFinder";
import { RestaurantsContext } from "../../context/RestaurantsContext";

export const RestaurantList = (): JSX.Element => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  const getRestaurants = async () => {
    try {
      const response = await RestaurantFinder.get("/");
      setRestaurants(response.data.data.restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Location</th>
            <th>Price Range</th>
            <th>Ratings</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => {
            return (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{restaurant.price_range}</td>
                <td>reviews</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>McDonalds</td>
            <td>London</td>
            <td>$$</td>
            <td>5 star</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Wendys</td>
            <td>London</td>
            <td>$$</td>
            <td>3 star</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
