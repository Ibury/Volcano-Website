import {
  useEffect,
  useState,
  useContext
} from "react";

import {
  VolcanoContext
} from "../context/VolcanoContext";

import {
  getVolcanoes
} from "../api/volcanoService";

import type {
  Volcano
} from "../types/Volcano";

import { getMaps }
from "../api/mapService";

export default function VolcanoList() {

  const [volcanoes, setVolcanoes] =
    useState<Volcano[]>([]);

  const [search, setSearch] =
    useState("");

  const {
    selectedVolcano,
    setSelectedVolcano,
    setMaps,
    setShowVolcanoCard,
    setOverlay,
    setSelectedMap
  } = useContext(VolcanoContext);

  useEffect(() => {

    getVolcanoes()
      .then(setVolcanoes);

  }, []);

  return (

    <div>

      <h2>
        Volcano List
      </h2>

      <input
        type="text"
        placeholder="🔍 Search volcano..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #CBD5E1",
          boxSizing: "border-box"
        }}
      />

      {
        volcanoes
          .filter(volcano =>
            volcano.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
          )
          .map(volcano => (

            <div
              key={volcano.nwsname}
              onClick={async () => {
                setSelectedVolcano(volcano);
                setShowVolcanoCard(true);
                setOverlay(null);
                setSelectedMap(null);
                const maps =
                  await getMaps(
                    volcano.nwsname
                  );
                setMaps(maps);
              }}
              
              style={{
                padding: "10px 8px",
                borderBottom: "1px solid #d9d9d9",

                background:
                  selectedVolcano?.nwsname === volcano.nwsname
                  ? "#d3b08a"
                  : "transparent",

                color:
                  selectedVolcano?.nwsname === volcano.nwsname
                  ? "blue"
                  : "#333",


                cursor: "pointer",
                transition: "all 0.2s ease",
                fontSize: "16px"
              }}
            >
              {volcano.name}
            </div>

          ))
      }

    </div>

  );

}
