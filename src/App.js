import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import SearchBar from 'antd/lib/transfer/search';


function App() {

  const [foods, setFoods] = useState(foodsData);
  const [search, setSearch] = useState('');

  function addNewFood(newFood) {

    const updatedFoods = [...foods, newFood];

    setFoods(updatedFoods);

  }

  function deleteFood(name) {

    const filteredFoods = foods.filter(food => {
      return food.name !== name;
    });
    setFoods(filteredFoods);

  };

 
  return (
    <div className="App">

      {/* <Button> Hide Form / Add New Food </Button> */}
      
      {/* o primeiro search é o nome da props e o segundo search é o valor da props */}

      <SearchBar search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {
          foods
            .filter((currentFood) => {
              return currentFood.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((currentFood) => {
              return (<FoodBox food={currentFood} deleteFood={deleteFood} key={currentFood.name} />);
            })
        }
      </Row>

      <AddFoodForm addFood={addNewFood} />

    </div>
  );
}

export default App;