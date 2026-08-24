import { useContext } from "react";
import { getOverlay } from "../api/overlayService";
import { VolcanoContext } from "../context/VolcanoContext";

export default function HazardMapList() {

  const {
    maps,
    selectedVolcano,
    selectedMap,
    setSelectedMap,
    setShowMetadata,
    setOverlay
  } = useContext(VolcanoContext);

  if (!selectedVolcano) {
    return (
      <div
        style={{
          marginTop: "20px",
          color: "#777"
        }}
      >
        Select a volcano to see available maps.
      </div>
    );
  }

  return (

    <div>

      <h3>
        Available Maps
      </h3>

      {maps.map(map => (

        <div
          key={map.map}
          onClick={async () => {
            setSelectedMap(
              map.map
            );
            setShowMetadata(true);
            if (selectedVolcano) {
              const overlay =
                await getOverlay(
                  selectedVolcano.nwsname,
                  map.map
                );
              setOverlay(
                overlay
              );
            }
          }}
          style={{
            padding: "8px",
            borderBottom: "1px solid #ddd",
            cursor: "pointer",
            background:
              selectedMap === map.map
                ? "#d3b08a"
                : "transparent",
            color:
              selectedMap === map.map
                ? "white"
                : "#333"
          }}
        >

          {map.map}

        </div>

      ))}

    </div>

  );

}