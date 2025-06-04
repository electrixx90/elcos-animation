import React, {useEffect, useRef, useState} from 'react';
import ElcosAnimation from "./lib/ElcosAnimation";
import './index.css';
import _ from 'lodash';

export default function TestButtons() {
    const [events, setEvents] = useState([]);
    const [waitingEvents, setWaitingEvents] = useState([]);
    const [sinotticoName, setSinotticoName] = useState("cea_smart");

    const selectSinotticoName = useRef(null);

    const selectSinotticoMode = useRef(null);
    const selectSinotticoMains = useRef(null);
    const selectSinotticoMotor = useRef(null);
    const selectSinotticoEP = useRef(null);
    const selectSinotticoPress = useRef(null);
    const selectSinotticoAlarm = useRef(null);
    const selectSinotticoStatus = useRef(null);
    const selectSinotticoReq = useRef(null);
    const selectSinotticoReqT = useRef(null);
    const selectSinotticoTraliccio = useRef(null);
    const selectSinotticoReteA = useRef(null);
    const selectSinotticoReteB = useRef(null);
    const selectSinotticoCBA = useRef(null);
    const selectSinotticoCBB = useRef(null);
    const selectSinotticoBattA = useRef(null);
    const selectSinotticoBattB = useRef(null);
    const selectSinotticoEngine = useRef(null);
    const selectSinotticoEngineProt = useRef(null);

    const selectSinotticoCEMAnomaly = useRef(null);
    const selectSinotticoCEMClutch = useRef(null);
    const selectSinotticoCEMEcu = useRef(null);
    const selectSinotticoCEMEngine = useRef(null);
    const selectSinotticoCEMEngineProt = useRef(null);
    const selectSinotticoCEMGenerator = useRef(null);
    const selectSinotticoCEMMode = useRef(null);
    const selectSinotticoCEMPowerOut = useRef(null);
    const selectSinotticoCEMPump = useRef(null);
    const selectSinotticoCEMPumpProt = useRef(null);
    const selectSinotticoCEMReq = useRef(null);
    const selectSinotticoCEMReqT = useRef(null);

    const selectSinotticoCAM335Mode = useRef(null);
    const selectSinotticoCAM335Anomaly = useRef(null);
    const selectSinotticoCAM335Generator = useRef(null);
    const selectSinotticoCAM335Engine = useRef(null);
    const selectSinotticoCAM335Mains = useRef(null);
    const selectSinotticoCAM335ContatMains = useRef(null);
    const selectSinotticoCAM335ContatGen = useRef(null);
    const selectSinotticoCAM335EngineProt = useRef(null);
    const selectSinotticoCAM335ECU = useRef(null);
    const selectSinotticoCAM335Req = useRef(null);

    
    const manageEvents = (origin, value) => {
        var value = value.split(',');

        let es = [...waitingEvents];

        _.remove(es, e => e[0] === origin);

        if(value[0] !== '' && value[0] !== null) {
            es.push(value);
        }

        setWaitingEvents(es);
    }

    useEffect(() => {
        setEvents([]);
        selectSinotticoMode.current.value = null;
        selectSinotticoMains.current.value = null;
        selectSinotticoMotor.current.value = null;
        selectSinotticoEP.current.value = null;
        selectSinotticoPress.current.value = null;
        selectSinotticoAlarm.current.value = null;
        selectSinotticoStatus.current.value = null;
        selectSinotticoReq.current.value = null;
        selectSinotticoReqT.current.value = null;
        selectSinotticoTraliccio.current.value = null;
        selectSinotticoReteA.current.value = null;
        selectSinotticoReteB.current.value = null;
        selectSinotticoCBA.current.value = null;
        selectSinotticoCBB.current.value = null;
        selectSinotticoBattA.current.value = null;
        selectSinotticoBattB.current.value = null;
        selectSinotticoEngine.current.value = null;
        selectSinotticoEngineProt.current.value = null;
        selectSinotticoCEMAnomaly.current.value = null;
        selectSinotticoCEMClutch.current.value = null;
        selectSinotticoCEMEcu.current.value = null;
        selectSinotticoCEMEngine.current.value = null;
        selectSinotticoCEMEngineProt.current.value = null;
        selectSinotticoCEMGenerator.current.value = null;
        selectSinotticoCEMMode.current.value = null;
        selectSinotticoCEMPowerOut.current.value = null;
        selectSinotticoCEMPump.current.value = null;
        selectSinotticoCEMPumpProt.current.value = null;
        selectSinotticoCEMReq.current.value = null;
        selectSinotticoCEMReqT.current.value = null;
    }, [sinotticoName]);

    return (
      <>
          <div className="sinottico-name-container">
              <p>TIPOLOGIA SINOTTICO</p>
              <select ref={selectSinotticoName} onChange={(e) => setSinotticoName(e.currentTarget.value)}>
                  <option defaultChecked={true} value="cea_smart">CEA-SMART</option>
                  <option value="c_smart">C-SMART</option>
                  <option value="cem_139">CEM 139</option>
                  <option value="cam_335">CAM 335</option>
              </select>
          </div>

          <div className="separator"></div>

          <div className="test-container">
              <div className={`test-buttons ${(['cem_139', 'cam_335'].includes(sinotticoName)) ? "d-none" : null}`}>
                  <p>SinotticoMode</p>
                  <select ref={selectSinotticoMode}
                          onChange={(e) => manageEvents("SinotticoMode", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoMode,MODE_OFF">
                          MODE_OFF
                      </option>
                      <option value="SinotticoMode,MODE_MAN">
                          MODE_MAN
                      </option>
                      <option value="SinotticoMode,MODE_AUT">
                          MODE_AUT
                      </option>
                      <option value="SinotticoMode,MODE_AUT_ESC">
                          MODE_AUT_ESC
                      </option>
                      <option value="SinotticoMode,MODE_AUT_INC">
                          MODE_AUT_INC
                      </option>
                  </select>

                  <p>SinotticoAlarm</p>
                  <select ref={selectSinotticoAlarm}
                          onChange={(e) => manageEvents("SinotticoAlarm", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoAlarm,ALARM_NO">
                          ALARM_NO
                      </option>
                      <option value="SinotticoAlarm,ALARM_Y_B">
                          ALARM_Y_B
                      </option>
                      <option value="SinotticoAlarm,ALARM_Y_A">
                          ALARM_Y_A
                      </option>
                  </select>

                  <p>SinotticoStatus</p>
                  <select ref={selectSinotticoStatus}
                          onChange={(e) => manageEvents("SinotticoStatus", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoStatus,ANOM_NO">
                          ANOM_NO
                      </option>
                      <option value="SinotticoStatus,ANOM_YES">
                          ANOM_YES
                      </option>
                  </select>

                  <p>SinotticoPress</p>
                  <select ref={selectSinotticoPress}
                          onChange={(e) => manageEvents("SinotticoPress", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoPress,PRESS_EXCL">
                          PRESS_EXCL
                      </option>
                      <option value="SinotticoPress,PRESS_YES">
                          PRESS_YES
                      </option>
                      <option value="SinotticoPress,PRESS_NO">
                          PRESS_NO
                      </option>
                  </select>

                  <p>SinotticoReq</p>
                  <select ref={selectSinotticoReq}
                          onChange={(e) => manageEvents("SinotticoReq", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoReq,REQ_NO">
                          REQ_NO
                      </option>
                      <option value="SinotticoReq,REQ_START">
                          REQ_START
                      </option>
                      <option value="SinotticoReq,REQ_STOP">
                          REQ_STOP
                      </option>
                  </select>

                  <p>SinotticoReqT</p>
                  <select ref={selectSinotticoReqT}
                          onChange={(e) => manageEvents("SinotticoReqT", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoReqT,REQT_NO">
                          REQT_NO
                      </option>
                      <option value="SinotticoReqT,REQT_PRESS">
                          REQT_PRESS
                      </option>
                      <option value="SinotticoReqT,REQT_GALL">
                          REQT_GALL
                      </option>
                      <option value="SinotticoReqT,REQT_TEST">
                          REQT_TEST
                      </option>
                      <option value="SinotticoReqT,REQT_TP">
                          REQT_TP
                      </option>
                      <option value="SinotticoReqT,REQT_IN">
                          REQT_IN
                      </option>
                      <option value="SinotticoReqT,REQT_KEY">
                          REQT_KEY
                      </option>
                  </select>

                  <div className="send-data-button-container">
                      <button onClick={(e) => setEvents(waitingEvents)}>INVIA DATI</button>
                  </div>
              </div>

              <div className={`test-buttons ${(sinotticoName !== 'cea_smart') ? "d-none" : null}`}>
                  <p>SinotticoMains</p>
                  <select ref={selectSinotticoMains}
                          onChange={(e) => manageEvents("SinotticoMains", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoMains,MAINS_ABS">
                          MAINS_ABS
                      </option>
                      <option value="SinotticoMains,MAINS_PRES">
                          MAINS_PRES
                      </option>
                      <option value="SinotticoMains,MAINS_ANOM">
                          MAINS_ANOM
                      </option>
                      <option value="SinotticoMains,MAINS_WAIT">
                          MAINS_WAIT
                      </option>
                  </select>

                  <p>SinotticoMotor</p>
                  <select ref={selectSinotticoMotor}
                          onChange={(e) => manageEvents("SinotticoMotor", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoMotor,MOTOR_OFF">
                          MOTOR_OFF
                      </option>
                      <option value="SinotticoMotor,MOTOR_ON">
                          MOTOR_ON
                      </option>
                  </select>

                  <p>SinotticoEP</p>
                  <select ref={selectSinotticoEP} onChange={(e) => manageEvents("SinotticoEP", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoEP,EP_OFF">
                          EP_OFF
                      </option>
                      <option value="SinotticoEP,EP_ON">
                          EP_ON
                      </option>
                  </select>
              </div>

              <div className={`test-buttons ${(sinotticoName !== 'c_smart') ? "d-none" : null}`}>
                  <p>SinotticoBattA</p>
                  <select ref={selectSinotticoBattA}
                          onChange={e => manageEvents("SinotticoBattA", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoBattA,BATT_ABS">BATT_ABS</option>
                      <option value="SinotticoBattA,BATT_PRESS">MODE_PRESS</option>
                      <option value="SinotticoBattA,BATT_ANOM">MODE_ANOM</option>
                  </select>

                  <p>SinotticoBattB</p>
                  <select ref={selectSinotticoBattB}
                          onChange={e => manageEvents("SinotticoBattB", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoBattB,BATT_ABS">BATT_ABS</option>
                      <option value="SinotticoBattB,BATT_PRESS">MODE_PRESS</option>
                      <option value="SinotticoBattB,BATT_ANOM">MODE_ANOM</option>
                  </select>

                  <p>SinotticoCBA</p>
                  <select ref={selectSinotticoCBA} onChange={e => manageEvents("SinotticoCBA", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoCBA,CB_ABS">CB_ABS</option>
                      <option value="SinotticoCBA,CB_PRESS">CB_PRESS</option>
                      <option value="SinotticoCBA,CB_ANOM">CB_ANOM</option>
                  </select>

                  <p>SinotticoCBB</p>
                  <select ref={selectSinotticoCBB} onChange={e => manageEvents("SinotticoCBB", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoCBB,CB_ABS">CB_ABS</option>
                      <option value="SinotticoCBB,CB_PRESS">CB_PRESS</option>
                      <option value="SinotticoCBB,CB_ANOM">CB_ANOM</option>
                  </select>

                  <p>SinotticoEngineProt</p>
                  <select ref={selectSinotticoEngineProt}
                          onChange={e => manageEvents("SinotticoEngineProt", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoEngineProt,ENGINEPROT_ON">ENGINEPROT_ON</option>
                      <option value="SinotticoEngineProt,ENGINEPROT_OFF">ENGINEPROT_OFF</option>
                  </select>

                  <p>SinotticoEngine</p>
                  <select ref={selectSinotticoEngine}
                          onChange={e => manageEvents("SinotticoEngine", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoEngine,ENGINE_ON">ENGINE_ON</option>
                      <option value="SinotticoEngine,ENGINE_OFF">ENGINE_OFF</option>
                  </select>

                  <p>SinotticoReteA</p>
                  <select ref={selectSinotticoReteA}
                          onChange={e => manageEvents("SinotticoReteA", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoReteA,CBRETE_ABS">CBRETE_ABS</option>
                      <option value="SinotticoReteA,CBRETE_OK">CBRETE_OK</option>
                      <option value="SinotticoReteA,CBRETE_UNPL">CBRETE_UNPL</option>
                  </select>

                  <p>SinotticoReteB</p>
                  <select ref={selectSinotticoReteB}
                          onChange={e => manageEvents("SinotticoReteB", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoReteB,CBRETE_ABS">CBRETE_ABS</option>
                      <option value="SinotticoReteB,CBRETE_OK">CBRETE_OK</option>
                      <option value="SinotticoReteB,CBRETE_UNPL">CBRETE_UNPL</option>
                  </select>

                  <p>SinotticoTraliccio</p>
                  <select ref={selectSinotticoTraliccio}
                          onChange={e => manageEvents("SinotticoTraliccio", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoTraliccio,TRALICCIO_NO">TRALICCIO_NO</option>
                      <option value="SinotticoTraliccio,TRALICCIO_YES">TRALICCIO_YES</option>
                  </select>
              </div>

              <div className={`test-buttons ${(sinotticoName !== 'cem_139') ? "d-none" : null}`}>
                  <p>SinotticoAnomaly</p>
                  <select ref={selectSinotticoCEMAnomaly}
                          onChange={e => manageEvents("SinotticoAnomaly", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoAnomaly,ANOM_NO">ANOM_NO</option>
                      <option value="SinotticoAnomaly,ANOM_AMBER">ANOM_AMBER</option>
                      <option value="SinotticoAnomaly,ANOM_RED">ANOM_RED</option>
                      <option value="SinotticoAnomaly,ANOM_AMBERRED">ANOM_AMBERRED</option>
                  </select>

                  <p>SinotticoClutch</p>
                  <select ref={selectSinotticoCEMClutch}
                          onChange={e => manageEvents("SinotticoClutch", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoClutch,CLUTCH_OFF">CLUTCH_OFF</option>
                      <option value="SinotticoClutch,CLUTCH_ON">CLUTCH_ON</option>
                      <option value="SinotticoClutch,CLUTCH_ABS">CLUTCH_ABS</option>
                  </select>

                  <p>SinotticoEcu</p>
                  <select ref={selectSinotticoCEMEcu}
                          onChange={e => manageEvents("SinotticoECU", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoECU,ECU_ABS">ECU_ABS</option>
                      <option value="SinotticoECU,ECU_OK">ECU_OK</option>
                      <option value="SinotticoECU,ECU_AMBER">ECU_AMBER</option>
                      <option value="SinotticoECU,ECU_RED">ECU_RED</option>
                      <option value="SinotticoECU,ECU_AMBERRED">ECU_AMBERRED</option>
                  </select>

                  <p>SinotticoEngine</p>
                  <select ref={selectSinotticoCEMEngine}
                          onChange={e => manageEvents("SinotticoEngine", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoEngine,ENGINE_OFF">ENGINE_OFF</option>
                      <option value="SinotticoEngine,ENGINE_ON">ENGINE_ON</option>
                      <option value="SinotticoEngine,ENGINE_COOLING">ENGINE_COOLING</option>
                      <option value="SinotticoEngine,ENGINE_WARMING">ENGINE_WARMING</option>
                  </select>

                  <p>SinotticoEngineProt</p>
                  <select ref={selectSinotticoCEMEngineProt}
                          onChange={e => manageEvents("SinotticoEngineProt", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoEngineProt,ENGINEPROT_OFF">ENGINEPROT_OFF</option>
                      <option value="SinotticoEngineProt,ENGINEPROT_ON">ENGINEPROT_ON</option>
                  </select>

                  <p>SinotticoGenerator</p>
                  <select ref={selectSinotticoCEMGenerator}
                          onChange={e => manageEvents("SinotticoGenerator", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoGenerator,GENERATOR_OFF">GENERATOR_OFF</option>
                      <option value="SinotticoGenerator,GENERATOR_ON">GENERATOR_ON</option>
                      <option value="SinotticoGenerator,GENERATOR_OK">GENERATOR_OK</option>
                      <option value="SinotticoGenerator,GENERATOR_WARNING">GENERATOR_WARNING</option>
                      <option value="SinotticoGenerator,GENERATOR_EXCL">GENERATOR_EXCL</option>
                  </select>

                  <p>SinotticoMode</p>
                  <select ref={selectSinotticoCEMMode}
                          onChange={e => manageEvents("SinotticoMode", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoMode,MODE_OFF">MODE_OFF</option>
                      <option value="SinotticoMode,MODE_MAN">MODE_MAN</option>
                      <option value="SinotticoMode,MODE_AUT">MODE_AUT</option>
                  </select>

                  <p>SinotticoPowerOut</p>
                  <select ref={selectSinotticoCEMPowerOut}
                          onChange={e => manageEvents("SinotticoPowerOut", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoPowerOut,POWEROUT_OFF">POWEROUT_OFF</option>
                      <option value="SinotticoPowerOut,POWEROUT_ON">POWEROUT_ON</option>
                      <option value="SinotticoPowerOut,POWEROUT_ABS">POWEROUT_ABS</option>
                      <option value="SinotticoPowerOut,POWEROUT_EXCL">POWEROUT_EXCL</option>
                  </select>

                  <p>SinotticoPump</p>
                  <select ref={selectSinotticoCEMPump}
                          onChange={e => manageEvents("SinotticoPump", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoPump,PUMP_OFF">PUMP_OFF</option>
                      <option value="SinotticoPump,PUMP_ON">PUMP_ON</option>
                  </select>

                  <p>SinotticoPumpProt</p>
                  <select ref={selectSinotticoCEMPumpProt}
                          onChange={e => manageEvents("SinotticoPumpProt", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoPumpProt,PUMPPROT_OFF">PUMPPROT_OFF</option>
                      <option value="SinotticoPumpProt,PUMPPROT_ON">PUMPPROT_ON</option>
                      <option value="SinotticoPumpProt,PUMPPROT_EXCL">PUMPPROT_EXCL</option>
                  </select>

                  <p>SinotticoReq</p>
                  <select ref={selectSinotticoCEMReq}
                          onChange={e => manageEvents("SinotticoReq", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoReq,REQ_NO">REQ_NO</option>
                      <option value="SinotticoReq,REQ_START">REQ_START</option>
                      <option value="SinotticoReq,REQ_STOP">REQ_STOP</option>
                  </select>

                  <p>SinotticoReqT</p>
                  <select ref={selectSinotticoCEMReqT}
                          onChange={e => manageEvents("SinotticoReqT", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoReqT,REQT_NO">REQT_NO</option>
                      <option value="SinotticoReqT,REQT_KEY">REQT_KEY</option>
                      <option value="SinotticoReqT,REQT_INCALL">REQT_INCALL</option>
                      <option value="SinotticoReqT,REQT_TIMER">REQT_TIMER</option>
                      <option value="SinotticoReqT,REQT_REMOTE">REQT_REMOTE</option>
                  </select>

                  <div className="send-data-button-container">
                      <button onClick={(e) => setEvents(waitingEvents)}>INVIA DATI</button>
                  </div>
              </div>

              <div className={`test-buttons ${(sinotticoName !== 'cam_335') ? "d-none" : null}`}>
                  <p>SinotticoMode</p>
                  <select ref={selectSinotticoCAM335Mode}
                          onChange={e => manageEvents("SinotticoMode", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoMode,MODE_OFF">MODE_OFF</option>
                      <option value="SinotticoMode,MODE_MAN">MODE_MAN</option>
                      <option value="SinotticoMode,MODE_AUT">MODE_AUT</option>
                      <option value="SinotticoMode,MODE_TEST">MODE_TEST</option>
                  </select>

                  <p>SinotticoAnomaly</p>
                  <select ref={selectSinotticoCAM335Anomaly}
                          onChange={e => manageEvents("SinotticoAnomaly", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoAnomaly,ANOM_NO">ANOM_NO</option>
                      <option value="SinotticoAnomaly,ANOM_AMBER">ANOM_AMBER</option>
                      <option value="SinotticoAnomaly,ANOM_RED">ANOM_RED</option>
                      <option value="SinotticoAnomaly,ANOM_AMBERRED">ANOM_AMBERRED</option>
                  </select>

                  <p>SinotticoGenerator</p>
                  <select ref={selectSinotticoCAM335Generator}
                          onChange={e => manageEvents("SinotticoGenerator", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoGenerator,GENERATOR_OFF">GENERATOR_OFF</option>
                      <option value="SinotticoGenerator,GENERATOR_ON">GENERATOR_ON</option>
                      <option value="SinotticoGenerator,GENERATOR_OK">GENERATOR_OK</option>
                      <option value="SinotticoGenerator,GENERATOR_WARNING">GENERATOR_WARNING</option>
                  </select>

                  <p>SinotticoEngine</p>
                  <select ref={selectSinotticoCAM335Engine}
                          onChange={e => manageEvents("SinotticoEngine", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoEngine,ENGINE_OFF">ENGINE_OFF</option>
                      <option value="SinotticoEngine,ENGINE_ON">ENGINE_ON</option>
                      <option value="SinotticoEngine,ENGINE_COOLING">ENGINE_COOLING</option>
                      <option value="SinotticoEngine,ENGINE_WARMING">ENGINE_WARMING</option>
                  </select>

                  <p>SinotticoMains</p>
                  <select ref={selectSinotticoCAM335Mains}
                          onChange={e => manageEvents("SinotticoMains", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoMains,MAINS_ABS">MAINS_ABS</option>
                      <option value="SinotticoMains,MAINS_PRES">MAINS_PRES</option>
                      <option value="SinotticoMains,MAINS_ANOM">MAINS_ANOM</option>
                      <option value="SinotticoMains,MAINS_WAIT">MAINS_WAIT</option>
                  </select>

                  <p>SinotticoContatMains</p>
                  <select ref={selectSinotticoCAM335ContatMains}
                          onChange={e => manageEvents("SinotticoContatMains", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoContatMains,CONTATMAINS_OFF">CONTATMAINS_OFF</option>
                      <option value="SinotticoContatMains,CONTATMAINS_ON">CONTATMAINS_ON</option>
                  </select>

                  <p>SinotticoContatGen</p>
                  <select ref={selectSinotticoCAM335ContatGen}
                          onChange={e => manageEvents("SinotticoContatGen", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoContatGen,CONTATGEN_OFF">CONTATGEN_OFF</option>
                      <option value="SinotticoContatGen,CONTATGEN_ON">CONTATGEN_ON</option>
                  </select>

                  <p>SinotticoEngineProt</p>
                  <select ref={selectSinotticoCAM335EngineProt}
                          onChange={e => manageEvents("SinotticoEngineProt", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoEngineProt,ENGINEPROT_OFF">ENGINEPROT_OFF</option>
                      <option value="SinotticoEngineProt,ENGINEPROT_ON">ENGINEPROT_ON</option>
                  </select>

                  <p>SinotticoEcu</p>
                  <select ref={selectSinotticoCEMEcu}
                          onChange={e => manageEvents("SinotticoECU", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoECU,ECU_ABS">ECU_ABS</option>
                      <option value="SinotticoECU,ECU_OK">ECU_OK</option>
                      <option value="SinotticoECU,ECU_AMBER">ECU_AMBER</option>
                      <option value="SinotticoECU,ECU_RED">ECU_RED</option>
                      <option value="SinotticoECU,ECU_AMBERRED">ECU_AMBERRED</option>
                  </select>

                  <p>SinotticoReq</p>
                  <select ref={selectSinotticoCAM335Req}
                          onChange={e => manageEvents("SinotticoReq", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoReq,REQ_NO">REQ_NO</option>
                      <option value="SinotticoReq,REQ_START">REQ_START</option>
                      <option value="SinotticoReq,REQ_STOP">REQ_STOP</option>
                  </select>

                  <div className="send-data-button-container">
                      <button onClick={(e) => setEvents(waitingEvents)}>INVIA DATI</button>
                  </div>
              </div>

              <div className="test-animation">
                  <ElcosAnimation events={events} sinotticoName={sinotticoName}/>
              </div>
          </div>
      </>
    );
}
