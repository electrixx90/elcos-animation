import SinotticoCEMAnomaly from "./partials/variants/cem_139/SinotticoCEMAnomaly";
import SinotticoCEMClutch from "./partials/variants/cem_139/SinotticoCEMClutch";
import SinotticoCEMEngine from "./partials/variants/cem_139/SinotticoCEMEngine";
import SinotticoCEMEngineProt from "./partials/variants/cem_139/SinotticoCEMEngineProt";
import SinotticoCEMGenerator from "./partials/variants/cem_139/SinotticoCEMGenerator";
import SinotticoCEMMode from "./partials/variants/cem_139/SinotticoCEMMode";
import SinotticoCEMPowerOut from "./partials/variants/cem_139/SinotticoCEMPowerOut";
import SinotticoCEMPump from "./partials/variants/cem_139/SinotticoCEMPump";
import SinotticoCEMPumpProt from "./partials/variants/cem_139/SinotticoCEMPumpProt";
import SinotticoCEMReq from "./partials/variants/cem_139/SinotticoCEMReq";
import SinotticoCEMReqT from "./partials/variants/cem_139/SinotticoCEMReqT";
import SinotticoCEMEcu from "./partials/variants/cem_139/SinotticoCEMEcu";

export default function Cem139({sinotticoName}) {
  return (
    <>
      <div className="animation-container">
        <SinotticoCEMAnomaly />
        <SinotticoCEMClutch />
        <SinotticoCEMEcu />
        <SinotticoCEMEngine />
        <SinotticoCEMEngineProt />
        <SinotticoCEMGenerator />
        <SinotticoCEMMode />
        <SinotticoCEMPowerOut />
        <SinotticoCEMPump />
        <SinotticoCEMPumpProt />
        <SinotticoCEMReq />
        <SinotticoCEMReqT />
      </div>
    </>
  )
}
