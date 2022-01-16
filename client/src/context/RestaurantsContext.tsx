import React, { useState, createContext } from "react";

type Restaurant = {
  id: string;
  name: string;
  location: string;
  price_range: number;
};

type Review = {
  id: string;
  name: string;
  rating: number;
  restaurant_id: string;
  review: string;
};

type RestaurantData = {
  restaurant: Restaurant;
  reviews: Review[];
};

type RestaurantContext = {
  restaurants: Restaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
  addRestaurant: (restaurant: Restaurant) => void;
  selectedRestaurant: RestaurantData | undefined;
  setSelectedRestaurant: React.Dispatch<
    React.SetStateAction<RestaurantData | undefined>
  >;
};

const defaultValue = {
  restaurants: [],
  setRestaurants: () => {},
  addRestaurant: () => {},
  selectedRestaurant: undefined,
  setSelectedRestaurant: () => {},
};

export const RestaurantsContext =
  createContext<RestaurantContext>(defaultValue);

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantData>();

  const addRestaurant = (restaurant: Restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurant,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
