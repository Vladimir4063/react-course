import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, HelloWord, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { TaskCard } from "./Task";
import { Button } from "./Button";
// import component
import { Saludar } from "./Saludar";

// fetch API
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

// funcion del input

const handleChange = (e) => {
  console.log(e.target.value);
};

const handClick = (e) => {
  console.log("Hiciste click, y esto tiene el input: -> " + e.target.value);
};

const user = [
  {
    id: 1,
    name: "Sacha G.",
    image: "https://robohash.org/sacha",
  },
  {
    id: 2,
    name: "Joe M.",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Marcus J.",
    image: "https://robohash.org/user10",
  },
];
root.render(
  <>
    {
      user.map((user, i) => {
        return (
          <div key={i}>
            <h1>{user.name}</h1>
            <img src={user.image} />
          </div>
        );
      })

      // <Post />

      /* <TaskCard ready={true} />
    <TaskCard />

    <Saludar />
    <Button text="Saludar" />
    <input id="Hola" onChange={handleChange} />
    <input id="Hola" onClick={handClick} />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Enviado");
        alert("Enviado!");
      }}
    >
      <h1>Registro de Users</h1>
      <button>Send</button>
    </form> */
    }
    {/* fetch API */}
    {/* <Gets/> */}
  </>
);
