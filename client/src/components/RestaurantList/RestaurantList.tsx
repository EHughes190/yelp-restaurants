import React from "react";
import "./RestaurantList.css";

export const RestaurantList = (): JSX.Element => {
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
          <tr>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};
