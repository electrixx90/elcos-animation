import React, {useEffect} from "react";
import {SinotticoStatus as SinotticoStatusCeaSmart} from './variants/cea_smart/SinotticoStatus';
import {SinotticoStatus as SinotticoStatusCSmart} from './variants/c_smart/SinotticoStatus';

export default function SinotticoStatus({sinotticoName}) {
  switch (sinotticoName) {
    case 'cea_smart':
      return (<SinotticoStatusCeaSmart />);

    case 'c_smart':
      return (<SinotticoStatusCSmart />);
  }
}
