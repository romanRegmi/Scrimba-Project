import React from "react";
import Card from "./components/Cards";
import Header from "./components/Header";

import data from "./data";



export default function App(){  
    const card = data.map(item => {
        return (
            <Card 
                {...item}
            
            
            />
        )
    })
    return (
        <div>
            <Header />
            {card}
        </div>
    )
    
    
}
