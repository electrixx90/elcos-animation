import React, {useEffect, useState} from 'react';
import Animation from "./Animation";


export default function ElcosAnimation({varName = '', valueName = ''}) {
  const [p, setP] = useState(null);

  const events = {
    'SinotticoMode': [{
      'MODE_OFF': [{
          fn: (p) => p.seekTo(6000).play().set('speed', 0.5),
          duration: 2000
      }],
      'MODE_MAN': [{
        fn: (p) => p.seekTo(7000).play().set('speed', 0.5),
        duration: 2000
      }],
      'MODE_AUT': [{
        fn: (p) => p.seekTo(8000).play().set('speed', 0.5),
        duration: 2000
      }],
      'MODE_AUT_ESC': [{
        fn: (p) => p.seekTo(9000).play().set('speed', 0.5),
        duration: 2000
      }],
      'MODE_AUT_INC': [{
        fn: (p) => p.seekTo(10000).play().set('speed', 0.5),
        duration: 2000
      }]
    }],
    'SinotticoMains': [{
      'MAINS_ABS': [{
        fn: (p) => p.seekTo(10500).play(),
        duration: 2000
      }],
      'MAINS_PRES': [{
        fn: (p) => p.seekTo(13000).play(),
        duration: 1200
      }],
      'MAINS_ANOM': [{
        fn: (p) => p.seekTo(15000).play(),
        duration: 1500
      }],
      'MAINS_WAIT': [{
        fn: (p) => p.seekTo(17000).play(),
        duration: 1200
      }]
    }],
    'SinotticoMotor': [{
      'MOTOR_OFF': [{
        fn: (p) => p.seekTo(19000).play(),
        duration: 1000
      }],
      'MOTOR_ON': [{
        fn: (p) => p.seekTo(22000).play(),
        duration: 2000
      }]
    }],
    'SinotticoEP': [{
      'EP_OFF': [{
        fn: (p) => p.seekTo(25000).play(),
        duration: 1000
      }],
      'EP_ON': [{
        fn: (p) => p.seekTo(28000).play(),
        duration: 1600
      }]
    }],
    'SinotticoPress': [{
      'PRESS_EXCL': [{
        fn: (p) => p.seekTo(31000).play(),
        duration: 1000
      }],
      'PRESS_YES': [{
        fn: (p) => p.seekTo(33000).play(),
        duration: 1000
      }],
      'PRESS_NO': [{
        fn: (p) => p.seekTo(35000).play(),
        duration: 1000
      }]
    }],
    'SinotticoAlarm': [{
      'ALARM_NO': [{
        fn: (p) => p.seekTo(37000).play(),
        duration: 1000
      }],
      'ALARM_Y_B': [{
        fn: (p) => p.seekTo(38000).play(),
        duration: 2600
      }],
      'ALARM_Y_A': [{
        fn: (p) => p.seekTo(41000).play(),
        duration: 2600
      }]
    }],
    'SinotticoStatus': [{
      'ANOM_NO': [{
        fn: (p) => p.seekTo(45000).play(),
        duration: 2000
      }],
      'ANOM_YES': [{
        fn: (p) => p.seekTo(48000).play(),
        duration: 2000
      }]
    }],
    'SinotticoReq': [{
      'REQ_NO': [{
        fn: (p) => p.seekTo(51000).play(),
        duration: 1000
      }],
      'REQ_START': [{
        fn: (p) => p.seekTo(53000).play(),
        duration: 2000
      }],
      'REQ_STOP': [{
        fn: (p) => p.seekTo(57000).play(),
        duration: 2000
      }]
    }],
    'SinotticoReqT': [{
      'REQT_PRESS': [{
        fn: (p) => p.seekTo(60000).play(),
        duration: 1000
      }],
      'REQT_GALL': [{
        fn: (p) => p.seekTo(65000).play(),
        duration: 500
      }],
      'REQT_TEST': [{
        fn: (p) => p.seekTo(62000).play(),
        duration: 2000
      }],
      'REQT_TP': [{
        fn: (p) => p.seekTo(66000).play(),
        duration: 500
      }],
      'REQT_IN': [{
        fn: (p) => p.seekTo(67000).play(),
        duration: 1000
      }],
      'REQT_KEY': [{
        fn: (p) => p.seekTo(69000).play(),
        duration: 1000
      }],
    }]
  }

  useEffect(() => {
    const element = document.getElementsByTagName('svg')[0];
    if(element) {
      element.svgatorPlayer.stop();
      setP(element.svgatorPlayer);
    }
  }, []);

  useEffect(() => {
    if(p && varName && valueName) {
      const interval = setInterval(() => {
        events[varName][0][valueName][0]['fn'](p);
      }, events[varName][0][valueName][0]['duration']);
      return () => {
        clearInterval(interval);
      };
    }
  }, [p, varName, valueName]);

  return (
    <Animation />
  )
}
