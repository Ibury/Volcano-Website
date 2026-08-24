import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VolcanoMap from "../components/VolcanoMap";
import VolcanoInfo from "../components/VolcanoInfo";
import Disclaimer from "../components/Disclaimer";
import Footer from "../components/Footer";
import VolcanoCard from "../components/VolcanoCard";
import MetadataPanel from "../components/MetadataPanel"

export default function MainLayout(){

  return(

    <div
      style={{
        height:"100vh",
        width: "100vw",
        display:"flex",
        flexDirection:"column"
      }}
    >

      <Header/>

      <div
        style={{
          flex:1,
          display:"flex"
        }}
      >

        <Sidebar/>

        <div
          style={{
            flex:1,
            position: "relative"
          }}
        >
          <VolcanoMap/>
          <VolcanoCard/>
          <MetadataPanel />
          
        </div>

      </div>
      
      <Disclaimer />
      <Footer />
    </div>

  );

}
