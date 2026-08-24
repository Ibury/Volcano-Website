import {
  useContext,
  useState,
  useEffect
} from "react";

import {
  VolcanoContext
} from "../context/VolcanoContext";

export default function LegendPanel() {

  const {
    selectedVolcano,
    selectedMap
  } = useContext(
    VolcanoContext
  );

  const [
    hasLegend,
    setHasLegend
  ] = useState(true);

  useEffect(() => {

    setHasLegend(true);

  }, [
    selectedVolcano,
    selectedMap
  ]);

  if (
    !selectedVolcano ||
    !selectedMap ||
    !hasLegend
  ) {
    return null;
  }

  return (

    <div
      style={{
        position: "absolute",
        bottom: "50px",
        left: "20px",
        background: "white",
        padding: "10px",
        borderRadius: "6px",
        boxShadow:
          "0 4px 10px rgba(0,0,0,.2)",
        zIndex: 1000
      }}
    >

    
    <img
        src={`/api/geo3bcn/legend/${selectedVolcano.nwsname}/${selectedMap}`}
        alt="Legend"
        style={{
            maxWidth: "420px",
            maxHeight: "none",
            width: "auto",
            height: "auto",
            display: "block"
        }}
    />
</div>
  );

}