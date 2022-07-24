import styles from "../styles/Popover.module.css";
import Polygon from "../assets/Polygon.svg";
import CloseButton from "../assets/close.svg";

interface PopoverProps {
  showPopover: boolean;
  setShowPopover: (showPopover: boolean) => void;
}

export function Popover({ setShowPopover }: PopoverProps) {
  function handleClosePopover() {
    setShowPopover(false);
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div>
          <img src={Polygon} alt="" />
        </div>
        <div className={styles.title}>
          <p>Adicionado com Sucesso</p>
        </div>
        <div className={styles.main}>
          <div className={styles.subtitle}>
            <p>Oferta Cheddar Bacon</p>
          </div>
          <div className={styles.list}>
            <p>Ingredientes:</p>
            <ul>
              <li>1 Carne 250g</li>
              <li>2 Queijo Cheddar</li>
              <li>1 Bacon</li>
              <li>Molho Especial</li>
            </ul>
          </div>
        </div>
        <button onClick={handleClosePopover}>
          <img src={CloseButton} alt="Close Popover" />
        </button>
      </div>
    </div>
  );
}
