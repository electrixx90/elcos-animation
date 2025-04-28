import {createLoopFn, createPlayOnceFn} from "../functions/manageLoop";

export const c_smart_eventList = {
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
  }, 'csmart-sinotticomode'],
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
  }, 'eIeUQ9qTDz81'],
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
  }, 'ecvuhK35n8k1'],
  'SinotticoStatus': [{
    'ANOM_NO': [{
      fn: (p) => p.seekTo(500).pause(),
      loop: false
    }],
    'ANOM_YES': [{
      fn: createLoopFn(1000, 3000),
      loop: true
    }]
  }, 'csmart-sinotticostatus'],
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
  }, 'eoFCxPg7VvY1'],
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
  }, 'e9hYoJp2ki81'],

  "SinotticoTraliccio": [{
    "TRALICCIO_NO": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "TRALICCIO_YES": [{
      fn: createPlayOnceFn(1000, 2000),
      loop: false
    }]
  }, 'emtlx07PHQe1'],
  "SinotticoReteA": [{
    "CBRETE_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "CBRETE_OK": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "CBRETE_UNPL": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
  }, 'e8N2hvEBqJC1'],
  "SinotticoReteB": [{
    "CBRETE_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "CBRETE_OK": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "CBRETE_UNPL": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
  }, 'etMIAGY9pkw1'],
  "SinotticoCBA": [{
    "CB_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "CB_PRESS": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "CB_ANOM": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
  }, 'et9XRBjpHsM1'],
  "SinotticoCBB": [{
    "CB_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "CB_PRESS": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "CB_ANOM": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
  }, 'egBFsakRNuL1'],
  "SinotticoBattA": [{
    "BATT_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "BATT_PRESS": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "BATT_ANOM": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
  }, 'eHPMziIT73B1'],
  "SinotticoBattB": [{
    "BATT_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "BATT_PRESS": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "BATT_ANOM": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
  }, 'elpv7KT3ASR1'],
  "SinotticoEngine": [{
    "ENGINE_ON": [{
      fn: createLoopFn(3000, 5000),
      loop: true
    }],
    "ENGINE_OFF": [{
      fn: createPlayOnceFn(0, 1000),
      loop: false
    }],
  }, 'eKOpLcJ86uG1'],
  "SinotticoEngineProt": [{
    "ENGINEPROT_ON": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "ENGINEPROT_OFF": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
  }, 'eMPUc60ars41']
}
