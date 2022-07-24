import styles from "../styles/Popover.module.css";

export function Popover() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Adicionado com sucesso</p>
      </div>
      <div className={styles.subtitle}>
        <p>Oferta Cheddar Bacon</p>
      </div>
      <div>
        <p>Ingredientes:</p>
        <ul>
          <li>Hambúrguer de picanha</li>
          <li>Molho de picanha</li>
          <li>Cebola crispy</li>
          <li>Bacon</li>
        </ul>
      </div>
    </div>
  );
}
