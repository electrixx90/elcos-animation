import React from "react";
import {SinotticoAlarm as SinotticoAlarmCeaSmart} from './variants/cea_smart/SinotticoAlarm';
import {SinotticoAlarm as SinotticoAlarmCSmart} from './variants/c_smart/SinotticoAlarm';

export default function SinotticoAlarm({sinotticoName}) {
  switch (sinotticoName) {
    case 'cea_smart':
      return (<SinotticoAlarmCeaSmart />);

    case 'c_smart':
      return (<SinotticoAlarmCSmart />);
  }
}
