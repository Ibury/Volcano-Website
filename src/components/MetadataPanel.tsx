import {
  useContext,
  useEffect,
  useState
} from "react";

import {
  VolcanoContext
} from "../context/VolcanoContext";

import {
  getMetadata
} from "../api/metadataService";

import {
  getDownloadUrl
} from "../api/downloadService";

export default function MetadataPanel() {

  const {
    selectedVolcano,
    selectedMap,
    setSelectedMap,
    showMetadata,
    setShowMetadata
  } = useContext(
    VolcanoContext
  );

  const [metadata, setMetadata] =
    useState<any>(null);

  const metadataContent =
    metadata?.map_metadata ||
    metadata?.event_tree_metadata;

  useEffect(() => {

    if (
      !selectedVolcano ||
      !selectedMap
    ) {
      return;
    }

    getMetadata(
      selectedVolcano.nwsname,
      selectedMap
    )
      .then((response) => {

        console.log(
          "METADATA",
          response
        );

        setMetadata(response);

      })
      .catch(console.error);

  }, [
    selectedVolcano,
    selectedMap
  ]);

  if (
    !selectedVolcano ||
    !selectedMap ||
    !metadataContent ||
    !showMetadata
  ) {
    return null;
  }


  if (!metadata || !showMetadata) {
    return null;
  }

  return (

    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "450px",
        background: "white",
        padding: "20px",
        boxShadow:
          "0 4px 20px rgba(0,0,0,.25)",
        zIndex: 1500,
        maxHeight: "80vh",
        overflowY: "auto",
        borderRadius: "6px"
      }}
    >
      <button
        onClick={() =>
          setShowMetadata(false)
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
          marginTop: 0,
          paddingRight: "25px",
          background: "#d3b08a",
          textDecoration: "none",
          borderRadius: "6px",
          padding: "2px 2px",
          textAlign: "center",
          fontSize: "23px"
          
        }}
      >
        {metadataContent.Name}
      </h2>

      <p>
        <strong style={{
          fontSize: "18px"
        }}>Category:</strong>{" "}
        {metadataContent.Category}
      </p>

      <p>
        <strong style={{
          fontSize: "18px"
        }}>Type:</strong>{" "}
        {metadataContent["Item type"]}
      </p>

      <p>
        <strong style={{
          fontSize: "18px"
        }}>Authors:</strong>{" "}
        {metadataContent.Authors}
      </p>

      <p>
        <strong style={{
          fontSize: "18px"
        }}>Hazard Type:</strong>{" "}
        {metadataContent["Hazard type"]}
      </p>

      <p>
        <strong style={{
          fontSize: "18px"
        }}>Volcano:</strong>{" "}
        {
          metadataContent[
            "Geographical location-Volcano name"
          ]
        }
      </p>

      <p>
        <strong style={{
          fontSize: "18px"
        }}>Country:</strong>{" "}
        {
          metadataContent[
            "Geographical location-Country"
          ]
        }
      </p>

      <hr />

      <h3>Description</h3>

      <p>
        {metadataContent.Functionality}
      </p>

      <hr />

      <h3>Downloads</h3>

      <p>
        <a
          href={getDownloadUrl(
            selectedVolcano.nwsname,
            selectedMap
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
          📦 Download Map
        </a>
      </p>

    </div>

  );

}