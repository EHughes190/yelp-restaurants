import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./routes/Home";
import { RestaurantDetails } from "./routes/RestaurantDetails";
import { UpdateRestaurant } from "./routes/UpdateRestaurant";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = (): JSX.Element => {
  return (
    <RestaurantsContextProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants/:id" element={<RestaurantDetails />} />
            <Route
              path="/restaurants/:id/update"
              element={<UpdateRestaurant />}
            />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
