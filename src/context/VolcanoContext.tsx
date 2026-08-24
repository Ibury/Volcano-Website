import {
  createContext,
  useState
} from "react";

import type { Volcano } from "../types/Volcano";
import type { HazardMap } from "../types/HazardMap";

interface VolcanoContextType {
  selectedVolcano: Volcano | null;
  setSelectedVolcano: (
    volcano: Volcano | null
  ) => void;

  maps: HazardMap[];
  setMaps: (
    maps: HazardMap[]
  ) => void;

  selectedMap: string | null;

  setSelectedMap: (
    map: string | null
  ) => void;

  overlay: any;

  setOverlay: (
    overlay: any
  ) => void;

  showVolcanoCard: boolean;

  setShowVolcanoCard: (
    show: boolean
  ) => void;

  showMetadata: boolean;

  setShowMetadata: (
    show: boolean
  ) => void;
}

export const VolcanoContext =
createContext<VolcanoContextType>({
  selectedVolcano: null,
  setSelectedVolcano: () => {},
  maps: [],
  setMaps: () => {},
  selectedMap: null,
  setSelectedMap: () => {},
  showVolcanoCard: true,
  setShowVolcanoCard: () => {},
  showMetadata: true,
  setShowMetadata: () => {},
  overlay: null,
  setOverlay: () => {}
});

export function VolcanoProvider({
  children
}:{
  children: React.ReactNode
}) {

  const [
    selectedVolcano,
    setSelectedVolcano
  ] = useState<Volcano | null>(
    null
  );

  const [maps,setMaps] = useState<HazardMap[]>([]);

  const [
    selectedMap,
    setSelectedMap  
  ] = useState<string | null>(null);

  const [
    showVolcanoCard,
    setShowVolcanoCard
  ] = useState(true);

  const [
    showMetadata,
    setShowMetadata
  ] = useState(true);

  const [
    overlay,
    setOverlay
  ] = useState<any>(null);


  return (

    <VolcanoContext.Provider
      value={{
        selectedVolcano,
        setSelectedVolcano,
        maps,
        setMaps,
        selectedMap,
        setSelectedMap,
        showVolcanoCard,
        setShowVolcanoCard,
        showMetadata,
        setShowMetadata,
        overlay,
        setOverlay
      }}
    >

      {children}

    </VolcanoContext.Provider>

  );

}
