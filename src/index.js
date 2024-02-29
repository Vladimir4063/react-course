import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, HelloWord, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import {TaskCard} from "./Task"
import {Button} from "./Button"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready={true} />
    <TaskCard />
    <TaskCard />
  </>
);
