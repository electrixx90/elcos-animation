import React, {useEffect, useRef, useState} from 'react';
import ElcosAnimation from "./lib/ElcosAnimation";
import './index.css';
import _ from 'lodash';

export default function TestButtons() {
    const [events, setEvents] = useState([]);
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
    
    const manageEvents = (origin, value) => {
        var value = value.split(',');

        let es = [...events];

        _.remove(es, e => e[0] === origin);

        if(value[0] !== '') {
            es.push(value);
        }

        setEvents(es);
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
    }, [sinotticoName]);

    return (
      <>
          <div className="sinottico-name-container">
              <p>TIPOLOGIA SINOTTICO</p>
              <select ref={selectSinotticoName} onChange={(e) => setSinotticoName(e.currentTarget.value)}>
                  <option defaultChecked={true} value="cea_smart">CEA-SMART</option>
                  <option value="c_smart">C-SMART</option>
              </select>
          </div>

          <div className="separator"></div>

          <div className="test-container">
              <div className="test-buttons">
                  <p>SinotticoMode</p>
                  <select ref={selectSinotticoMode} onChange={(e) => manageEvents("SinotticoMode", e.currentTarget.value)}>
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
                  <select ref={selectSinotticoAlarm} onChange={(e) => manageEvents("SinotticoAlarm", e.currentTarget.value)}>
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
                  <select ref={selectSinotticoStatus} onChange={(e) => manageEvents("SinotticoStatus", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoStatus,ANOM_NO">
                          ANOM_NO
                      </option>
                      <option value="SinotticoStatus,ANOM_YES">
                          ANOM_YES
                      </option>
                  </select>

                  <p>SinotticoPress</p>
                  <select ref={selectSinotticoPress} onChange={(e) => manageEvents("SinotticoPress", e.currentTarget.value)}>
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
                  <select ref={selectSinotticoReq} onChange={(e) => manageEvents("SinotticoReq", e.currentTarget.value)}>
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
                  <select ref={selectSinotticoReqT} onChange={(e) => manageEvents("SinotticoReqT", e.currentTarget.value)}>
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
              </div>

              <div className={`test-buttons ${(sinotticoName !== 'cea_smart') ? "d-none" : null}`}>
                  <p>SinotticoMains</p>
                  <select ref={selectSinotticoMains} onChange={(e) => manageEvents("SinotticoMains", e.currentTarget.value)}>
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
                  <select ref={selectSinotticoMotor} onChange={(e) => manageEvents("SinotticoMotor", e.currentTarget.value)}>
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
                  <select ref={selectSinotticoBattA} onChange={e => manageEvents("SinotticoBattA", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoBattA,BATT_ABS">BATT_ABS</option>
                      <option value="SinotticoBattA,MODE_PRESS">MODE_PRESS</option>
                      <option value="SinotticoBattA,MODE_ANOM">MODE_ANOM</option>
                  </select>

                  <p>SinotticoBattB</p>
                  <select ref={selectSinotticoBattB} onChange={e => manageEvents("SinotticoBattB", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoBattB,BATT_ABS">BATT_ABS</option>
                      <option value="SinotticoBattB,MODE_PRESS">MODE_PRESS</option>
                      <option value="SinotticoBattB,MODE_ANOM">MODE_ANOM</option>
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
                  <select ref={selectSinotticoEngineProt} onChange={e => manageEvents("SinotticoEngineProt", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoEngineProt,ENGINEPROT_ON">ENGINEPROT_ON</option>
                      <option value="SinotticoEngineProt,ENGINEPROT_OFF">ENGINEPROT_OFF</option>
                  </select>

                  <p>SinotticoEngine</p>
                  <select ref={selectSinotticoEngine} onChange={e => manageEvents("SinotticoEngine", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoEngine,ENGINE_ON">ENGINE_ON</option>
                      <option value="SinotticoEngine,ENGINE_OFF">ENGINE_OFF</option>
                  </select>

                  <p>SinotticoReteA</p>
                  <select ref={selectSinotticoReteA} onChange={e => manageEvents("SinotticoReteA", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoReteA,CBRETE_ABS">CBRETE_ABS</option>
                      <option value="SinotticoReteA,CBRETE_OK">CBRETE_OK</option>
                      <option value="SinotticoReteA,CBRETE_UNPL">CBRETE_UNPL</option>
                  </select>

                  <p>SinotticoReteB</p>
                  <select ref={selectSinotticoReteB} onChange={e => manageEvents("SinotticoReteB", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoReteB,CBRETE_ABS">CBRETE_ABS</option>
                      <option value="SinotticoReteB,CBRETE_OK">CBRETE_OK</option>
                      <option value="SinotticoReteB,CBRETE_UNPL">CBRETE_UNPL</option>
                  </select>

                  <p>SinotticoTraliccio</p>
                  <select ref={selectSinotticoTraliccio} onChange={e => manageEvents("SinotticoTraliccio", e.currentTarget.value)}>
                      <option value={null}></option>
                      <option value="SinotticoTraliccio,TRALICCIO_NO">TRALICCIO_NO</option>
                      <option value="SinotticoTraliccio,TRALICCIO_YES">TRALICCIO_YES</option>
                  </select>
              </div>

              <div className="test-animation">
                  <ElcosAnimation events={events} sinotticoName={sinotticoName} />
              </div>
          </div>
      </>
    );
}
