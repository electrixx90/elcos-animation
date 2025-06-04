import {useEffect, useState} from "react";
import {getSinotticoPartialId, processPlayerEvent} from "./ElcosAnimation";
import SinotticoMode from "./partials/variants/cam_335/SinotticoMode";
import SinotticoAnomaly from "./partials/variants/cam_335/SinotticoAnomaly";
import SinotticoGenerator from "./partials/variants/cam_335/SinotticoGenerator";
import SinotticoEngine from "./partials/variants/cam_335/SinotticoEngine";
import SinotticoMains from "./partials/variants/cam_335/SinotticoMains";
import SinotticoContatMains from "./partials/variants/cam_335/SinotticoContatMains";
import SinotticoContatGen from "./partials/variants/cam_335/SinotticoContatGen";
import SinotticoEngineProt from "./partials/variants/cam_335/SinotticoEngineProt";
import SinotticoECU from "./partials/variants/cam_335/SinotticoECU";
import SinotticoReq from "./partials/variants/cam_335/SinotticoReq";
import {cam_335_eventList} from "./data/cam_335_eventList";

export default function Cam335({events, sinotticoName}) {
  const [modePlayer, setModePlayer] = useState(null);
  const [anomalyPlayer, setAnomalyPlayer] = useState(null);
  const [generatorPlayer, setGeneratorPlayer] = useState(null);
  const [enginePlayer, setEnginePlayer] = useState(null);
  const [mainsPlayer, setMainsPlayer] = useState(null);
  const [contatMainsPlayer, setContatMainsPlayer] = useState(null);
  const [contatGenPlayer, setContatGenPlayer] = useState(null);
  const [engineProtPlayer, setEngineProtPlayer] = useState(null);
  const [ecuPlayer, setEcuPlayer] = useState(null);
  const [reqPlayer, setReqPlayer] = useState(null);

  const [intervals, setIntervals] = useState([]);

  useEffect(() => {
    const sMode = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoMode'));
    const sAnomaly = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoAnomaly'));
    const sGenerator = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoGenerator'));
    const sEngine = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoEngine'));
    const sMains = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoMains'));
    const sContatMains = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoContatMains'));
    const sContatGen = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoContatGen'));
    const sEngineProt = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoEngineProt'));
    const sECU = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoECU'));
    const sReq = document.getElementById(getSinotticoPartialId(cam_335_eventList, 'SinotticoReq'));

    if (sMode) {
      sMode.svgatorPlayer.stop();
      setModePlayer(sMode.svgatorPlayer);
    } else {
      setModePlayer(null);
    }

    if (sAnomaly) {
      sAnomaly.svgatorPlayer.stop();
      setAnomalyPlayer(sAnomaly.svgatorPlayer);
    } else {
      setAnomalyPlayer(null);
    }

    if (sGenerator) {
      sGenerator.svgatorPlayer.stop();
      setGeneratorPlayer(sGenerator.svgatorPlayer);
    } else {
      setGeneratorPlayer(null);
    }

    if (sEngine) {
      sEngine.svgatorPlayer.stop();
      setEnginePlayer(sEngine.svgatorPlayer);
    } else {
      setEnginePlayer(null);
    }

    if (sMains) {
      sMains.svgatorPlayer.stop();
      setMainsPlayer(sMains.svgatorPlayer);
    } else {
      setMainsPlayer(null);
    }

    if (sContatMains) {
      sContatMains.svgatorPlayer.stop();
      setContatMainsPlayer(sContatMains.svgatorPlayer);
    } else {
      setContatMainsPlayer(null);
    }

    if (sContatGen) {
      sContatGen.svgatorPlayer.stop();
      setContatGenPlayer(sContatGen.svgatorPlayer);
    } else {
      setContatGenPlayer(null);
    }

    if (sEngineProt) {
      sEngineProt.svgatorPlayer.stop();
      setEngineProtPlayer(sEngineProt.svgatorPlayer);
    } else {
      setEngineProtPlayer(null);
    }

    if (sECU) {
      sECU.svgatorPlayer.stop();
      setEcuPlayer(sECU.svgatorPlayer);
    } else {
      setEcuPlayer(null);
    }

    if (sReq) {
      sReq.svgatorPlayer.stop();
      setReqPlayer(sReq.svgatorPlayer);
    } else {
      setReqPlayer(null);
    }
  }, []);

  useEffect(() => {
    let intv = [];

    processPlayerEvent(modePlayer, 'SinotticoMode', intv, intervals, cam_335_eventList, events);
    processPlayerEvent(anomalyPlayer, 'SinotticoAnomaly', intv, intervals, cam_335_eventList, events);
    processPlayerEvent(generatorPlayer, 'SinotticoGenerator', intv, intervals, cam_335_eventList, events);
    processPlayerEvent(enginePlayer, 'SinotticoEngine', intv, intervals, cam_335_eventList, events);
    processPlayerEvent(mainsPlayer, 'SinotticoMains', intv, intervals, cam_335_eventList, events);
    processPlayerEvent(contatMainsPlayer, 'SinotticoContatMains', intv, intervals, cam_335_eventList, events);
    processPlayerEvent(contatGenPlayer, 'SinotticoContatGen', intv, intervals, cam_335_eventList, events);
    processPlayerEvent(engineProtPlayer, 'SinotticoEngineProt', intv, intervals, cam_335_eventList, events);
    processPlayerEvent(ecuPlayer, 'SinotticoECU', intv, intervals, cam_335_eventList, events);
    processPlayerEvent(reqPlayer, 'SinotticoReq', intv, intervals, cam_335_eventList, events);

    setIntervals(intv);
  }, [events]);

  return (
    <>
      <div className="animation-container">
        <SinotticoMode />
        <SinotticoAnomaly />
        <SinotticoGenerator />
        <SinotticoEngine />
        <SinotticoMains />
        <SinotticoContatMains />
        <SinotticoContatGen />
        <SinotticoEngineProt />
        <SinotticoECU />
        <SinotticoReq />
      </div>
    </>
  )

}
