import React from 'react';
import "./assets/css/style.css";
import _ from "lodash";
import CeaSmart from "./CeaSmart";
import CSmart from "./CSmart";
import Cem139 from "./Cem139";
import {stopLoop} from "./functions/manageLoop";
import Cam335 from "./Cam335";
import Cam130_10 from "./Cam130_10";

export function processPlayerEvent(player, eventName, intv, intervals, eventList, events) {
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
        // 🧼 Ferma eventuali loop attivi PRIMA di creare il nuovo
        stopLoop(player);

        _.forEach(intervals, i => {
          let eventName = i[0].split('-')[0];
          if (typeof i[1] === 'number' && eventName === e[0]) clearInterval(i[1]);
        });

        intv.push([label, item['fn'](player)]);
      }
    }
  }
}

export const getSinotticoPartialId = (eventList, name) => eventList?.[name]?.[1] || "__null__"

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

  switch (sinotticoName) {
    case 'cea_smart':
      return (<CeaSmart events={events} sinotticoName={sinotticoName} />);

    case 'c_smart':
      return (<CSmart events={events} sinotticoName={sinotticoName} />);

    case 'cem_139':
      return (<Cem139 events={events} sinotticoName={sinotticoName} />);

    case 'cam_405':
    case 'cam_335':
      return (<Cam335 events={events} sinotticoName={sinotticoName} />);

    case 'cam_130_10':
      return (<Cam130_10 events={events} sinotticoName={sinotticoName} />);
  }
}
