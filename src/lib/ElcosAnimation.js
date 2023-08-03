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
      'REQT_PRESS': [{
        fn: (p) => p.seekTo(0).pause(),
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
    const sEp = document.getElementById('elcos-sinotticoep');
    const sMains = document.getElementById('elcos-sinotticomains');
    const sMode = document.getElementById('elcos-sinotticomode');
    const sMotor = document.getElementById('elcos-sinotticomotor');
    const sPress = document.getElementById('elcos-sinotticopress');
    const sReq = document.getElementById('elcos-sinotticoreq');
    const sReqT = document.getElementById('elcos-sinotticoreqt');
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

  useEffect(() => {
    let intervals = [];

    if(modePlayer && events.length > 0 && _.flatten(events).includes('SinotticoMode')) {
      let e = _.find(events, e => e[0] === 'SinotticoMode');
      let item = eventList[e[0]][0][e[1]][0];

      intervals.push(createInterval(item, modePlayer));
    }

    if(mainsPlayer && events.length > 0 && _.flatten(events).includes('SinotticoMains')) {
      let e = _.find(events, e => e[0] === 'SinotticoMains');
      let item = eventList[e[0]][0][e[1]][0];

      intervals.push(createInterval(item, mainsPlayer));
    }

    if(motorPlayer && events.length > 0 && _.flatten(events).includes('SinotticoMotor')) {
      let e = _.find(events, e => e[0] === 'SinotticoMotor');
      let item = eventList[e[0]][0][e[1]][0];

      intervals.push(createInterval(item, motorPlayer));
    }

    if(epPlayer && events.length > 0 && _.flatten(events).includes('SinotticoEP')) {
      let e = _.find(events, e => e[0] === 'SinotticoEP');
      let item = eventList[e[0]][0][e[1]][0];

      intervals.push(createInterval(item, epPlayer));
    }

    if(pressPlayer && events.length > 0 && _.flatten(events).includes('SinotticoPress')) {
      let e = _.find(events, e => e[0] === 'SinotticoPress');
      let item = eventList[e[0]][0][e[1]][0];

      intervals.push(createInterval(item, pressPlayer));
    }

    if(alarmPlayer && events.length > 0 && _.flatten(events).includes('SinotticoAlarm')) {
      let e = _.find(events, e => e[0] === 'SinotticoAlarm');
      let item = eventList[e[0]][0][e[1]][0];

      intervals.push(createInterval(item, alarmPlayer));
    }

    if(statusPlayer && events.length > 0 && _.flatten(events).includes('SinotticoStatus')) {
      let e = _.find(events, e => e[0] === 'SinotticoStatus');
      let item = eventList[e[0]][0][e[1]][0];

      intervals.push(createInterval(item, statusPlayer));
    }

    if(reqPlayer && events.length > 0 && _.flatten(events).includes('SinotticoReq')) {
      let e = _.find(events, e => e[0] === 'SinotticoReq');
      let item = eventList[e[0]][0][e[1]][0];

      intervals.push(createInterval(item, reqPlayer));
    }

    if(reqTPlayer && events.length > 0 && _.flatten(events).includes('SinotticoReqT')) {
      let e = _.find(events, e => e[0] === 'SinotticoReqT');
      let item = eventList[e[0]][0][e[1]][0];

      intervals.push(createInterval(item, reqTPlayer));
    }

    return () => {
      _.forEach(intervals, i => (typeof i === 'number') ? clearInterval(i) : null)
    };
  }, [JSON.stringify(events)]);
  // alarmPlayer, epPlayer, mainsPlayer, modePlayer, motorPlayer, pressPlayer, reqPlayer, reqTPlayer, statusPlayer,

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
