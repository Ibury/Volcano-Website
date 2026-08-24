import { useState } from "react";

export default function Disclaimer() {

  const [accepted, setAccepted] =
    useState(false);

  if (accepted) {
    return null;
  }

  return (

    <div
      style={{
        position: "absolute",

        left: 0,
        right: 0,
        bottom: "40px",

        background:
          "rgba(0,0,0,0.72)",

        color: "white",

        padding: "20px 40px",
        textAlign: "center",

        zIndex: 2000
      }}
    >

    <h2
      style={{
        margin: "0 0 10px 0",
        textAlign: "center",
        color: "white",
        fontSize: "42px",
        fontWeight: 300
      }}
    >
      Disclaimer
    </h2>

      <p>

        The content of this website reflects only
        the author's view. The Commission is not
        responsible for any use that may be made
        of the information it contains.

      </p>

      <p>

        By using Volcano Hazards Map, you accept the EPOS
        Terms and Conditions.

      </p>
      <p>
        Geo-INQUIRE is funded by the European Commission under project number 101058518 within the HORIZON-INFRA-2021-SERV-01 call.

        {" "}

        <a
          href="https://www.geo-inquire.eu/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#7db8ff"
          }}
        >
          Click for more info
        </a>

      </p>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center"
        }}
      >

      <button
        onClick={() => setAccepted(true)}
        style={{
          marginTop: "15px",
          padding: "8px 18px",
          background: "#efefef",
          border: "1px solid #999",
          cursor: "pointer",
          borderRadius: "2px",
          fontSize: "13px"
        }}
      >
        I Agree
      </button>

      </div>

    </div>

  );

}