export default function Header() {
  return (
    <header
      style={{
        height: "55px",
        background: "linear-gradient(90deg,#b57d44 0%, #c99252 60%, #e2a868 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,.15)"
      }}
    >

      {/* parte izquierda */}
      <div
        style={{
          display: "flex",
          height: "38px",
          width: "auto"
        }}
      >
        <img
          src= "images/geo3bcn.png"
          alt="GEO3BCN"
          style={{
            height: "50px",
            paddingLeft: "10px",
            paddingBottom: "5px"
          }}
        />
        <span
          style={{
            fontSize: "18px",
            fontWeight: 500,
            paddingLeft: "50px",
            paddingTop: "5px"
          }}
        >
          🌋 Volcano Hazard Maps
        </span>
      </div>

      {/* parte derecha */}
      <div
        style={{
          paddingRight: "20px",
          zIndex: 2
        }}
      >
        <img
          src= "images/geoinquire.png"
          alt="CSIC"
          style={{
            height: "50px"
          }}
        />
      </div>
    </header>
  );
}


