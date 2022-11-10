import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';


function App() {

  const [foods, setFoods] = useState(foodsData);

  function addNewFood(newFood) {

    const updatedFoods = [...foods, newFood];

    setFoods(updatedFoods);

  }

  return (
    <div className="App">

      <AddFoodForm addFood={addNewFood} />

      <h1>Food List</h1>
      <hr />

      <div className='food-list'>
        {
          foods.map((currentFood) => {

            return (<FoodBox food={currentFood} />);
          })
        }
      </div>

    </div>
  );
}

export default App;
