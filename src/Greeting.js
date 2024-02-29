export function Greeting({ title, name = "user" }) {
  console.log(title, name);

  const married = true;
  // if (married){
  //     return <h1>Estoy casado</h1>
  // }
  // return <h1>Estoy soltero</h1>
  //   return <h1>{married ? "Estoy casadisimo" : "Estoy soltero"}</h1>;
  const user = {
    firstname: "Vladimr",
    lastname: "Gutierrez",
  };

  function add(x, y) {
    return x + y;
  }

  // return <h2>{add(30, 10)}</h2>;
  return (
    <h1>
      {" "}
      {title}, dice {name}
    </h1>
  );
}

export function HelloWord() {
  const hi = "Hello Word";
  return <h1>{hi}</h1>;
}

export function UserCard({name, amount, married, addres, greet}) {
  console.log(name, amount, married, addres, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>🤑{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {addres.city}</li>
        <li>Addres: {addres.street}</li>
      </ul>
      {/* <button onClick={greet()} >Alert</button> */}
    </div>
  );
}
