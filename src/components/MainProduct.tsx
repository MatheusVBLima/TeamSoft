import styles from "../styles/MainProduct.module.css";
import MainImage from "../assets/hamburgerFoto.svg";
import MainImageMobile from "../assets/mobileFoto.svg";

export function MainProduct() {
  const screenWidth = window.innerWidth;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.mainImage}>
          <img src={MainImage} alt="" />
        </div>
        <div className={styles.text}>
          {screenWidth > 768 ? (
            <>
              <h1>Oferta Picanha Cheddar Bacon</h1>
              <p>
                Hambúrguer de picanha, molho de picanha, cebola crispy, bacon,
                queijo cheddar, molho cheddar e pão mix de gergelim
              </p>
            </>
          ) : (
            <>
              <h1>Oferta picanha cheddar bacon</h1>
              <p>
                Delicioso hambúrguer de picanha, molho de picanha, cebola
                crispy, bacon, queijo cheddar, molho cheddar e pão mix de
                gergelim, acompanhamento e bebida.
              </p>
            </>
          )}

          <div className={styles.prices}>
            <span className={styles.newPrice}>R$31,99</span>
            <span className={styles.oldPrice}>R$34,95</span>
          </div>
        </div>
      </div>
    </div>
  );
}
