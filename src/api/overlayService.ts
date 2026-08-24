import api from "./api";

export async function getOverlay(
  volcano: string,
  hazard: string
) {

  const response =
    await api.get(
      `/geo3bcn/overlay/${volcano}/${hazard}`
    );

  return response.data;
}