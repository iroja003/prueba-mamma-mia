import { createContext, useContext, useState } from "react";

export const PizzasContext = createContext();

export default function PizzasProvider({children}){
    const [pizzas, setPizzas] = useState([]);

    const addPizzas = (info) => {
        setPizzas([...pizzas, info])
    };
     
    const delPizzas = (id) =>{
        setPizzas(pizzas.filter((p) => p.id != id));
    };
   
    return (
        <PizzasContext.Provider value={{pizzas, addPizzas, delPizzas}}>
            {children}
        </PizzasContext.Provider>
    )
};

export const usePizzasContext = () => useContext(PizzasContext);

