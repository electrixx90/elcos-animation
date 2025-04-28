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
import {useEffect, useState} from "react";
import {getSinotticoPartialId, processPlayerEvent} from "./ElcosAnimation";
import {cem_139_eventList} from "./data/cem_139_eventList";

export default function Cem139({events, sinotticoName}) {
  const [cemAnomalyPlayer, setCemAnomalyPlayer] = useState(null);
  const [cemClutchPlayer, setCemClutchPlayer] = useState(null);
  const [cemEcuPlayer, setCemEcuPlayer] = useState(null);
  const [cemEnginePlayer, setCemEnginePlayer] = useState(null);
  const [cemEngineProtPlayer, setCemEngineProtPlayer] = useState(null);
  const [cemGeneratorPlayer, setCemGeneratorPlayer] = useState(null);
  const [cemModePlayer, setCemModePlayer] = useState(null);
  const [cemPowerOutPlayer, setCemPowerOutPlayer] = useState(null);
  const [cemPumpPlayer, setCemPumpPlayer] = useState(null);
  const [cemPumpProtPlayer, setCemPumpProtPlayer] = useState(null);
  const [cemReqPlayer, setCemReqPlayer] = useState(null);
  const [cemReqTPlayer, setCemReqTPlayer] = useState(null);

  const [intervals, setIntervals] = useState([]);

  useEffect(() => {
    const cemAnomaly = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoAnomaly'));
    const cemClutch = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoClutch'));
    const cemEcu = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoECU'));
    const cemEngine = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoEngine'));
    const cemEngineProt = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoEngineProt'));
    const cemGenerator = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoGenerator'));
    const cemMode = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoMode'));
    const cemPowerOut = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoPowerOut'));
    const cemPump = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoPump'));
    const cemPumpProt = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoPumpProt'));
    const cemReq = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoReq'));
    const cemReqT = document.getElementById(getSinotticoPartialId(cem_139_eventList, 'SinotticoReqT'));

    if (cemAnomaly) {
      cemAnomaly.svgatorPlayer.stop();
      setCemAnomalyPlayer(cemAnomaly.svgatorPlayer);
    } else {
      setCemAnomalyPlayer(null);
    }

    if (cemClutch) {
      cemClutch.svgatorPlayer.stop();
      setCemClutchPlayer(cemClutch.svgatorPlayer);
    } else {
      setCemClutchPlayer(null);
    }

    if (cemEcu) {
      cemEcu.svgatorPlayer.stop();
      setCemEcuPlayer(cemEcu.svgatorPlayer);
    } else {
      setCemEcuPlayer(null);
    }

    if (cemEngine) {
      cemEngine.svgatorPlayer.stop();
      setCemEnginePlayer(cemEngine.svgatorPlayer);
    } else {
      setCemEnginePlayer(null);
    }

    if (cemEngineProt) {
      cemEngineProt.svgatorPlayer.stop();
      setCemEngineProtPlayer(cemEngineProt.svgatorPlayer);
    } else {
      setCemEngineProtPlayer(null);
    }

    if (cemGenerator) {
      cemGenerator.svgatorPlayer.stop();
      setCemGeneratorPlayer(cemGenerator.svgatorPlayer);
    } else {
      setCemGeneratorPlayer(null);
    }

    if (cemMode) {
      cemMode.svgatorPlayer.stop();
      setCemModePlayer(cemMode.svgatorPlayer);
    } else {
      setCemModePlayer(null);
    }

    if (cemPowerOut) {
      cemPowerOut.svgatorPlayer.stop();
      setCemPowerOutPlayer(cemPowerOut.svgatorPlayer);
    } else {
      setCemPowerOutPlayer(null);
    }

    if (cemPump) {
      cemPump.svgatorPlayer.stop();
      setCemPumpPlayer(cemPump.svgatorPlayer);
    } else {
      setCemPumpPlayer(null);
    }

    if (cemPumpProt) {
      cemPumpProt.svgatorPlayer.stop();
      setCemPumpProtPlayer(cemPumpProt.svgatorPlayer);
    } else {
      setCemPumpProtPlayer(null);
    }

    if (cemReq) {
      cemReq.svgatorPlayer.stop();
      setCemReqPlayer(cemReq.svgatorPlayer);
    } else {
      setCemReqPlayer(null);
    }

    if (cemReqT) {
      cemReqT.svgatorPlayer.stop();
      setCemReqTPlayer(cemReqT.svgatorPlayer);
    } else {
      setCemReqTPlayer(null);
    }

    setIntervals([]);
  }, []);

  useEffect(() => {
    let intv = [];

    processPlayerEvent(cemAnomalyPlayer, 'SinotticoAnomaly', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemClutchPlayer, 'SinotticoClutch', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemEcuPlayer, 'SinotticoECU', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemEnginePlayer, 'SinotticoEngine', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemEngineProtPlayer, 'SinotticoEngineProt', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemGeneratorPlayer, 'SinotticoGenerator', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemModePlayer, 'SinotticoMode', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemPowerOutPlayer, 'SinotticoPowerOut', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemPumpPlayer, 'SinotticoPump', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemPumpProtPlayer, 'SinotticoPumpProt', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemReqPlayer, 'SinotticoReq', intv, intervals, cem_139_eventList, events);
    processPlayerEvent(cemReqTPlayer, 'SinotticoReqT', intv, intervals, cem_139_eventList, events);

    setIntervals(intv);

  }, [events]);

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
