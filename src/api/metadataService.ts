import api from "./api";

export async function getMetadata(
  volcano: string,
  map: string
) {

  const response =
    await api.post(
      "/geo3bcn/map-metadata",
      {
        volcan: volcano,
        map
      }
    );

  return response.data;
}