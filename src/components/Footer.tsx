export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,

        width: "100%",
        height: "50px",

        background: "white",

        color: "white",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: "0 20px",

        overflow: "hidden",
        zIndex: 1500
      }}
    >
      <img
        src="/images/footer-shape.png"
        alt=""
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%"
        }}
      />

      <div style={{ zIndex: 2 }}>
        <a href="https://www.geo3bcn.csic.es/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Geo3BCN Website
        </a>
      </div>

      <div
        style={{
          paddingRight: "20px",
          zIndex: 2
        }}
      >
        <img
          src= "images/csic-logo.png"
          alt="CSIC"
          style={{
            width: "100px",
            height:"auto",
            top: 0
          }}
        />
      </div>
      
    </footer>
  );
}