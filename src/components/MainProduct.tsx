import styles from "../styles/MainProduct.module.css";
import MainImage from "../assets/foto.svg";
import MainImageMobile from "../assets/mobileFoto.svg";

export function MainProduct() {
  const windowSize = window.screen.width;

  var screamWidth = document.documentElement.clientWidth;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.mainImage}>
          {screamWidth > 768 ? (
            <img src={MainImage} alt="" />
          ) : (
            <img src={MainImageMobile} alt="" />
          )}
        </div>
        <div className={styles.text}>
          <h1>Oferta Picanha Cheddar Bacon</h1>
          <p>
            Hambúrguer de picanha, molho de picanha, cebola crispy, bacon,
            queijo cheddar, molho cheddar e pão mix de gergelim
          </p>
          <div className={styles.prices}>
            <span className={styles.newPrice}>R$31,99</span>
            <span className={styles.oldPrice}>R$34,95</span>
          </div>
        </div>
      </div>
    </div>
  );
}
