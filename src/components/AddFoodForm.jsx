import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from "react"

function AddFoodForm({addFood}){

    const [name, saveName] = useState("")
    const [image, saveimage] = useState("")
    const [calories, savecalories] = useState(0)
    const [servings, saveservings] = useState(1)



    function formInput(event){
        event.preventDefault()
        const foodTosave={
            name: name,
            calories: calories,
            image: image,
            servings: servings
        }

        addFood(foodTosave)
        saveName("")
        saveimage("")
        savecalories(0)
        saveservings(1)
    }


    const changeName = (e) => saveName(e.target.value)
    const changeimage = (e) => saveimage(e.target.value)
    const changecalories = (e) => savecalories(e.target.value)
    const changeservings = (e) => saveservings(e.target.value)

    return(
     <Col>
     <Card>
        <form onSubmit={formInput}>
        <Input name="name" type="text" onChange={changeName} value={name} />
        <Input name="img" type="text" onChange={changeimage} value={image} />
        <Input name="calor" type="text" onChange={changecalories} value={calories}/>
        <Input name="servings" type="text" onChange={changeservings} value={servings} />
        <button type="submit">Submit</button>
        </form>
        
        
        </Card>
        </Col>


    )
}

export default AddFoodForm