import React, { useContext, useState } from "react";
import RestaurantFinder from "../../apis/RestaurantFinder";
import { RestaurantsContext } from "../../context/RestaurantsContext";
import "./AddRestaurant.css";

export const AddRestaurant = (): JSX.Element => {
  const { addRestaurant } = useContext(RestaurantsContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post("/", {
        name: name,
        location: location,
        price_range: priceRange,
      });
      addRestaurant(response.data.data.restaurant);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div>
          <select
            value={priceRange}
            onChange={(e) => {
              setPriceRange(e.target.value);
            }}
          >
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
