
import './App.css';
import foods from "./foods.json";
import Example from './components/example';
import FoodList from './components/foodList';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


import { useState } from 'react';


function App () {

  const [food, setFood] = useState(foods);
  const [search, searchBar] = useState(food)

  

  const filter= food.filter((x)=> {
    const searchResult= x.name.includes(search)
    return searchResult
  })

  function delate(name){
    const delatedArr= [...food].filter((element)=>{
      return element.name!==name
    }
   
    )
    setFood(delatedArr)

  }

  function addFood(newFood){
   setFood([...food,newFood])

  }

  
  return <div className="App">
    
    <AddFoodForm addFood={addFood} />

    <Search searchBar={searchBar} />



    {
    filter.map((p) => (
      <FoodBox delate ={delate} food={ {
        name: p.name,
        calories: p.calories,
        image: p.image,
        servings: p.servings
      }} />
    ))}



    <Example/>


  </div>;
}
export default App;