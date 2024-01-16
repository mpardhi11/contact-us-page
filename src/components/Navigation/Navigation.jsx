import style from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
      <div className="logo">
        <img src="/ms-icon-310x310.png" alt="Brand Logo" height="72px" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
