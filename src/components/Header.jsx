import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container nav-container">
        {/* LOGO */}
        <div className="logo">
          <img src="https://app.mamu.sch.id/image/mamu.png" alt="logo" />
          <div className="logo-text">
            <strong>WEBSITE RESMI</strong>
            <br />
            MADRASAH ALIYAH SWASTA
            <br />
            MAMBA'UL ULUM MARGOYOSO
          </div>
        </div>

        {/* NAVBAR */}
        <nav className={open ? "show" : ""}>
          <ul className="nav-links">
            <li>
              <a className="active" href="#">
                Beranda
              </a>
            </li>
            <li>
              <a href="https://masmambaululummargoyoso.literasi-digital7.id/">
                Literasi MAMU
              </a>
            </li>
            <li>
              <a href="https://masmambaululummargoyoso.literasi-digital7.id/tetaplah-menuntut-ilmu-hingga-akhir-hayat/">
                Karya Guru
              </a>
            </li>
            <li>
              <a href="https://apps.mamu.sch.id/">Recent App</a>
            </li>
            <li>
              <a href="https://emyumart.my.id/">EMYU Mart</a>
            </li>
            {/* DROPDOWN */}
          </ul>
        </nav>
        <div>
          <a className="login-btn" href="https://app.mamu.sch.id">
            Aplikasi Madrasah
          </a>
          <a
            className="login-btn"
            style={{ marginLeft: "5px" }}
            href="https://apps.mamu.sch.id"
          >
            Login
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </header>
  );
}

export default Header;
