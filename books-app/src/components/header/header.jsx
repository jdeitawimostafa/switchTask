import "../header/header.css";
import logo from '../../assets/logo.jpg';

export default function Header() {
  return (
    <>
      <div className="div-header">
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/search">Search</a>
          <a href="">About us</a>
        </nav>
          {/* <img
            src={logo}
            className="logo"
            alt="logo"
            /> */}
        <h1>Welcome to book app </h1>
      </div>
    </>
  );
}
