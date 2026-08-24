import VolcanoList
from "./VolcanoList";

import HazardMapList
from "./HazardMapList";

export default function Sidebar(){

  return(

    <aside
      style={{
        width: "320px",
        padding: "20px",
        background: "#f8fafc",
        borderRight: "1px solid #e2e8f0",
        overflowY: "auto"
      }}
    >

      <VolcanoList/>

      <hr/>

      <HazardMapList/>

    </aside>

  );

}
