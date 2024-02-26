import React, {useState} from 'react'
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';

const AddItem = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [cost, setCost] = useState("");

    const itemsCollectionRef = collection(db, "items");
    const navigate = useNavigate();

    const addItem = async () => {
        try{
            await addDoc(itemsCollectionRef, {
                name: name, 
                quantity: quantity, 
                cost: cost
            }).then(() => {
                navigate("/home");
                console.log('added item successfully!');
            }).catch((error) => {
                console.log(error);
            });
        }catch(error){
            console.log(error);
        }
        
        
    }
  return (
    <div>  
        <h1>Add Item</h1>
        <input type='text' placeholder='Item Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)}>     
        </input>

        <input type='number' placeholder='Cost (USD)' 
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}>
        </input>

        <input type='number' placeholder='Quantity' 
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}>
        </input>
        <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default AddItem