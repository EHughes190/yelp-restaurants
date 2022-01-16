import React from "react";

type ReviewProps = {
  name: string;
  rating: number;
  review: string;
};

export const Review = ({ name, rating, review }: ReviewProps): JSX.Element => {
  return (
    <div
      style={{
        height: "150px",
        width: "200px",
        border: "2px solid red",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <p>{name}</p>
        <p>{rating}</p>
      </div>
      <p>{review}</p>
    </div>
  );
};
