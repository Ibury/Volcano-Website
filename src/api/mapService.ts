import api from "./api";
import type { HazardMap } from "../types/HazardMap";

interface MapSummaryResponse {
  volcano_target: string;
  data: HazardMap[];
}

export async function getMaps(
  volcanoName: string
): Promise<HazardMap[]> {

  const response =
    await api.post<MapSummaryResponse>(
      "/geo3bcn/map-summary",
      {
        file_name: volcanoName
      }
    );

  return response.data.data;
}