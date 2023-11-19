import React, {useEffect} from "react";
import {SinotticoReq as SinotticoReqCeaSmart} from './variants/cea_smart/SinotticoReq';
import {SinotticoReq as SinotticoReqCSmart} from './variants/c_smart/SinotticoReq';

export default function SinotticoReq({sinotticoName}) {
  switch (sinotticoName) {
    case 'cea_smart':
      return (<SinotticoReqCeaSmart />);

    case 'c_smart':
      return (<SinotticoReqCSmart />);
  }
}
