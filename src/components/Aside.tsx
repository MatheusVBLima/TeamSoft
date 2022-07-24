import styles from "../styles/Aside.module.css";
import { Ingredients } from "./Ingredients";
import AddIcon from "../assets/AddIcon.svg";
import RemoveIcon from "../assets/RemoveIcon.svg";
import RemoveDisabledIcon from "../assets/RemoveDisabledIcon.svg";
import { useState } from "react";
import { Popover } from "./Popover";

export function Aside() {
  const [quantity, setQuantity] = useState(0);
  const [showPopover, setShowPopover] = useState(false);
  const screenWidth = window.innerWidth;

  function handleAdd() {
    setQuantity(quantity + 1);
  }

  function handleRemove() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddItens() {
    setShowPopover(true);
  }
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
          {screenWidth > 768 ? (
            <>
              <div className={styles.footerText}>
                <p>Precisa de Talher?</p>
              </div>
              <div className={styles.buttons}>
                <div className={styles.changeQuantity}>
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
                <div className={styles.addCartButton}>
                  <button onClick={handleAddItens}>Adicionar</button>
                  {showPopover && <Popover />}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.footerText}>
                <p>Precisa de Talher?</p>
              </div>
              <div className={styles.form}>
                <form>
                  <div className={styles.formSim}>
                    <input type="radio" id="sim" name="talher" />
                    <label htmlFor="sim">Sim</label>
                  </div>
                  <div className={styles.formNao}>
                    <input type="radio" id="nao" name="talher" />
                    <label htmlFor="nao">Não</label>
                  </div>
                </form>
              </div>
              <div className={styles.buttons}>
                <div className={styles.changeQuantity}>
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
                <div className={styles.addCartButton}>
                  <button onClick={handleAddItens}>Adicionar</button>
                  {showPopover && <Popover />}
                </div>
              </div>
            </>
          )}
        </footer>
      </div>
    </>
  );
}
