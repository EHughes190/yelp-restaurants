import React from "react";

export const AddRestaurant = (): JSX.Element => {
  return (
    <div>
      <form action="">
        <div>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Location" />
          </div>
          <div>
            <select>
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};
