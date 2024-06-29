import { createContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {

    const [count, setCount] = useState(1);
    const [discount, setDiscount] = useState(0);
    const [name, setName] = useState('Banana');
    const [price, setPrice] = useState(2.99);
    const context = {
        count: count,
        discount: discount,
        name: name,
        price: price,
        setCount: setCount,
        setDiscount: setDiscount,
        setName: setName,
        setPrice: setPrice
    }

    return (
        <ProductContext.Provider value={context}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext;