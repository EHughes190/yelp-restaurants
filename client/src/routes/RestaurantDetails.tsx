import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import AddReview from "../components/AddReview";
import { Review } from "../components/Review";
import { RestaurantsContext } from "../context/RestaurantsContext";

export const RestaurantDetails = (): JSX.Element => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRestaurantData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{selectedRestaurant?.restaurant.name}</h1>
      <p>
        {selectedRestaurant?.restaurant.average_rating}{" "}
        {selectedRestaurant?.restaurant.count &&
          `(${selectedRestaurant.restaurant.count})`}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {selectedRestaurant?.reviews.map((review) => {
          return (
            <Review
              key={review.id}
              name={review.name}
              review={review.review}
              rating={review.rating}
            />
          );
        })}
      </div>
      <AddReview />
    </div>
  );
};
