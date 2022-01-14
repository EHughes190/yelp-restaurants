import React from "react";
import { AddRestaurant } from "../components/AddRestaurant/AddRestaurant";
import { RestaurantList } from "../components/RestaurantList/RestaurantList";

export const Home = (): JSX.Element => {
  return (
    <div>
      <h1>Restaurant Finder</h1>
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
};
