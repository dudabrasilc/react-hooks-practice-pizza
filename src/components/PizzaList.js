import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzaList}) {

  console.log(pizzaList)
  const allPizzas = pizzaList.map(pizza => {
    return (
        <Pizza key={pizza.id} pizza={pizza}/>
    )
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {allPizzas}
      </tbody>
    </table>
  );
}

export default PizzaList;
