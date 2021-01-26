import { useState } from "react";

function NewPackage(props) {
    const [code, setCode] = useState('');
    const [quantity, setQuantity] = useState('');
    const [delivery_date, setDelivery_date] = useState('');
    const [statuss, setStatuss] = useState('');
	
    function onClick() {
        const newPackage ={
            code: code,
            quantity: quantity,
            delivery_date: delivery_date,
            statuss: statuss
        };

        const result = props.onAddPackage(newPackage);

        if(result) {
            setCode('');
            setQuantity('');
            setDelivery_date('');
            setStatuss('');
        }
        
    }

    return(
        <tr>
            <td><input classQuantity="form-control" quantity="code" value={code} onChange={(event) => setCode(event.target.value)}/></td>
            <td><input classQuantity="form-control" quantity="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)}/></td>
            <td><input classQuantity="form-control" quantity="delivery_date" value={delivery_date} onChange={(event) => setDelivery_date(event.target.value)}/></td>
            <td><input classQuantity="form-control" quantity="statuss" value={statuss} onChange={(event) => setStatuss(event.target.value)}/></td>
            <td><button classQuantity="btn btn-primary" onClick={onClick}>ADD PACKAGE</button></td>
        </tr>
    )
}

export default NewPackage;