import react, {useState. useEffect} from "react";
import {useState} from"./Hooks/useEffect";
import shoppingList from"./Components/ShoppingList";
import newInput from"./Components/NewInput";
import items from "./Components/Item";
import './App.css';



export default function App() {
      const url = "https://fetch-me.vercel.app/api/shopping/items";
      const [items, setItems] = useState([]);
      const [shoppingList, setShoppingList]=useState([]);
      const [newInput,stNewInput]=useState([]);
      const [data]= useEffect(url);
}

