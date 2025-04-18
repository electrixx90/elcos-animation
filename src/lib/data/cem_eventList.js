import {createLoop, createLoopFn} from "../functions/createLoop";

export const cem_eventList = {
  "SinotticoAnomaly": [{
    "ANOM_NO": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "ANOM_AMBER": [{
      fn: (p) => p.seekTo(3000).pause(),
      duration: null,
      loop: false
    }],
    "ANOM_RED": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
    "ANOM_AMBERRED": [{
      fn: (p) => p.seekTo(4000).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "e03iONd5UfW1"
  }],
  "SinotticoClutch": [{
    "CLUTCH_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "CLUTCH_ON": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
    "CLUTCH_ABS": [{
      fn: (p) => p.seekTo(3000).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "exAoULm4ThJ1"
  }],
  "SinotticoEcu": [{
    "ECU_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "ECU_OK": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "ECU_AMBER": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
    "ECU_RED": [{
      fn: (p) => p.seekTo(3000).pause(),
      duration: null,
      loop: false
    }],
    "ECU_AMBERRED": [{
      fn: (p) => p.seekTo(4000).pause(),
      duration: null,
      loop: false
    }],

  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "eMIQwzAlJC01"
  }],
  "SinotticoEngine": [{
    "ENGINE_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "ENGINE_ON": [{
      fn: createLoopFn(2000, 3000),
      duration: 1000,
      loop: true
    }],
    "ENGINE_COOLING": [{
     fn: createLoopFn(4000, 5000),
      duration: 1000,
      loop: true
    }],
    "ENGINE_WARMING": [{
      fn: createLoopFn(6000, 7000),
      duration: 1000,
      loop: true
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "et4JpGRIify1"
  }],
  "SinotticoEngineProt": [{
    "ENGINEPROT_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "ENGINEPROT_ON": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "eA36RJzextp1"
  }],
  "SinotticoGenerator": [{
    "GENERATOR_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "GENERATOR_ON": [{
      fn: createLoopFn(2000, 3000),
      duration: 1000,
      loop: true
    }],
    "GENERATOR_OK": [{
      fn: (p) => p.seekTo(3000).pause(),
      duration: null,
      loop: false
    }],
    "GENERATOR_WARNING": [{
      fn: (p) => p.seekTo(5000).pause(),
      duration: null,
      loop: false
    }],
    "GENERATOR_EXCL": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "egpRS4wC1PL1"
  }],
  "SinotticoMode": [{
    "MODE_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "MODE_MAN": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
    "MODE_AUT": [{
      fn: (p) => p.seekTo(3000).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "eYHoAl7DTJd1"
  }],
  "SinotticoPowerOut": [{
    "POWEROUT_OFF": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
    "POWEROUT_ON": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "POWEROUT_ABS": [{
      fn: (p) => p.seekTo(3000).pause(),
      duration: null,
      loop: false
    }],
    "POWEROUT_EXCL": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "e3QDNpqECFe1"
  }],
  "SinotticoPump": [{
    "PUMP_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "PUMP_ON": [{
      fn: createLoopFn(2000, 4000),
      duration: 2000,
      loop: true
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "eQRXoy7Zzfv1"
  }],
  "SinotticoPumpProt": [{
    "PUMPPROT_OFF": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "PUMPPROT_ON": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "PUMPPROT_EXCL": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "e3RBhsteZJF1"
  }],
  "SinotticoReq": [{
    "REQ_NO": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "REQ_START": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "REQ_STOP": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "eucP2YWaDpv1"
  }],
  "SinotticoReqT": [{
    "REQT_NO": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "REQT_KEY": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "REQT_INCALL": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
    "REQT_TIMER": [{
      fn: (p) => p.seekTo(3000).pause(),
      duration: null,
      loop: false
    }],
    "REQT_REMOTE": [{
      fn: (p) => p.seekTo(4000).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "exbg5vhnFQ81"
  }],
}
