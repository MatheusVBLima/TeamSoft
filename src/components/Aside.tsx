import styles from "../styles/Aside.module.css";
import { Ingredients } from "./Ingredients";
import AddIcon from "../assets/AddIcon.svg";
import RemoveIcon from "../assets/RemoveIcon.svg";
import { useState } from "react";

export function Aside() {
  const [quantity, setQuantity] = useState(0);

  function handleAdd() {
    setQuantity(quantity + 1);
  }

  function handleRemove() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddItens() {}
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tittle}>
          <p>Adicionar Ingredientes</p>
          <span>Até 8 ingredientes</span>
        </div>
        <div className={styles.ingredients}>
          <Ingredients tittle="Queijo cheddar" price="4,99" />
          <Ingredients tittle="Cebola crispy" price="1,50" />
          <Ingredients tittle="Molho cheddar" price="3,50" />
          <Ingredients tittle="Molho de picanha" price="3,50" />
        </div>
        <footer>
          <div className={styles.footerText}>
            <p>Precisa de Talher?</p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.changeQuantity}>
              <button onClick={handleRemove}>
                <img src={RemoveIcon} alt="Add Item" />
              </button>
              <span>{quantity}</span>
              <button onClick={handleAdd}>
                <img src={AddIcon} alt="Remove Item" />
              </button>
            </div>
            <div className={styles.addCartButton}>
              <button onClick={handleAddItens}>Adicionar</button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
