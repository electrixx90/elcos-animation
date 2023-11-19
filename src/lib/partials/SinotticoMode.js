import React, {useEffect} from "react";
import {SinotticoMode as SinotticoModeCeaSmart} from './variants/cea_smart/SinotticoMode';
import {SinotticoMode as SinotticoModeCSmart} from './variants/c_smart/SinotticoMode';


export default function SinotticoMode({sinotticoName}) {
  switch (sinotticoName) {
    case 'cea_smart':
      return (<SinotticoModeCeaSmart />);

    case 'c_smart':
      return (<SinotticoModeCSmart />);
  }
}
