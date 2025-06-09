import {createLoop, createLoopFn, createPlayOnceFn} from "../functions/manageLoop";

export const cam_335_eventList = {
  'SinotticoMode': [{
    'MODE_OFF': [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    'MODE_MAN': [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }],
    'MODE_AUT': [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }],
    'MODE_TEST': [{
      fn: (p) => p.seekTo(4900).pause(),
      loop: false
    }]
  }, 'eDL5MqhGx3U1'],
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
  }, 'eyaIcbtSvp11'],
  "SinotticoGenerator": [{
    "GENERATOR_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "GENERATOR_ON": [{
      fn: createLoopFn(2000, 4000),
      loop: true
    }],
    "GENERATOR_OK": [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false
    }],
    "GENERATOR_WARNING": [{
      fn: (p) => p.seekTo(5000).pause(),
      loop: false
    }]
  }, 'e2T3Zkyd5PW1'],
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
      loop: true,
    }]
  }, 'ewsvbUcm2tl1'],
  'SinotticoMains': [{
    'MAINS_ABS': [{
      fn: (p) => p.seekTo(3000).pause(),
      loop: false,
    }],
    'MAINS_PRES': [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false,
    }],
    'MAINS_ANOM': [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false,
    }],
    'MAINS_WAIT': [{
      fn: createLoopFn(4000, 6000),
      loop: true,
    }]
  }, 'eDiVEysBNcG1'],
  'SinotticoContatMains': [{
    'CONTATMAINS_OFF': [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    'CONTATMAINS_ON': [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }]
  }, 'eBE9Xndfs8b1'],
  'SinotticoContatGen': [{
    "CONTATGEN_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "CONTATGEN_ON": [{
      fn: (p) => p.seekTo(0).pause(),
      loop: false
    }]
  }, 'eczh82GrSKu1'],
  "SinotticoEngineProt": [{
    "ENGINEPROT_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      loop: false
    }],
    "ENGINEPROT_ON": [{
      fn: (p) => p.seekTo(2000).pause(),
      loop: false
    }]
  }, 'eRw5AiVzOpD1'],
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
  }, 'eLXgGlVZS361'],
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
  }, 'ef8JGYuK1dO1'],
}
