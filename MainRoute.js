import React from 'react';
import WhatsYourName from'./WhatsYourName';
import {
  Route,Router,
  Switch
} from "react-router-dom";
import GroceryList from'./GroceryList';
const MainRoute = () =>(
<main>

<Route path="/fruitlist" component = {GroceryList} />


</main>


)
export default MainRoute;