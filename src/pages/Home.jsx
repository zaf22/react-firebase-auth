import React, {useEffect, useState} from 'react'
import AuthDetails from '../components/auth/AuthDetails'
import { useNavigate } from 'react-router-dom';
import {db} from '../firebase';
import { getDocs, collection } from 'firebase/firestore';

const Home = () => {
  const navigate = useNavigate();
  const userAdd = () => {
        navigate("/addItem");
    }
  
  const [itemList, setItemList] = useState([]);

  const itemsCollectionRef = collection(db, "items");

  useEffect(() => {
    const getList = async () => {
      try{
        const data = await getDocs(itemsCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data()}));
        setItemList(filteredData);     
      }catch(error){
        console.log(error);
      }
    };

    getList();
  }, []);
    
  return (
    <div>Main Menu
        <AuthDetails></AuthDetails>
        <button onClick={userAdd}>Add Item</button>
        <div>
          {itemList.map((item) => (
            <div>
              <h2>{item.name}</h2>
              <p>Cost: {item.cost}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Home