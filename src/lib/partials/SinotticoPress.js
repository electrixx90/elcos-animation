import React, {useEffect} from "react";
import {SinotticoPress as SinotticoPressCeaSmart} from './variants/cea_smart/SinotticoPress';
import {SinotticoPress as SinotticoPressCSmart} from './variants/c_smart/SinotticoPress';

export default function SinotticoPress({sinotticoName}) {
  switch (sinotticoName) {
    case 'cea_smart':
      return (<SinotticoPressCeaSmart />);

    case 'c_smart':
      return (<SinotticoPressCSmart />);
  }
}
