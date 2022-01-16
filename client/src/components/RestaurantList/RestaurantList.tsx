import React, { useContext, useEffect } from "react";
import "./RestaurantList.css";
import RestaurantFinder from "../../apis/RestaurantFinder";
import { RestaurantsContext } from "../../context/RestaurantsContext";
import { Link } from "react-router-dom";

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

  const handleDelete = async (id: string) => {
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const convertPriceToSymbol = (price: number): string => {
    let newPrice = "";
    for (let i = 1; i <= price; i++) {
      newPrice = newPrice + "$";
    }

    return newPrice;
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
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => {
            return (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{convertPriceToSymbol(restaurant.price_range)}</td>
                <td>reviews</td>
                <td>
                  <Link to={`/restaurants/${restaurant.id}/update`}>
                    <button>Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(restaurant.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/restaurants/${restaurant.id}`}>
                    <button>Details</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
