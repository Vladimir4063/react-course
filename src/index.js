import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, HelloWord, UserCard } from './Greeting'
import Product, {Navbar} from "./Product";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <UserCard
      name="Vladimir G."
      amount={3000}
      married={true}
      point={[98, 23.2, 22.1]}
      addres={{ street: "Victor Hugo", city: "Pinamar" }}
    />
  </>
);