import styles from "./CoreConcept.module.css";
const CoreConcept = ({ title, description, image }) => {
  return (
    <li className={styles.cardContainer}>
      <img className={styles.imgs} src={image} alt="" />
      <h3 className={styles.head}>{title}</h3>
      <p className={styles.para}>{description}</p>
    </li>
  );
};
export default CoreConcept;
