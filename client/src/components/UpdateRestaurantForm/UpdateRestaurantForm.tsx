import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../../apis/RestaurantFinder";

export const UpdateRestaurantForm = (): JSX.Element => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.put(`/${id}`, {
        name: name,
        location: location,
        price_range: priceRange,
      });
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchRestaurantData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);

      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };

    fetchRestaurantData();
  }, []);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            defaultValue={name}
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            defaultValue={location}
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
