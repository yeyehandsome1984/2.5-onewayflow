import styles from "./Card.module.css";
import Button from "./Button";
import Input from "./Input";

import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

function Card({
  handlerMinus,
  handlerPlus,
  handlerChangeName,
  handlerChangePrice,
  handlerAddProduct
}) {
  const ctx = useContext(ProductContext);

  return (
    <div className={styles.container}>
      <div className={styles.name}>{ctx.name}</div>
      <div className={styles.counter}>
        <Button label="➖" onClick={handlerMinus} />
        <span className={styles.count}>{ctx.count}</span>
        <Button label="➕" onClick={handlerPlus} />
      </div>
      <div className={styles.price}>{`$ ${ctx.price}`} each</div>
      <div className={styles.discount}>{`Discount: ${ctx.discount}%`}</div>
      <div className={styles.form}>
        <Input value={ctx.name} label="Product Name" onChange={handlerChangeName} />
        <Input value={ctx.price} label="Price" onChange={handlerChangePrice} />
      </div>
      <Button label="Add Product" onClick={handlerAddProduct} />
    </div>
  );
}
export default Card;