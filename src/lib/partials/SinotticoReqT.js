import React, {useEffect} from "react";
import {SinotticoReqT as SinotticoReqTCeaSmart} from './variants/cea_smart/SinotticoReqT';
import {SinotticoReqT as SinotticoReqTCSmart} from './variants/c_smart/SinotticoReqT';

export default function SinotticoReqT({sinotticoName}) {
  switch (sinotticoName) {
    case 'cea_smart':
      return (<SinotticoReqTCeaSmart />);

    case 'c_smart':
      return (<SinotticoReqTCSmart />);
  }
}
