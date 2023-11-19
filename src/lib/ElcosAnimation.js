import React, {useEffect, useState} from 'react';
import "./assets/css/style.css";
import _ from "lodash";
import CeaSmart from "./CeaSmart";
import CSmart from "./CSmart";
import {eventList} from "./data/eventList";

/**
 *
 * @param events
 * @param sinotticoName
 * @returns {JSX.Element}
 * @export events = [
 *  ["SinotticoMode", "MODE_OFF"], ["SinotticoMotor", "MOTOR_OFF"], ...
 * ]
 * @export sinotticoName = 'cea_smart | c_smart'
 */
export default function ElcosAnimation({
                                         events = [],
                                         sinotticoName = 'cea_smart'
                                       }) {
  const [alarmPlayer, setAlarmPlayer] = useState(null);
  const [epPlayer, setEpPlayer] = useState(null);
  const [mainsPlayer, setMainsPlayer] = useState(null);
  const [modePlayer, setModePlayer] = useState(null);
  const [motorPlayer, setMotorPlayer] = useState(null);
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

  const getSinotticoPartialId = (name) => eventList[name][1][sinotticoName] || "__null__"

  useEffect(() => {
    const sAlarm = document.getElementById(getSinotticoPartialId('SinotticoAlarm'));
    const sEp = document.getElementById(getSinotticoPartialId('SinotticoEP'));
    const sMains = document.getElementById(getSinotticoPartialId('SinotticoMains'));
    const sMode = document.getElementById(getSinotticoPartialId('SinotticoMode'));
    const sMotor = document.getElementById(getSinotticoPartialId('SinotticoMotor'));
    const sPress = document.getElementById(getSinotticoPartialId('SinotticoPress'));
    const sReq = document.getElementById(getSinotticoPartialId('SinotticoReq'));
    const sReqT = document.getElementById(getSinotticoPartialId('SinotticoReqT'));
    const sStatus = document.getElementById(getSinotticoPartialId('SinotticoStatus'));

    const sTral = document.getElementById(getSinotticoPartialId('SinotticoTraliccio'));
    const sReteA = document.getElementById(getSinotticoPartialId('SinotticoReteA'));
    const sReteB = document.getElementById(getSinotticoPartialId('SinotticoReteB'));
    const sCBA = document.getElementById(getSinotticoPartialId('SinotticoCBA'));
    const sCBB = document.getElementById(getSinotticoPartialId('SinotticoCBB'));
    const sBattA = document.getElementById(getSinotticoPartialId('SinotticoBattA'));
    const sBattB = document.getElementById(getSinotticoPartialId('SinotticoBattB'));
    const sEngine = document.getElementById(getSinotticoPartialId('SinotticoEngine'));
    const sEngineProt = document.getElementById(getSinotticoPartialId('SinotticoEngineProt'));

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
  }, [sinotticoName]);

  const createInterval = (item, player) => {
    if (item.loop) {
      return setInterval(() => {
        item['fn'](player);
      }, item['duration']);
    }

    return item['fn'](player);
  }

  function processPlayerEvent(player, eventName, intv) {
    if (player && events.length > 0) {
      const flattenedEvents = _.flatten(events);
      if (flattenedEvents.includes(eventName)) {
        const e = _.find(events, e => e[0] === eventName);
        const item = eventList[e[0]][0][e[1]][0];
        const label = `${e[0]}-${e[1]}`;
        const fInt = _.find(intervals, i => i[0] === label);

        if (intervals.length && typeof fInt !== 'undefined') {
          intv.push(fInt);
        } else {
          _.forEach(intervals, i => {
            let eventName = i[0].split('-')[0];
            if (typeof i[1] === 'number' && eventName === e[0]) clearInterval(i[1]);
          });
          // [etichetta_evento, identificativo_intervallo]
          intv.push([label, createInterval(item, player)]);
        }
      }
    }
  }


  useEffect(() => {
    let intv = [];

    processPlayerEvent(modePlayer, 'SinotticoMode', intv);
    processPlayerEvent(mainsPlayer, 'SinotticoMains', intv);
    processPlayerEvent(motorPlayer, 'SinotticoMotor', intv);
    processPlayerEvent(epPlayer, 'SinotticoEP', intv);
    processPlayerEvent(pressPlayer, 'SinotticoPress', intv);
    processPlayerEvent(alarmPlayer, 'SinotticoAlarm', intv);
    processPlayerEvent(statusPlayer, 'SinotticoStatus', intv);
    processPlayerEvent(reqPlayer, 'SinotticoReq', intv);
    processPlayerEvent(reqTPlayer, 'SinotticoReqT', intv);

    processPlayerEvent(traliccioPlayer, 'SinotticoTraliccio', intv);
    processPlayerEvent(reteAPlayer, 'SinotticoReteA', intv);
    processPlayerEvent(reteBPlayer, 'SinotticoReteB', intv);
    processPlayerEvent(cbaPlayer, 'SinotticoCBA', intv);
    processPlayerEvent(cbbPlayer, 'SinotticoCBB', intv);
    processPlayerEvent(battAPlayer, 'SinotticoBattA', intv);
    processPlayerEvent(battBPlayer, 'SinotticoBattB', intv);
    processPlayerEvent(enginePlayer, 'SinotticoEngine', intv);
    processPlayerEvent(engineProtPlayer, 'SinotticoEngineProt', intv);

    setIntervals(intv);

  }, [JSON.stringify(events)]);

  switch (sinotticoName) {
    case 'cea_smart':
      return (<CeaSmart sinotticoName={sinotticoName} />);

    case 'c_smart':
      return (<CSmart sinotticoName={sinotticoName} />);
  }
}
