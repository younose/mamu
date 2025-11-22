import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text fade-in">
          <div className="tag">MADRASAH ALIYAH MAMBA'UL ULUM MARGOYOSO</div>
          <h1>
            Mengabdi dengan Ilmu,
            <br />
            Mendidik dengan Hati
          </h1>
        </div>

        <div className="hero-image slide-in">
          <img
            src="https://cdn.siap.id/s3/simpatika/asset%20img/portal/slide-2.jpg"
            alt="Hero"
          />
        </div>
      </div>

      {/* SEARCH BOX */}
      <div className="search-box container fade-in">
        <input type="text" placeholder="Nama / NUPTK / PegID" />
        <input type="text" placeholder="Kota Lokasi Madrasah Induk" />
        <button>Cari</button>
      </div>
    </section>
  );
}

export default Hero;
