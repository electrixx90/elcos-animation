import React, {useRef, useState} from 'react';
import ElcosAnimation from "./lib/ElcosAnimation";
import './index.css';
import _ from 'lodash';

export default function TestButtons() {
    const [events, setEvents] = useState([]);

    const selectSinotticoMode = useRef(null);
    const selectSinotticoMains = useRef(null);
    const selectSinotticoMotor = useRef(null);
    const selectSinotticoEP = useRef(null);
    const selectSinotticoPress = useRef(null);
    const selectSinotticoAlarm = useRef(null);
    const selectSinotticoStatus = useRef(null);
    const selectSinotticoReq = useRef(null);
    const selectSinotticoReqT = useRef(null);
    
    const manageEvents = (origin, value) => {
        var value = value.split(',');

        let es = [...events];

        _.remove(es, e => e[0] === origin);

        if(value[0] !== '') {
            es.push(value);
        }

        console.log(es);
        setEvents(es);
    }

    return (
      <>
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
              </div>

              <div className="test-buttons">
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
              <div className="test-animation">
                  <ElcosAnimation events={events} />
              </div>
          </div>
      </>
    );
}