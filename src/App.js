import './App.css';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';


function App() {

  const [foods, setFoods] = useState(foodsData);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);
  }

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

      <Button onClick={handleShowForm}>
        {showForm === true ? <span>Hide Button</span> : <span>Add new Food</span>}
      </Button>

      {showForm === true && (
        <AddFoodForm addFood={addNewFood} />)}


      {/* o primeiro search é o nome da props e o segundo search é o valor da props */}
      <SearchBar search={search} setSearch={setSearch} />

      <br />
      <Divider>Food List</Divider>
      <br />
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {
          foods
            .filter((currentFood) => {
              return (
                currentFood.name.toLowerCase().includes(search.toLowerCase()) || String(currentFood.calories).includes(search)
              );
            })
            .map((currentFood) => {
              return (<FoodBox food={currentFood} deleteFood={deleteFood} key={currentFood.name} />);
            })
        }
      </Row>


    </div>
  );
}

export default App;