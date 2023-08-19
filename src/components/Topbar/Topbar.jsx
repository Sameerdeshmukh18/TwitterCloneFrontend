import React from "react";
import "./Topbar.css";
import { Link,useLocation} from "react-router-dom";

function Topbar() {
  return (
    <nav
      className="navbar bg-dark border-bottom border-bottom-dark"
      data-bs-theme="dark"
    >

      <div className="container-fluid d-flex justify-content-center">
        <a className="navbar-brand">CricTwitter</a>
        <form className="d-flex" role="search" style={{ width: "300px" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
        {!localStorage.getItem('token')?
      <form className="d-flex" role="search">
      <Link className="l btn btn-dark mx-1" to="/login" role="button">Login</Link>
      <Link className="l btn btn-dark mx-1" to="/signup" role="button">Signup</Link>
      </form>:
      <button className="btn btn-dark">Logout</button>

      }

      </div>


    </nav>
  );
}

export default Topbar;
