import React from 'react';
import SinotticoBattA from "./partials/SinotticoBattA";
import SinotticoBattB from "./partials/SinotticoBattB";
import SinotticoCBA from "./partials/SinotticoCBA";
import SinotticoCBB from "./partials/SinotticoCBB";
import SinotticoEngine from "./partials/SinotticoEngine";
import SinotticoEngineProt from "./partials/SinotticoEngineProt";
import SinotticoReteA from "./partials/SinotticoReteA";
import SinotticoReteB from "./partials/SinotticoReteB";
import SinotticoTraliccio from "./partials/SinotticoTraliccio";
import SinotticoPress from "./partials/SinotticoPress";
import SinotticoReqT from "./partials/SinotticoReqT";
import SinotticoReq from "./partials/SinotticoReq";
import SinotticoAlarm from "./partials/SinotticoAlarm";
import SinotticoMode from "./partials/SinotticoMode";
import SinotticoStatus from "./partials/SinotticoStatus";

export default function CSmart({sinotticoName}) {
  return (
    <>
      <div className="animation-container">
        <SinotticoBattA/>
        <SinotticoBattB/>
        <SinotticoCBA/>
        <SinotticoCBB/>
        <SinotticoEngine/>
        <SinotticoEngineProt/>
        <SinotticoReteA/>
        <SinotticoReteB/>
        <SinotticoTraliccio/>
        <SinotticoPress sinotticoName={sinotticoName} />
        <SinotticoReqT sinotticoName={sinotticoName} />
        <SinotticoReq sinotticoName={sinotticoName} />
        <SinotticoAlarm sinotticoName={sinotticoName} />
        <SinotticoMode sinotticoName={sinotticoName} />
        <SinotticoStatus sinotticoName={sinotticoName} />
      </div>
    </>
  )
}
