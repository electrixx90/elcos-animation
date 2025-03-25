import React, {useEffect, useRef, useState} from 'react';
import "./assets/css/style.css";
import _ from "lodash";
import CeaSmart from "./CeaSmart";
import CSmart from "./CSmart";
import {cem_eventList} from "./data/cem_eventList";
import {c_cea_eventList} from "./data/c_cea_eventList";
import Cem139 from "./Cem139";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  },[value]);
  return ref.current || [];
}

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

  const eventList = (sinotticoName === 'cem_139') ? cem_eventList : c_cea_eventList;
  

  const [intervals, setIntervals] = useState([]);
  const prevEvents = usePrevious(events);

  const getSinotticoPartialId = (name) => eventList?.[name]?.[1][sinotticoName] || "__null__"

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
    
    const cemAnomaly = document.getElementById(getSinotticoPartialId('SinotticoAnomaly'));
    const cemClutch = document.getElementById(getSinotticoPartialId('SinotticoClutch'));
    const cemEcu = document.getElementById(getSinotticoPartialId('SinotticoEcu'));
    const cemEngine = document.getElementById(getSinotticoPartialId('SinotticoEngine'));
    const cemEngineProt = document.getElementById(getSinotticoPartialId('SinotticoEngineProt'));
    const cemGenerator = document.getElementById(getSinotticoPartialId('SinotticoGenerator'));
    const cemMode = document.getElementById(getSinotticoPartialId('SinotticoMode'));
    const cemPowerOut = document.getElementById(getSinotticoPartialId('SinotticoPowerOut'));
    const cemPump = document.getElementById(getSinotticoPartialId('SinotticoPump'));
    const cemPumpProt = document.getElementById(getSinotticoPartialId('SinotticoPumpProt'));
    const cemReq = document.getElementById(getSinotticoPartialId('SinotticoReq'));
    const cemReqT = document.getElementById(getSinotticoPartialId('SinotticoReqT'));

    if (sAlarm) {
      //sAlarm.svgatorPlayer.stop();
      setAlarmPlayer(sAlarm.svgatorPlayer);
    } else {
      setAlarmPlayer(null);
    }

    if (sEp) {
      //sEp.svgatorPlayer.stop();
      setEpPlayer(sEp.svgatorPlayer);
    } else {
      setEpPlayer(null);
    }

    if (sMains) {
      //sMains.svgatorPlayer.stop();
      setMainsPlayer(sMains.svgatorPlayer);
    } else {
      setMainsPlayer(null);
    }

    if (sMode) {
      //sMode.svgatorPlayer.stop();
      setModePlayer(sMode.svgatorPlayer);
    } else {
      setModePlayer(null);
    }

    if (sMotor) {
      //sMotor.svgatorPlayer.stop();
      setMotorPlayer(sMotor.svgatorPlayer);
    } else {
      setMotorPlayer(null);
    }

    if (sPress) {
      //sPress.svgatorPlayer.stop();
      setPressPlayer(sPress.svgatorPlayer);
    } else {
      setPressPlayer(null);
    }

    if (sReq) {
      //sReq.svgatorPlayer.stop();
      setReqPlayer(sReq.svgatorPlayer);
    } else {
      setReqPlayer(null);
    }

    if (sReqT) {
      //sReqT.svgatorPlayer.stop();
      setReqTPlayer(sReqT.svgatorPlayer);
    } else {
      setReqTPlayer(null);
    }

    if (sStatus) {
      //sStatus.svgatorPlayer.stop();
      setStatusPlayer(sStatus.svgatorPlayer);
    } else {
      setStatusPlayer(null);
    }

    if (sTral) {
      //sTral.svgatorPlayer.stop();
      setTraliccioPlayer(sTral.svgatorPlayer);
    } else {
      setTraliccioPlayer(null);
    }

    if (sReteA) {
      //sReteA.svgatorPlayer.stop();
      setReteAPlayer(sReteA.svgatorPlayer);
    } else {
      setReteAPlayer(null);
    }

    if (sReteB) {
      //sReteB.svgatorPlayer.stop();
      setReteBPlayer(sReteB.svgatorPlayer);
    } else {
      setReteBPlayer(null);
    }

    if (sCBA) {
      //sCBA.svgatorPlayer.stop();
      setCbaPlayer(sCBA.svgatorPlayer);
    } else {
      setCbaPlayer(null);
    }

    if (sCBB) {
      //sCBB.svgatorPlayer.stop();
      setCbbPlayer(sCBB.svgatorPlayer);
    } else {
      setCbbPlayer(null);
    }

    if (sBattA) {
      //sBattA.svgatorPlayer.stop();
      setBattAPlayer(sBattA.svgatorPlayer);
    } else {
      setBattAPlayer(null);
    }

    if (sBattB) {
      //sBattB.svgatorPlayer.stop();
      setBattBPlayer(sBattB.svgatorPlayer);
    } else {
      setBattBPlayer(null);
    }

    if (sEngine) {
      //sEngine.svgatorPlayer.stop();
      setEnginePlayer(sEngine.svgatorPlayer);
    } else {
      setEnginePlayer(null);
    }

    if (sEngineProt) {
      //sEngineProt.svgatorPlayer.stop();
      setEngineProtPlayer(sEngineProt.svgatorPlayer);
    } else {
      setEngineProtPlayer(null);
    }
    
    if (cemAnomaly) {
      //cemAnomaly.svgatorPlayer.stop();
      setCemAnomalyPlayer(cemAnomaly.svgatorPlayer);
    } else {
      setCemAnomalyPlayer(null);
    }
    
    if (cemClutch) {
      //cemClutch.svgatorPlayer.stop();
      setCemClutchPlayer(cemClutch.svgatorPlayer);
    } else {
      setCemClutchPlayer(null);
    }
    
    if (cemEcu) {
      //cemEcu.svgatorPlayer.stop();
      setCemEcuPlayer(cemEcu.svgatorPlayer);
    } else {
      setCemEcuPlayer(null);
    }
    
    if (cemEngine) {
      //cemEngine.svgatorPlayer.stop();
      setCemEnginePlayer(cemEngine.svgatorPlayer);
    } else {
      setCemEnginePlayer(null);
    }
    
    if (cemEngineProt) {
      //cemEngineProt.svgatorPlayer.stop();
      setCemEngineProtPlayer(cemEngineProt.svgatorPlayer);
    } else {
      setCemEngineProtPlayer(null);
    }
    
    if (cemGenerator) {
      //cemGenerator.svgatorPlayer.stop();
      setCemGeneratorPlayer(cemGenerator.svgatorPlayer);
    } else {
      setCemGeneratorPlayer(null);
    }

    if (cemMode) {
      //cemMode.svgatorPlayer.stop();
      setCemModePlayer(cemMode.svgatorPlayer);
    } else {
      setCemModePlayer(null);
    }

    if (cemPowerOut) {
      //cemPowerOut.svgatorPlayer.stop();
      setCemPowerOutPlayer(cemPowerOut.svgatorPlayer);
    } else {
      setCemPowerOutPlayer(null);
    }

    if (cemPump) {
      //cemPump.svgatorPlayer.stop();
      setCemPumpPlayer(cemPump.svgatorPlayer);
    } else {
      setCemPumpPlayer(null);
    }

    if (cemPumpProt) {
      //cemPumpProt.svgatorPlayer.stop();
      setCemPumpProtPlayer(cemPumpProt.svgatorPlayer);
    } else {
      setCemPumpProtPlayer(null);
    }

    if (cemReq) {
      //cemReq.svgatorPlayer.stop();
      setCemReqPlayer(cemReq.svgatorPlayer);
    } else {
      setCemReqPlayer(null);
    }

    if (cemReqT) {
      //cemReqT.svgatorPlayer.stop();
      setCemReqTPlayer(cemReqT.svgatorPlayer);
    } else {
      setCemReqTPlayer(null);
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
    const evt = events.map(e => e[0]);
    const pEvt = prevEvents.map(e => e[0]);

    const diff = _.difference(pEvt, evt);

    _.forEach(diff, d => {
      const ii = intervals.find(i => i[0].startsWith(d));

      if(typeof ii !== 'undefined') {
        if(sinotticoName === 'cem_139') {
          /*switch (d) {
            case 'SinotticoAnomaly': cemAnomalyPlayer.stop(); break;
            case 'SinotticoClutch': cemClutchPlayer.stop(); break;
            case 'SinotticoEcu': cemEcuPlayer.stop(); break;
            case 'SinotticoEngine': cemEnginePlayer.stop(); break;
            case 'SinotticoEngineProt': cemEngineProtPlayer.stop(); break;
            case 'SinotticoGenerator': cemGeneratorPlayer.stop(); break;
            case 'SinotticoMode': cemModePlayer.stop(); break;
            case 'SinotticoPowerOut': cemPowerOutPlayer.stop(); break;
            case 'SinotticoPump': cemPumpPlayer.stop(); break;
            case 'SinotticoPumpProt': cemPumpProtPlayer.stop(); break;
            case 'SinotticoReq': cemReqPlayer.stop(); break;
            case 'SinotticoReqT': cemReqTPlayer.stop(); break;
          }*/
        } else {
          /*switch(d) {
            case 'SinotticoAlarm': alarmPlayer.stop(); break;
            case 'SinotticoEP': epPlayer.stop(); break;
            case 'SinotticoMains': mainsPlayer.stop(); break;
            case 'SinotticoMode': modePlayer.stop(); break;
            case 'SinotticoMotor': motorPlayer.stop(); break;
            case 'SinotticoPress': pressPlayer.stop(); break;
            case 'SinotticoReq': reqPlayer.stop(); break;
            case 'SinotticoReqT': reqTPlayer.stop(); break;
            case 'SinotticoStatus': statusPlayer.stop(); break;
            case 'SinotticoTraliccio': traliccioPlayer.stop(); break;
            case 'SinotticoReteA': reteAPlayer.stop(); break;
            case 'SinotticoReteB': reteBPlayer.stop(); break;
            case 'SinotticoCBA': cbaPlayer.stop(); break;
            case 'SinotticoCBB': cbbPlayer.stop(); break;
            case 'SinotticoBattA': battAPlayer.stop(); break;
            case 'SinotticoBattB': battBPlayer.stop(); break;
            case 'SinotticoEngine': enginePlayer.stop(); break;
            case 'SinotticoEngineProt': engineProtPlayer.stop(); break;
          }
        }*/

        if (typeof ii[1] === 'number') clearInterval(ii[1]);
      }
    })

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

    processPlayerEvent(cemAnomalyPlayer, 'SinotticoAnomaly', intv);
    processPlayerEvent(cemClutchPlayer, 'SinotticoClutch', intv);
    processPlayerEvent(cemEcuPlayer, 'SinotticoEcu', intv);
    processPlayerEvent(cemEnginePlayer, 'SinotticoEngine', intv);
    processPlayerEvent(cemEngineProtPlayer, 'SinotticoEngineProt', intv);
    processPlayerEvent(cemGeneratorPlayer, 'SinotticoGenerator', intv);
    processPlayerEvent(cemModePlayer, 'SinotticoMode', intv);
    processPlayerEvent(cemPowerOutPlayer, 'SinotticoPowerOut', intv);
    processPlayerEvent(cemPumpPlayer, 'SinotticoPump', intv);
    processPlayerEvent(cemPumpProtPlayer, 'SinotticoPumpProt', intv);
    processPlayerEvent(cemReqPlayer, 'SinotticoReq', intv);
    processPlayerEvent(cemReqTPlayer, 'SinotticoReqT', intv);

    setIntervals(intv);

  }, [events]);

  switch (sinotticoName) {
    case 'cea_smart':
      return (<CeaSmart sinotticoName={sinotticoName} />);

    case 'c_smart':
      return (<CSmart sinotticoName={sinotticoName} />);

    case 'cem_139':
      return (<Cem139 sinotticoName={sinotticoName} />);
  }
}
