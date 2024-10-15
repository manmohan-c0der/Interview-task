import styles from './Header.module.css';
function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  let description = reactDescriptions[genRandomInt(2)];
  return (
    <header className={styles.HeaderContainer}>
      <img className={styles.Reactimg} src="src\assets\react.svg" alt="react Image" / >
      <h1 className={styles.heading}>React Essentials</h1>
      <p className={styles.paragraph}>
        {description} React Concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
export default Header;
