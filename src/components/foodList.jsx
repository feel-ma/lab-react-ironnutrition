import { Card, Row, Col, Divider, Input, Button } from "antd";


function FoodList({food}){
    return(
        
        <div>
        <p> {food.name} </p>
        <img src={food.image} width={100} />
      </div>
    )
}

export default FoodList