import {
  useContext
} from "react";

import {VolcanoContext} from "../context/VolcanoContext";
import MetadataPanel from "./MetadataPanel";

export default function VolcanoInfo(){

  const {
    selectedVolcano
  } = useContext(
    VolcanoContext
  );

  return(

    <aside
      style={{
        width:"320px",
        padding:"20px",
        background:"#FFFFFF",
        borderLeft:"1px solid #e5e7eb",
        overflowY: "auto"
      }}
    >

      {!selectedVolcano && (
        <p>
          Select a volcano
        </p>
      )}

      {selectedVolcano && (

        <>

          <h2 style={{
            marginTop: 0,
            color: "#0b1f3a"
          }}>
            {selectedVolcano.name}
          </h2>

          <p>
            {selectedVolcano.desc}
          </p>

          <p>
            Latitude:
            {" "}
            {selectedVolcano.lat}
          </p>

          <p>
            Longitude:
            {" "}
            {selectedVolcano.lng}
          </p>

          <MetadataPanel />
          <PreviewPanel />
          <EventTreePanel />

        </>

      )}

    </aside>

  );

}
