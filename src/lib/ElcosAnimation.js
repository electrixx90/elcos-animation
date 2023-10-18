import React, {useEffect, useState} from 'react';
import SinotticoAlarm from "./SinotticoAlarm";
import SinotticoEP from "./SinotticoEP";
import SinotticoMains from "./SinotticoMains";
import SinotticoMode from "./SinotticoMode";
import SinotticoMotor from "./SinotticoMotor";
import SinotticoPress from "./SinotticoPress";
import SinotticoReq from "./SinotticoReq";
import SinotticoReqT from "./SinotticoReqT";
import SinotticoStatus from "./SinotticoStatus";
import "./assets/css/style.css";
import _ from "lodash";

/**
 *
 * @param events
 * @returns {JSX.Element}
 * @export events = [
 *  ["SinotticoMode", "MODE_OFF"], ["SinotticoMotor", "MOTOR_OFF"], ...
 * ]
 */
export default function ElcosAnimation({events = []}) {
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

  const eventList = {
    'SinotticoMode': [{
      'MODE_OFF': [{
        fn: (p) => p.seekTo(1500).pause(),
        duration: 2000,
        loop: false
      }],
      'MODE_MAN': [{
        fn: (p) => p.seekTo(2500).pause(),
        duration: 2000,
        loop: false
      }],
      'MODE_AUT': [{
        fn: (p) => p.seekTo(3500).pause(),
        duration: 2000,
        loop: false
      }],
      'MODE_AUT_ESC': [{
        fn: (p) => p.seekTo(4500).pause(),
        duration: 2000,
        loop: false
      }],
      'MODE_AUT_INC': [{
        fn: (p) => p.seekTo(0).pause(),
        duration: null,
        loop: false
      }]
    }],
    'SinotticoMains': [{
      'MAINS_ABS': [{
        fn: (p) => p.seekTo(0).pause(),
        duration: 2000,
        loop: false,
      }],
      'MAINS_PRES': [{
        fn: (p) => {
          p.seekTo(0).play();
          return setTimeout(() => p.pause(), 2000);
        },
        duration: null,
        loop: false,
      }],
      'MAINS_ANOM': [{
        fn: (p) => p.seekTo(5000).play(),
        duration: 2000,
        loop: true,
      }],
      'MAINS_WAIT': [{
        fn: (p) => p.seekTo(2000).play(),
        duration: 2000,
        loop: true,
      }]
    }],
    'SinotticoMotor': [{
      'MOTOR_OFF': [{
        fn: (p) => {
          p.seekTo(0).play();
          return setTimeout(() => p.pause(), 1000);
        },
        duration: null,
        loop: false
      }],
      'MOTOR_ON': [{
        fn: (p) => p.seekTo(3000).play(),
        duration: 2000,
        loop: true
      }]
    }],
    'SinotticoEP': [{
      'EP_OFF': [{
        fn: (p) => p.seekTo(0).pause(),
        duration: null,
        loop: false
      }],
      'EP_ON': [{
        fn: (p) => p.seekTo(2000).play(),
        duration: 2000,
        loop: true
      }]
    }],
    'SinotticoPress': [{
      'PRESS_EXCL': [{
        fn: (p) => {
          p.seekTo(1000).play();
          return setTimeout(() => p.pause(), 1000);
        },
        duration: null,
        loop: false
      }],
      'PRESS_YES': [{
        fn: (p) => p.seekTo(0).pause(),
        duration: null,
        loop: false
      }],
      'PRESS_NO': [{
        fn: (p) => {
          p.seekTo(3000).play();
          return setTimeout(() => p.pause(), 3000);
        },
        duration: null,
        loop: false
      }]
    }],
    'SinotticoAlarm': [{
      'ALARM_NO': [{
        fn: (p) => p.seekTo(0).pause(),
        duration: null,
        loop: false
      }],
      'ALARM_Y_B': [{
        fn: (p) => {
          p.seekTo(2000).play();
          return setTimeout(() => p.pause(), 2400);
        },
        duration: null,
        loop: false
      }],
      'ALARM_Y_A': [{
        fn: (p) => {
          p.seekTo(5000).play();
          return setTimeout(() => p.pause(), 2400);
        },
        duration: null,
        loop: false
      }]
    }],
    'SinotticoStatus': [{
      'ANOM_NO': [{
        fn: (p) => p.seekTo(0).pause(),
        duration: null,
        loop: false
      }],
      'ANOM_YES': [{
        fn: (p) => p.seekTo(1000).play(),
        duration: 2000,
        loop: true
      }]
    }],
    'SinotticoReq': [{
      'REQ_NO': [{
        fn: (p) => p.seekTo(0).pause(),
        duration: null,
        loop: false
      }],
      'REQ_START': [{
        fn: (p) => p.seekTo(3000).pause(),
        duration: null,
        loop: false
      }],
      'REQ_STOP': [{
        fn: (p) => p.seekTo(7000).pause(),
        duration: null,
        loop: false
      }]
    }],
    'SinotticoReqT': [{
      'REQT_NO': [{
        fn: (p) => p.seekTo(0).pause(),
        duration: null,
        loop: false
      }],
      'REQT_PRESS': [{
        fn: (p) => p.seekTo(500).pause(),
        duration: null,
        loop: false
      }],
      'REQT_GALL': [{
        fn: (p) => p.seekTo(5000).pause(),
        duration: null,
        loop: false
      }],
      'REQT_TEST': [{
        fn: (p) => p.seekTo(2000).play(),
        duration: 1000,
        loop: true
      }],
      'REQT_TP': [{
        fn: (p) => p.seekTo(6000).pause(),
        duration: null,
        loop: false
      }],
      'REQT_IN': [{
        fn: (p) => p.seekTo(7000).play(),
        duration: 1000,
        loop: true
      }],
      'REQT_KEY': [{
        fn: (p) => p.seekTo(11600).pause(),
        duration: null,
        loop: false
      }],
    }]
  }

  useEffect(() => {
    const sAlarm = document.getElementById('elcos-sinotticoalarm');
    const sEp = document.getElementById('elcos-sinotticoep-update');
    const sMains = document.getElementById('elcos-sinotticomains');
    const sMode = document.getElementById('elcos-sinotticomode');
    const sMotor = document.getElementById('elcos-sinotticomotor_update');
    const sPress = document.getElementById('elcos-sinotticopress');
    const sReq = document.getElementById('elcos-sinotticoreq_update');
    const sReqT = document.getElementById('elcos-sinotticoreqt_update');
    const sStatus = document.getElementById('elcos-sinotticostatus');

    sAlarm.svgatorPlayer.stop();
    setAlarmPlayer(sAlarm.svgatorPlayer);

    sEp.svgatorPlayer.stop();
    setEpPlayer(sEp.svgatorPlayer);

    sMains.svgatorPlayer.stop();
    setMainsPlayer(sMains.svgatorPlayer);

    sMode.svgatorPlayer.stop();
    setModePlayer(sMode.svgatorPlayer);

    sMotor.svgatorPlayer.stop();
    setMotorPlayer(sMotor.svgatorPlayer);

    sPress.svgatorPlayer.stop();
    setPressPlayer(sPress.svgatorPlayer);

    sReq.svgatorPlayer.stop();
    setReqPlayer(sReq.svgatorPlayer);

    sReqT.svgatorPlayer.stop();
    setReqTPlayer(sReqT.svgatorPlayer);

    sStatus.svgatorPlayer.stop();
    setStatusPlayer(sStatus.svgatorPlayer);
  }, []);

  const createInterval = (item, player) => {
    if(item.loop) {
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

    setIntervals(intv);

  }, [JSON.stringify(events)]);

  return (
    <div className="animation-container">
      <SinotticoAlarm />
      <SinotticoEP />
      <SinotticoMains />
      <SinotticoMode />
      <SinotticoMotor />
      <SinotticoPress />
      <SinotticoReq />
      <SinotticoReqT />
      <SinotticoStatus />
    </div>
  )
}
