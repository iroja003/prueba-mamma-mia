import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Pizzas() {

  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async() => {
      const res  = await fetch("pizzas.json");
      const data = await res.json();
      console.log(data);
      setPizzas(data);
  };

  // Carga Inicial
  
  useEffect (() => {
     getPizzas();
  }, []);
    
  return (
    <div>
      <h1>Pizzas</h1>
      <div className="row">
        {
          pizzas.map((item) => 
            <Card key={item.id} info={item} /> )
        }
      </div>
    </div>
  );
}
