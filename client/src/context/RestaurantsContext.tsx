import React, { useState, createContext } from "react";

type Restaurant = {
  id: string;
  name: string;
  location: string;
  price_range: number;
};

type RestaurantContext = {
  restaurants: Restaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<never[]>>;
};

const defaultValue = {
  restaurants: [],
  setRestaurants: () => {},
};

export const RestaurantsContext =
  createContext<RestaurantContext>(defaultValue);

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
