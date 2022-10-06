import React, {useState} from "react";

function PizzaForm({isVegetarian, isNotVegetarian, handleNotVegetarian, handleVegetarian, addNewPizza}) {
  const [selectSize, setSelectSize] = useState("Small")
  const [pizzaTopping, setPizzaTopping] = useState("")



  function handleSelect(e) {
    setSelectSize(e.target.value)
    // console.log(e.target.value)
  }

  function handleTopping(e) {
    setPizzaTopping(e.target.value)
    // console.log(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topping: pizzaTopping,
        size: selectSize,
        vegetarian: isVegetarian
      })
    })
    .then(r => r.json())
    .then(newObj => {
      addNewPizza(newObj)
      console.log(newObj)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={pizzaTopping}
            placeholder="Pizza Topping"
            onChange={handleTopping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={selectSize} onChange={handleSelect}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={isVegetarian}
              onChange={handleVegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={isNotVegetarian}
              onChange={handleNotVegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
