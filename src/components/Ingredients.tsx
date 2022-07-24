import styles from "../styles/Ingredients.module.css";
import AddIcon from "../assets/AddIcon.svg";
import RemoveIcon from "../assets/RemoveIcon.svg";
import RemoveDisabledIcon from "../assets/RemoveDisabledIcon.svg";
import { useState } from "react";

interface IngredientsProps {
  tittle: string;
  price: string;
}

export function Ingredients({ tittle, price }: IngredientsProps) {
  const [quantity, setQuantity] = useState(0);

  function handleAdd() {
    setQuantity(quantity + 1);
  }

  function handleRemove() {
    setQuantity(quantity - 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.properties}>
        <p>{tittle}</p>
        <span>+R${price}</span>
      </div>
      <div className={styles.quantities}>
        <button onClick={handleRemove} disabled={quantity == 0}>
          {quantity > 0 ? (
            <img src={RemoveIcon} alt="Remove Item" />
          ) : (
            <img src={RemoveDisabledIcon} alt="Remove Item" />
          )}
        </button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>
          <img src={AddIcon} alt="Add Item" />
        </button>
      </div>
    </div>
  );
}
