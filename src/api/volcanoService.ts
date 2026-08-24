import api from "./api";
import type { Volcano } from "../types/Volcano";

export async function getVolcanoes(): Promise<Volcano[]> {

  const response = await api.post(
    "/geo3bcn/volcano-summary"
  );

  return response.data;

}
