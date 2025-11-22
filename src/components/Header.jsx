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
              <a href="#">Statistik</a>
            </li>
            <li>
              <a href="#">Mutasi Guru</a>
            </li>
            <li>
              <a href="#">Kode Mapel</a>
            </li>
            <li>
              <a href="#">BI</a>
            </li>

            {/* DROPDOWN */}
            <li className="dropdown">
              <a href="#" className="dropbtn">
                Informasi ▾
              </a>
              <ul className="dropdown-content">
                <li>
                  <a href="#">Berita</a>
                </li>
                <li>
                  <a href="#">Pengumuman</a>
                </li>
                <li>
                  <a href="#">Agenda</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div>
          <a className="login-btn" href="#">
            Semua Aplikasi
          </a>
          <a className="login-btn" style={{ marginLeft: "5px" }} href="#">
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
