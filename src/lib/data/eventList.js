export const eventList = {
  'SinotticoMode': [{
    'MODE_OFF': [{
      fn: (p) => p.seekTo(1500).pause(),
      duration: 2000,
      loop: false
    }],
    'MODE_MAN': [{
      fn: (p) => p.seekTo(2500).pause(),
      duration: 2000,
      loop: false
    }],
    'MODE_AUT': [{
      fn: (p) => p.seekTo(3500).pause(),
      duration: 2000,
      loop: false
    }],
    'MODE_AUT_ESC': [{
      fn: (p) => p.seekTo(4500).pause(),
      duration: 2000,
      loop: false
    }],
    'MODE_AUT_INC': [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": 'elcos-sinotticomode',
    "c_smart": "csmart-sinotticomode"
  }],
  'SinotticoMains': [{
    'MAINS_ABS': [{
      fn: (p) => p.seekTo(0).pause(),
      duration: 2000,
      loop: false,
    }],
    'MAINS_PRES': [{
      fn: (p) => {
        p.seekTo(0).play();
        return setTimeout(() => p.pause(), 2000);
      },
      duration: null,
      loop: false,
    }],
    'MAINS_ANOM': [{
      fn: (p) => p.seekTo(5000).play(),
      duration: 2000,
      loop: true,
    }],
    'MAINS_WAIT': [{
      fn: (p) => p.seekTo(2000).play(),
      duration: 2000,
      loop: true,
    }]
  }, {
    "cea_smart": 'elcos-sinotticomains',
    "c_smart": ""
  }],
  'SinotticoMotor': [{
    'MOTOR_OFF': [{
      fn: (p) => {
        p.seekTo(0).play();
        return setTimeout(() => p.pause(), 1000);
      },
      duration: null,
      loop: false
    }],
    'MOTOR_ON': [{
      fn: (p) => p.seekTo(3000).play(),
      duration: 2000,
      loop: true
    }]
  }, {
    "cea_smart": 'elcos-sinotticomotor_update',
    "c_smart": ""
  }],
  'SinotticoEP': [{
    'EP_OFF': [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    'EP_ON': [{
      fn: (p) => p.seekTo(2000).play(),
      duration: 2000,
      loop: true
    }]
  }, {
    "cea_smart": 'elcos-sinotticoep-update',
    "c_smart": ""
  }],
  'SinotticoPress': [{
    'PRESS_EXCL': [{
      fn: (p) => {
        p.seekTo(1000).play();
        return setTimeout(() => p.pause(), 1000);
      },
      duration: null,
      loop: false
    }],
    'PRESS_YES': [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    'PRESS_NO': [{
      fn: (p) => {
        p.seekTo(3000).play();
        return setTimeout(() => p.pause(), 3000);
      },
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": 'elcos-sinotticopress',
    "c_smart": "eIeUQ9qTDz81"
  }],
  'SinotticoAlarm': [{
    'ALARM_NO': [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    'ALARM_Y_B': [{
      fn: (p) => {
        p.seekTo(2000).play();
        return setTimeout(() => p.pause(), 2400);
      },
      duration: null,
      loop: false
    }],
    'ALARM_Y_A': [{
      fn: (p) => {
        p.seekTo(5000).play();
        return setTimeout(() => p.pause(), 2400);
      },
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": 'elcos-sinotticoalarm',
    "c_smart": "ecvuhK35n8k1"
  }],
  'SinotticoStatus': [{
    'ANOM_NO': [{
      fn: (p) => p.seekTo(500).pause(),
      duration: null,
      loop: false
    }],
    'ANOM_YES': [{
      fn: (p) => p.seekTo(1000).play(),
      duration: 2000,
      loop: true
    }]
  }, {
    "cea_smart": 'elcos-sinotticostatus',
    "c_smart": "csmart-sinotticostatus"
  }],
  'SinotticoReq': [{
    'REQ_NO': [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    'REQ_START': [{
      fn: (p) => p.seekTo(3000).pause(),
      duration: null,
      loop: false
    }],
    'REQ_STOP': [{
      fn: (p) => p.seekTo(7000).pause(),
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": 'elcos-sinotticoreq_update',
    "c_smart": "eoFCxPg7VvY1"
  }],
  'SinotticoReqT': [{
    'REQT_NO': [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    'REQT_PRESS': [{
      fn: (p) => p.seekTo(500).pause(),
      duration: null,
      loop: false
    }],
    'REQT_GALL': [{
      fn: (p) => p.seekTo(5000).pause(),
      duration: null,
      loop: false
    }],
    'REQT_TEST': [{
      fn: (p) => p.seekTo(2000).play(),
      duration: 1000,
      loop: true
    }],
    'REQT_TP': [{
      fn: (p) => p.seekTo(6000).pause(),
      duration: null,
      loop: false
    }],
    'REQT_IN': [{
      fn: (p) => p.seekTo(7000).play(),
      duration: 1000,
      loop: true
    }],
    'REQT_KEY': [{
      fn: (p) => p.seekTo(11600).pause(),
      duration: null,
      loop: false
    }],
  }, {
    "cea_smart": 'elcos-sinotticoreqt_update',
    "c_smart": "e9hYoJp2ki81"
  }],

  "SinotticoTraliccio": [{
    "TRALICCIO_NO": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "TRALICCIO_YES": [{
      fn: (p) => {
        p.seekTo(1000).play();
        return setTimeout(() => p.pause(), 1000);
      },
      duration: null,
      loop: false
    }]
  }, {
    "cea_smart": "",
    "c_smart": 'emtlx07PHQe1'
  }],
  "SinotticoReteA": [{
    "CBRETE_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "CBRETE_OK": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "CBRETE_UNPL": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
  }, {
    "cea_smart": "",
    "c_smart": 'e8N2hvEBqJC1'
  }],
  "SinotticoReteB": [{
    "CBRETE_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "CBRETE_OK": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "CBRETE_UNPL": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
  }, {
    "cea_smart": "",
    "c_smart": 'etMIAGY9pkw1'
  }],
  "SinotticoCBA": [{
    "CB_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "CB_PRESS": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "CB_ANOM": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
  }, {
    "cea_smart": "",
    "c_smart": 'et9XRBjpHsM1'
  }],
  "SinotticoCBB": [{
    "CB_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "CB_PRESS": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "CB_ANOM": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
  }, {
    "cea_smart": "",
    "c_smart": 'egBFsakRNuL1'
  }],
  "SinotticoBattA": [{
    "BATT_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "MODE_PRESS": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "MODE_ANOM": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
  }, {
    "cea_smart": "",
    "c_smart": 'eHPMziIT73B1'
  }],
  "SinotticoBattB": [{
    "BATT_ABS": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
    "MODE_PRESS": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "MODE_ANOM": [{
      fn: (p) => p.seekTo(2000).pause(),
      duration: null,
      loop: false
    }],
  }, {
    "cea_smart": "",
    "c_smart": 'elpv7KT3ASR1'
  }],
  "SinotticoEngine": [{
    "ENGINE_ON": [{
      fn: (p) => p.seekTo(3000).play(),
      duration: 2000,
      loop: true
    }],
    "ENGINE_OFF": [{
      fn: (p) => {
        p.seekTo(0).play();
        return setTimeout(() => p.pause(), 1000);
      },
      duration: null,
      loop: false
    }],
  }, {
    "cea_smart": "",
    "c_smart": 'eKOpLcJ86uG1'
  }],
  "SinotticoEngineProt": [{
    "ENGINEPROT_ON": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "ENGINEPROT_OFF": [{
      fn: (p) => p.seekTo(0).pause(),
      duration: null,
      loop: false
    }],
  }, {
    "cea_smart": "",
    "c_smart": 'eMPUc60ars41'
  }],


  "SinotticoCEMAnomaly": [{
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
  "SinotticoCEMClutch": [{
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
    "cem_139": "eRZtdo9jQzs1"
  }],
  "SinotticoCEMEcu": [{
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
  "SinotticoCEMEngine": [{
    "ENGINE_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "ENGINE_ON": [{
      fn: (p) => p.seekTo(2000).play(),
      duration: 1000,
      loop: true
    }],
    "ENGINE_COOLING": [{
     fn: (p) => p.seekTo(4000).play(),
      duration: 1000,
      loop: true
    }],
    "ENGINE_WARMING": [{
      fn: (p) => p.seekTo(6000).play(),
      duration: 1000,
      loop: true
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "et4JpGRIify1"
  }],
  "SinotticoCEMEngineProt": [{
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
  "SinotticoCEMGenerator": [{
    "GENERATOR_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "GENERATOR_ON": [{
      fn: (p) => p.seekTo(2000).play(),
      duration: 1000,
      loop: true
    }],
    "GENERATOR_OK": [{
      fn: (p) => p.seekTo(2000).pause(),
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
  "SinotticoCEMMode": [{
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
  "SinotticoCEMPowerOut": [{
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
  "SinotticoCEMPump": [{
    "PUMP_OFF": [{
      fn: (p) => p.seekTo(1000).pause(),
      duration: null,
      loop: false
    }],
    "PUMP_ON": [{
      fn: (p) => p.seekTo(2000).play(),
      duration: 2000,
      loop: true
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "eQRXoy7Zzfv1"
  }],
  "SinotticoCEMPumpProt": [{
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
  "SinotticoCEMReq": [{
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
  "SinotticoCEMReqT": [{
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
    }]
  }, {
    "cea_smart": "",
    "c_smart": "",
    "cem_139": "exbg5vhnFQ81"
  }],
}
