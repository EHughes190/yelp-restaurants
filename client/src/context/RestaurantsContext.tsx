import React, { useState, createContext } from "react";

type Restaurant = {
  id: string;
  name: string;
  location: string;
  price_range: number;
};

type RestaurantContext = {
  restaurants: Restaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
  addRestaurant: (restaurant: Restaurant) => void;
};

const defaultValue = {
  restaurants: [],
  setRestaurants: () => {},
  addRestaurant: () => {},
};

export const RestaurantsContext =
  createContext<RestaurantContext>(defaultValue);

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const addRestaurant = (restaurant: Restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, addRestaurant }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
