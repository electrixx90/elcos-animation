import {useEffect, useState} from "react";
import {getSinotticoPartialId, processPlayerEvent} from "./ElcosAnimation";
import {cam_130_10_eventList} from "./data/cam_130_10_eventList";
import SinotticoMode from "./partials/variants/cam_130_10/SinotticoMode";
import SinotticoAnomaly from "./partials/variants/cam_130_10/SinotticoAnomaly";
import SinotticoGenerator from "./partials/variants/cam_130_10/SinotticoGenerator";
import SinotticoEngine from "./partials/variants/cam_130_10/SinotticoEngine";
import SinotticoContatGen from "./partials/variants/cam_130_10/SinotticoContatGen";
import SinotticoEngineProt from "./partials/variants/cam_130_10/SinotticoEngineProt";
import SinotticoECU from "./partials/variants/cam_130_10/SinotticoECU";
import SinotticoReq from "./partials/variants/cam_130_10/SinotticoReq";


export default function Cam130_10({events, sinotticoName}) {
  const [modePlayer, setModePlayer] = useState(null);
  const [anomalyPlayer, setAnomalyPlayer] = useState(null);
  const [generatorPlayer, setGeneratorPlayer] = useState(null);
  const [enginePlayer, setEnginePlayer] = useState(null);
  const [contatGenPlayer, setContatGenPlayer] = useState(null);
  const [engineProtPlayer, setEngineProtPlayer] = useState(null);
  const [ecuPlayer, setEcuPlayer] = useState(null);
  const [reqPlayer, setReqPlayer] = useState(null);

  const [intervals, setIntervals] = useState([]);

  useEffect(() => {
    const sMode = document.getElementById(getSinotticoPartialId(cam_130_10_eventList, 'SinotticoMode'));
    const sAnomaly = document.getElementById(getSinotticoPartialId(cam_130_10_eventList, 'SinotticoAnomaly'));
    const sGenerator = document.getElementById(getSinotticoPartialId(cam_130_10_eventList, 'SinotticoGenerator'));
    const sEngine = document.getElementById(getSinotticoPartialId(cam_130_10_eventList, 'SinotticoEngine'));
    const sContatGen = document.getElementById(getSinotticoPartialId(cam_130_10_eventList, 'SinotticoContatGen'));
    const sEngineProt = document.getElementById(getSinotticoPartialId(cam_130_10_eventList, 'SinotticoEngineProt'));
    const sECU = document.getElementById(getSinotticoPartialId(cam_130_10_eventList, 'SinotticoECU'));
    const sReq = document.getElementById(getSinotticoPartialId(cam_130_10_eventList, 'SinotticoReq'));

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

    processPlayerEvent(modePlayer, 'SinotticoMode', intv, intervals, cam_130_10_eventList, events);
    processPlayerEvent(anomalyPlayer, 'SinotticoAnomaly', intv, intervals, cam_130_10_eventList, events);
    processPlayerEvent(generatorPlayer, 'SinotticoGenerator', intv, intervals, cam_130_10_eventList, events);
    processPlayerEvent(enginePlayer, 'SinotticoEngine', intv, intervals, cam_130_10_eventList, events);
    processPlayerEvent(contatGenPlayer, 'SinotticoContatGen', intv, intervals, cam_130_10_eventList, events);
    processPlayerEvent(engineProtPlayer, 'SinotticoEngineProt', intv, intervals, cam_130_10_eventList, events);
    processPlayerEvent(ecuPlayer, 'SinotticoECU', intv, intervals, cam_130_10_eventList, events);
    processPlayerEvent(reqPlayer, 'SinotticoReq', intv, intervals, cam_130_10_eventList, events);

    setIntervals(intv);
  }, [events]);

  return (
    <>
      <div className="animation-container">
        <SinotticoMode />
        <SinotticoAnomaly />
        <SinotticoGenerator />
        <SinotticoEngine />
        <SinotticoContatGen />
        <SinotticoEngineProt />
        <SinotticoECU />
        <SinotticoReq />
      </div>
    </>
  )
}
