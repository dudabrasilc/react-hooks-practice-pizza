import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setPizzaList] = useState([])
  const [isVegetarian, setIsVegetarian] = useState(false)
  const [isNotVegetarian, setIsNotVegetarian] = useState(false)


  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
    .then(r => r.json())
    .then(pizzas => {
      // console.log(pizzas)
      setPizzaList(pizzas)
    })
  }, [])

  function handleVegetarian() {
    if (isVegetarian === false) {
      setIsVegetarian(true)
      setIsNotVegetarian(false)
    }
  }

  console.log(isVegetarian)

  function handleNotVegetarian() {
    if (isNotVegetarian === false) {
      setIsNotVegetarian(true)
      setIsVegetarian(false)
    }
  }

  function addNewPizza(newPizza) {
    // console.log('in app: ', newPizza)
    const newPizzaArray = [...pizzaList, newPizza]
    setPizzaList(newPizzaArray)
  }


  return (
    <>
      <Header />
      <PizzaForm isVegetarian={isVegetarian} isNotVegetarian={isNotVegetarian} handleNotVegetarian={handleNotVegetarian} handleVegetarian={handleVegetarian} addNewPizza={addNewPizza}/>
      <PizzaList pizzaList={pizzaList}/>
    </>
  );
}

export default App;
