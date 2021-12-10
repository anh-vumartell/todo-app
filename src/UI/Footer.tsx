import "../styles/components/_footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <p>Minimal Todo App © 2021</p>
        <p>
          Designed & coded by{" "}
          <a href="https://github.com/anh-vumartell/todo-app">Anh Vu-Martell</a>
        </p>
        <p>
          Image credit to contributor from{" "}
          <a href="https://unsplash.com/photos/0jIovxJj7pY">Unplash</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
