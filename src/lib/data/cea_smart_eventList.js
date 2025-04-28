import {createLoopFn, createPlayOnceFn} from "../functions/manageLoop";

export const cea_smart_eventList = {
  'SinotticoMode': [{
    'MODE_OFF': [{
      fn: (p) => p.seekTo(1500).pause(),
      loop: false
    }],
    'MODE_MAN': [{
      fn: (p) => p.seekTo(2500).pause(),
      loop: false
    }],
    'MODE_AUT': [{
      fn: (p) => p.seekTo(3500).pause(),
      loop: false
    }],
    'MODE_AUT_ESC': [{
      fn: (p) => p.seekTo(4500).pause(),
      loop: false
    }],
    'MODE_AUT_INC': [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }]
  }, 'elcos-sinotticomode'],
  'SinotticoMains': [{
    'MAINS_ABS': [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false,
    }],
    'MAINS_PRES': [{
      fn: createPlayOnceFn(0, 2000),
      loop: false,
    }],
    'MAINS_ANOM': [{
      fn: (p) => p.seekTo(5000).play(),
      loop: true,
    }],
    'MAINS_WAIT': [{
      fn: (p) => p.seekTo(2000).play(),
      loop: true,
    }]
  }, 'elcos-sinotticomains'],
  'SinotticoMotor': [{
    'MOTOR_OFF': [{
      fn: createPlayOnceFn(0, 1000),
      loop: false
    }],
    'MOTOR_ON': [{
      fn: (p) => p.seekTo(3000).play(),
      loop: true
    }]
  }, 'elcos-sinotticomotor_update'],
  'SinotticoEP': [{
    'EP_OFF': [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    'EP_ON': [{
      fn: (p) => p.seekTo(2000).play(),
      loop: true
    }]
  }, 'elcos-sinotticoep-update'],
  'SinotticoPress': [{
    'PRESS_EXCL': [{
      fn: createPlayOnceFn(1000, 2000),
      loop: false
    }],
    'PRESS_YES': [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    'PRESS_NO': [{
      fn: createPlayOnceFn(3000, 6000),
      loop: false
    }]
  }, 'elcos-sinotticopress'],
  'SinotticoAlarm': [{
    'ALARM_NO': [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    'ALARM_Y_B': [{
      fn: createPlayOnceFn(2000, 4400),
      loop: false
    }],
    'ALARM_Y_A': [{
      fn: createPlayOnceFn(5000, 7400),
      loop: false
    }]
  }, 'elcos-sinotticoalarm'],
  'SinotticoStatus': [{
    'ANOM_NO': [{
      fn: (p) => p.seekTo(500).pause(),
      loop: false
    }],
    'ANOM_YES': [{
      fn: createLoopFn(1000, 2800),
      loop: true
    }]
  }, 'elcos-sinotticostatus'],
  'SinotticoReq': [{
    'REQ_NO': [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    'REQ_START': [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }],
    'REQ_STOP': [{
      fn: (p) => p.seekTo(7000).pause(),
      loop: false
    }]
  }, 'elcos-sinotticoreq_update'],
  'SinotticoReqT': [{
    'REQT_NO': [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    'REQT_PRESS': [{
      fn: (p) => p.seekTo(500).pause(),
      loop: false
    }],
    'REQT_GALL': [{
      fn: (p) => p.seekTo(5000).pause(),
      loop: false
    }],
    'REQT_TEST': [{
      fn: createLoopFn(2000, 3000),
      loop: true
    }],
    'REQT_TP': [{
      fn: (p) => p.seekTo(6000).pause(),
      loop: false
    }],
    'REQT_IN': [{
      fn: createLoopFn(7000, 8000),
      loop: true
    }],
    'REQT_KEY': [{
      fn: (p) => p.seekTo(11600).pause(),
      loop: false
    }],
  }, 'elcos-sinotticoreqt_update']
}
