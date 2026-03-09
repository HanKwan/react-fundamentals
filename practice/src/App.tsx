import Card from "./Card"
import List from "./List";

function App() {
  
  const fastFoods= [  {id: 1, name: "hamburger", price: 500}, 
                      {id: 2, name: "pizza", price: 800}, 
                      {id: 3, name: "cup noodle", price: 200}, 
                      {id: 4, name: "fried chicken", price: 600}]

  const drinks = [  {id: 6, name: "orange juice", price: 200}, 
                    {id: 7, name: "soda", price: 170}, 
                    {id: 8, name: "coca cola", price: 180}, 
                    {id: 9, name: "tea", price: 110}]   

  return(
    <>
      <Card />
      <Card />
      <br />
      <List items={fastFoods} catagory="Fast foods"/>
      <List items={drinks} catagory="Drinks"/>
    </>
  );

}

export default App
