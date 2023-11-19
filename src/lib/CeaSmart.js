import React from "react";
import SinotticoAlarm from "./partials/SinotticoAlarm";
import SinotticoEP from "./partials/SinotticoEP";
import SinotticoMains from "./partials/SinotticoMains";
import SinotticoMode from "./partials/SinotticoMode";
import SinotticoMotor from "./partials/SinotticoMotor";
import SinotticoPress from "./partials/SinotticoPress";
import SinotticoReq from "./partials/SinotticoReq";
import SinotticoReqT from "./partials/SinotticoReqT";
import SinotticoStatus from "./partials/SinotticoStatus";

export default function CeaSmart({sinotticoName}) {
  return (
    <>
      <div className="animation-container">
        <SinotticoAlarm sinotticoName={sinotticoName} />
        <SinotticoEP />
        <SinotticoMains />
        <SinotticoMode sinotticoName={sinotticoName} />
        <SinotticoMotor />
        <SinotticoPress sinotticoName={sinotticoName} />
        <SinotticoReq sinotticoName={sinotticoName} />
        <SinotticoReqT sinotticoName={sinotticoName} />
        <SinotticoStatus sinotticoName={sinotticoName} />
      </div>
    </>
  )
}
