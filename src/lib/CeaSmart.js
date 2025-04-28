import React, {useEffect, useState} from "react";
import SinotticoAlarm from "./partials/SinotticoAlarm";
import SinotticoEP from "./partials/SinotticoEP";
import SinotticoMains from "./partials/SinotticoMains";
import SinotticoMode from "./partials/SinotticoMode";
import SinotticoMotor from "./partials/SinotticoMotor";
import SinotticoPress from "./partials/SinotticoPress";
import SinotticoReq from "./partials/SinotticoReq";
import SinotticoReqT from "./partials/SinotticoReqT";
import SinotticoStatus from "./partials/SinotticoStatus";
import {getSinotticoPartialId, processPlayerEvent} from "./ElcosAnimation";
import {cea_smart_eventList} from "./data/cea_smart_eventList";

export default function CeaSmart({events, sinotticoName}) {
  const [alarmPlayer, setAlarmPlayer] = useState(null);
  const [epPlayer, setEpPlayer] = useState(null);
  const [mainsPlayer, setMainsPlayer] = useState(null);
  const [modePlayer, setModePlayer] = useState(null);
  const [motorPlayer, setMotorPlayer] = useState(null);
  const [pressPlayer, setPressPlayer] = useState(null);
  const [reqPlayer, setReqPlayer] = useState(null);
  const [reqTPlayer, setReqTPlayer] = useState(null);
  const [statusPlayer, setStatusPlayer] = useState(null);

  const [intervals, setIntervals] = useState([]);

  useEffect(() => {
    const sAlarm = document.getElementById(getSinotticoPartialId(cea_smart_eventList, 'SinotticoAlarm'));
    const sEp = document.getElementById(getSinotticoPartialId(cea_smart_eventList, 'SinotticoEP'));
    const sMains = document.getElementById(getSinotticoPartialId(cea_smart_eventList, 'SinotticoMains'));
    const sMode = document.getElementById(getSinotticoPartialId(cea_smart_eventList, 'SinotticoMode'));
    const sMotor = document.getElementById(getSinotticoPartialId(cea_smart_eventList, 'SinotticoMotor'));
    const sPress = document.getElementById(getSinotticoPartialId(cea_smart_eventList, 'SinotticoPress'));
    const sReq = document.getElementById(getSinotticoPartialId(cea_smart_eventList, 'SinotticoReq'));
    const sReqT = document.getElementById(getSinotticoPartialId(cea_smart_eventList, 'SinotticoReqT'));
    const sStatus = document.getElementById(getSinotticoPartialId(cea_smart_eventList, 'SinotticoStatus'));

    if (sAlarm) {
      sAlarm.svgatorPlayer.stop();
      setAlarmPlayer(sAlarm.svgatorPlayer);
    } else {
      setAlarmPlayer(null);
    }

    if (sEp) {
      sEp.svgatorPlayer.stop();
      setEpPlayer(sEp.svgatorPlayer);
    } else {
      setEpPlayer(null);
    }

    if (sMains) {
      sMains.svgatorPlayer.stop();
      setMainsPlayer(sMains.svgatorPlayer);
    } else {
      setMainsPlayer(null);
    }

    if (sMode) {
      sMode.svgatorPlayer.stop();
      setModePlayer(sMode.svgatorPlayer);
    } else {
      setModePlayer(null);
    }

    if (sMotor) {
      sMotor.svgatorPlayer.stop();
      setMotorPlayer(sMotor.svgatorPlayer);
    } else {
      setMotorPlayer(null);
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

    setIntervals([]);
  }, []);

  useEffect(() => {
    let intv = [];

    processPlayerEvent(modePlayer, 'SinotticoMode', intv, intervals, cea_smart_eventList, events);
    processPlayerEvent(mainsPlayer, 'SinotticoMains', intv, intervals, cea_smart_eventList, events);
    processPlayerEvent(motorPlayer, 'SinotticoMotor', intv, intervals, cea_smart_eventList, events);
    processPlayerEvent(epPlayer, 'SinotticoEP', intv, intervals, cea_smart_eventList, events);
    processPlayerEvent(pressPlayer, 'SinotticoPress', intv, intervals, cea_smart_eventList, events);
    processPlayerEvent(alarmPlayer, 'SinotticoAlarm', intv, intervals, cea_smart_eventList, events);
    processPlayerEvent(statusPlayer, 'SinotticoStatus', intv, intervals, cea_smart_eventList, events);
    processPlayerEvent(reqPlayer, 'SinotticoReq', intv, intervals, cea_smart_eventList, events);
    processPlayerEvent(reqTPlayer, 'SinotticoReqT', intv, intervals, cea_smart_eventList, events);

    setIntervals(intv);
  }, [events]);

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
