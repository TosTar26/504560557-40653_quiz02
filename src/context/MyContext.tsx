import React from "react";

type Product = {
    id: number;
    name: string;
    step: number;
    price: number;
}

type MyContextData = {
   product: [];
   setproduct: (num : number) => void 
}

const MyContext = React.createContext<MyContextData>({
    product: [],
    setproduct: () => {},
});

export default MyContext;