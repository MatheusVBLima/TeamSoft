import styles from "../styles/Header.module.css";
import Icon from "../assets/DeliverizeIco.svg";
import Logo from "../assets/DeliverizeLogo.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import Search from "../assets/search_24px.svg";
import UserButton from "../assets/account_circle_24px.svg";
import CartButton from "../assets/shopping_cart_24px.svg";

export function Header() {
  return (
    <nav>
      <div className={styles.header}>
        <div className={styles.logos}>
          <img src={Icon} alt="icon" />
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.menu}>
          <div className={styles.address}>
            <div>
              <span>Entrega:</span>
              <p>R. Antonio Braune, 222</p>
            </div>
            <div>
              <button>
                <img src={ArrowDown} />
              </button>
            </div>
          </div>
          <div className={styles.textArea}>
            <input
              type="text"
              placeholder="Busque por estabelecimentos ou produtos"
            />
            {/*  <button>
              <img src={Search} alt="" />
            </button> */}
          </div>
          <div className={styles.buttons}>
            <div className={styles.userContainer}>
              <img src={UserButton} alt="" />
              <button>Entrar</button>
            </div>

            <div className={styles.cartContainer}>
              <img src={CartButton} alt="" />
              <button>Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
