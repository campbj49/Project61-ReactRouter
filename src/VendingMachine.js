import { useState } from "react";
import foodList from "./FoodList";
import { Link } from "react-router-dom";

/** VendingMachine: displays list of links in the router
 * 
 * State:
 * -none
 * 
 * Props;
 * -none
 * 
 * App --> VendingMachine --> Item
 */
 function VendingMachine(props) {
  //create a link list from foodList
  let linkList = [];
  for(let foodKey in foodList){
    let food = foodList[foodKey];
    linkList.push(
      <p>
        <Link to={food.slug}>
          {food.name}
        </Link>
      </p>
    )
  }
  return (
    <div className="VendingMachine">
      <h3>This vending machine has these options:</h3>
      <div className="OptionList">
        {linkList}
      </div>
    </div>
  );
}

export default VendingMachine;
