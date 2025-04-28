import {createLoop, createLoopFn} from "../functions/manageLoop";

export const cem_139_eventList = {
  "SinotticoAnomaly": [{
    "ANOM_NO": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "ANOM_AMBER": [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }],
    "ANOM_RED": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
    "ANOM_AMBERRED": [{
      fn: (p) => p.seekTo(4000).pause(),
      loop: false
    }]
  }, 'e03iONd5UfW1'],
  "SinotticoClutch": [{
    "CLUTCH_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "CLUTCH_ON": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
    "CLUTCH_ABS": [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }]
  }, 'exAoULm4ThJ1'],
  "SinotticoECU": [{
    "ECU_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "ECU_OK": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "ECU_AMBER": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
    "ECU_RED": [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }],
    "ECU_AMBERRED": [{
      fn: (p) => p.seekTo(4000).pause(),
      loop: false
    }],
  }, 'eMIQwzAlJC01'],
  "SinotticoEngine": [{
    "ENGINE_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "ENGINE_ON": [{
      fn: createLoopFn(2000, 3000),
      loop: true
    }],
    "ENGINE_COOLING": [{
     fn: createLoopFn(4000, 5000),
      loop: true
    }],
    "ENGINE_WARMING": [{
      fn: createLoopFn(6000, 7000),
      loop: true
    }]
  }, 'et4JpGRIify1'],
  "SinotticoEngineProt": [{
    "ENGINEPROT_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "ENGINEPROT_ON": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }]
  }, 'eA36RJzextp1'],
  "SinotticoGenerator": [{
    "GENERATOR_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "GENERATOR_ON": [{
      fn: createLoopFn(2000, 3000),
      loop: true
    }],
    "GENERATOR_OK": [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }],
    "GENERATOR_WARNING": [{
      fn: (p) => p.seekTo(5000).pause(),
      loop: false
    }],
    "GENERATOR_EXCL": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }]
  }, 'egpRS4wC1PL1'],
  "SinotticoMode": [{
    "MODE_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "MODE_MAN": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
    "MODE_AUT": [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }]
  }, 'eYHoAl7DTJd1'],
  "SinotticoPowerOut": [{
    "POWEROUT_OFF": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
    "POWEROUT_ON": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "POWEROUT_ABS": [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }],
    "POWEROUT_EXCL": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }]
  }, 'e3QDNpqECFe1'],
  "SinotticoPump": [{
    "PUMP_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "PUMP_ON": [{
      fn: createLoopFn(2000, 4000),
      loop: true
    }]
  }, 'eQRXoy7Zzfv1'],
  "SinotticoPumpProt": [{
    "PUMPPROT_OFF": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "PUMPPROT_ON": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "PUMPPROT_EXCL": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }]
  }, 'e3RBhsteZJF1'],
  "SinotticoReq": [{
    "REQ_NO": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "REQ_START": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "REQ_STOP": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }]
  }, 'eucP2YWaDpv1'],
  "SinotticoReqT": [{
    "REQT_NO": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }],
    "REQT_KEY": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "REQT_INCALL": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
    "REQT_TIMER": [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }],
    "REQT_REMOTE": [{
      fn: (p) => p.seekTo(4000).pause(),
      loop: false
    }]
  }, 'exbg5vhnFQ81'],
}
