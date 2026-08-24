import {
  useContext,
  useState,
  useEffect
} from "react";

import {
  VolcanoContext
} from "../context/VolcanoContext";

export default function EventTreePanel() {

  const { selectedVolcano } =
    useContext(VolcanoContext);

  const [expanded, setExpanded] =
    useState(false);

  const [hasImage, setHasImage] =
    useState(true);

  useEffect(() => {
    setHasImage(true);
  }, [selectedVolcano]);

  if (
    !selectedVolcano ||
    !hasImage
  ) {
    return null;
  }

  return (
    <>
      <h3>
        🌳 Event Tree
      </h3>

      <img
        src={`/api/geo3bcn/event-tree-img/${selectedVolcano.nwsname}`}
        alt="Event Tree"
        onError={() => setHasImage(false)}
        onClick={() => setExpanded(true)}
        style={{
          width: "100%",
          borderRadius: "6px",
          cursor: "zoom-in"
        }}
      />

    {expanded && (
      <>
        <div
          onClick={() => setExpanded(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999
          }}
        >
          <img
            src={`/api/geo3bcn/event-tree-img/${selectedVolcano.nwsname}`}
            alt="Event Tree"
            style={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
              background: "white",
              padding: "10px",
              borderRadius: "8px"
            }}
          />
        </div>

        <button
          onClick={() => setExpanded(false)}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            background: "white",
            cursor: "pointer",
            fontSize: "20px",
            fontWeight: "bold",
            zIndex: 100000
          }}
        >
          ×
        </button>
      </>
    )}

    </>
  );

}