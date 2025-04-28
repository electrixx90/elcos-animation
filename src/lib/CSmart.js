import React, {useEffect, useState} from 'react';
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
import {getSinotticoPartialId, processPlayerEvent} from "./ElcosAnimation";
import {c_smart_eventList} from "./data/c_smart_eventList";

export default function CSmart({events, sinotticoName}) {
  const [alarmPlayer, setAlarmPlayer] = useState(null);
  const [modePlayer, setModePlayer] = useState(null);
  const [pressPlayer, setPressPlayer] = useState(null);
  const [reqPlayer, setReqPlayer] = useState(null);
  const [reqTPlayer, setReqTPlayer] = useState(null);
  const [statusPlayer, setStatusPlayer] = useState(null);
  const [traliccioPlayer, setTraliccioPlayer] = useState(null);
  const [reteAPlayer, setReteAPlayer] = useState(null);
  const [reteBPlayer, setReteBPlayer] = useState(null);
  const [cbaPlayer, setCbaPlayer] = useState(null);
  const [cbbPlayer, setCbbPlayer] = useState(null);
  const [battAPlayer, setBattAPlayer] = useState(null);
  const [battBPlayer, setBattBPlayer] = useState(null);
  const [enginePlayer, setEnginePlayer] = useState(null);
  const [engineProtPlayer, setEngineProtPlayer] = useState(null);

  const [intervals, setIntervals] = useState([]);

  useEffect(() => {
    const sAlarm = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoAlarm'));
    const sMode = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoMode'));
    const sPress = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoPress'));
    const sReq = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoReq'));
    const sReqT = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoReqT'));
    const sStatus = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoStatus'));

    const sTral = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoTraliccio'));
    const sReteA = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoReteA'));
    const sReteB = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoReteB'));
    const sCBA = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoCBA'));
    const sCBB = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoCBB'));
    const sBattA = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoBattA'));
    const sBattB = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoBattB'));
    const sEngine = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoEngine'));
    const sEngineProt = document.getElementById(getSinotticoPartialId(c_smart_eventList, 'SinotticoEngineProt'));

    if (sAlarm) {
      sAlarm.svgatorPlayer.stop();
      setAlarmPlayer(sAlarm.svgatorPlayer);
    } else {
      setAlarmPlayer(null);
    }

    if (sMode) {
      sMode.svgatorPlayer.stop();
      setModePlayer(sMode.svgatorPlayer);
    } else {
      setModePlayer(null);
    }

    if (sPress) {
      sPress.svgatorPlayer.stop();
      setPressPlayer(sPress.svgatorPlayer);
    } else {
      setPressPlayer(null);
    }

    if (sReq) {
      sReq.svgatorPlayer.stop();
      setReqPlayer(sReq.svgatorPlayer);
    } else {
      setReqPlayer(null);
    }

    if (sReqT) {
      sReqT.svgatorPlayer.stop();
      setReqTPlayer(sReqT.svgatorPlayer);
    } else {
      setReqTPlayer(null);
    }

    if (sStatus) {
      sStatus.svgatorPlayer.stop();
      setStatusPlayer(sStatus.svgatorPlayer);
    } else {
      setStatusPlayer(null);
    }

    if (sTral) {
      sTral.svgatorPlayer.stop();
      setTraliccioPlayer(sTral.svgatorPlayer);
    } else {
      setTraliccioPlayer(null);
    }

    if (sReteA) {
      sReteA.svgatorPlayer.stop();
      setReteAPlayer(sReteA.svgatorPlayer);
    } else {
      setReteAPlayer(null);
    }

    if (sReteB) {
      sReteB.svgatorPlayer.stop();
      setReteBPlayer(sReteB.svgatorPlayer);
    } else {
      setReteBPlayer(null);
    }

    if (sCBA) {
      sCBA.svgatorPlayer.stop();
      setCbaPlayer(sCBA.svgatorPlayer);
    } else {
      setCbaPlayer(null);
    }

    if (sCBB) {
      sCBB.svgatorPlayer.stop();
      setCbbPlayer(sCBB.svgatorPlayer);
    } else {
      setCbbPlayer(null);
    }

    if (sBattA) {
      sBattA.svgatorPlayer.stop();
      setBattAPlayer(sBattA.svgatorPlayer);
    } else {
      setBattAPlayer(null);
    }

    if (sBattB) {
      sBattB.svgatorPlayer.stop();
      setBattBPlayer(sBattB.svgatorPlayer);
    } else {
      setBattBPlayer(null);
    }

    if (sEngine) {
      sEngine.svgatorPlayer.stop();
      setEnginePlayer(sEngine.svgatorPlayer);
    } else {
      setEnginePlayer(null);
    }

    if (sEngineProt) {
      sEngineProt.svgatorPlayer.stop();
      setEngineProtPlayer(sEngineProt.svgatorPlayer);
    } else {
      setEngineProtPlayer(null);
    }

    setIntervals([]);
  }, []);

  useEffect(() => {
    let intv = [];

    processPlayerEvent(modePlayer, 'SinotticoMode', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(pressPlayer, 'SinotticoPress', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(alarmPlayer, 'SinotticoAlarm', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(statusPlayer, 'SinotticoStatus', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(reqPlayer, 'SinotticoReq', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(reqTPlayer, 'SinotticoReqT', intv, intervals, c_smart_eventList, events);

    processPlayerEvent(traliccioPlayer, 'SinotticoTraliccio', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(reteAPlayer, 'SinotticoReteA', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(reteBPlayer, 'SinotticoReteB', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(cbaPlayer, 'SinotticoCBA', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(cbbPlayer, 'SinotticoCBB', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(battAPlayer, 'SinotticoBattA', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(battBPlayer, 'SinotticoBattB', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(enginePlayer, 'SinotticoEngine', intv, intervals, c_smart_eventList, events);
    processPlayerEvent(engineProtPlayer, 'SinotticoEngineProt', intv, intervals, c_smart_eventList, events);

    setIntervals(intv);

  }, [events]);
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
