import { useContext } from "react";
import { VolcanoContext } from "../context/VolcanoContext";
import { getPreviewUrl } from "../api/previewService";
import  EventTreePanel  from "./EventTreePanel";
import { getDownloadUrl } from "../api/downloadService";


export default function VolcanoCard() {

  const { 
    selectedVolcano,
    showVolcanoCard,
    setShowVolcanoCard 
  } = useContext(VolcanoContext);


  if (
    !selectedVolcano ||
    !showVolcanoCard
  ) return null;

  return (

    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "280px",
        background: "#f7f4ef",
        padding: "20px",
        boxShadow:
          "0 8px 30px rgba(0,0,0,.12)",
        zIndex: 1000,
        borderRadius: "6px"
      }}
    >
      <button
        onClick={() =>
          setShowVolcanoCard(false)
        }
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold"
        }}
      >
        ×
      </button>
      <h2
        style={{
          margin: 0,
          fontSize: "23px",
          background: "#d3b08a",
          textDecoration: "none",
          borderRadius: "6px",
          textAlign: "center",
          padding: "2px"
        }}
      >
        🌋 {selectedVolcano.name}
      </h2>

      <p>
        📍 Latitude: {selectedVolcano.lat}
      </p>

      <p>
        📍 Longitude: {selectedVolcano.lng}
      </p>

      <h3>
        Preview
      </h3>
      <img
        src={getPreviewUrl(selectedVolcano.nwsname)}
        alt={selectedVolcano.name}
        style={{
          width: "100%",
          borderRadius: "6px"
        }}
      />

      <hr />

      <h3>
        Downloads
      </h3>

      <a
        href={getDownloadUrl(
          selectedVolcano.nwsname,
          "all"
        )}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          padding: "8px 12px",
          background: "#d3b08a",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px"
        }}
      >
        📦 Download All Maps
      </a>
      

      <EventTreePanel />

      

    </div>

  );

}