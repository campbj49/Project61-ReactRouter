import { useState } from "react";
import foodList from "./FoodList";
import { useParams } from "react-router-dom"

/** Food: displays list of links in the router
 * 
 * State:
 * -none
 * 
 * Props;
 * -none
 * 
 * App --> Food --> Item
 */
 function Food() {
    const {name} = useParams();
    console.log(name);
    return (
        <div className="Food">
            <h1>{foodList[name].name}</h1>
            <p>{foodList[name].message}</p>
        </div>
    );
}

export default Food;
