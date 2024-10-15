import styles from "./TabButton.module.css";
const TabButton = ({ children, onSelect, isSeleted }) => {
  return (
    <li className={styles.btns}>
      <button className={isSeleted? 'active':undefined}  onClick={onSelect}>{children}</button>
    </li>
  );
};
export default TabButton;
