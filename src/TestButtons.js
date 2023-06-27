import React, {useState} from 'react';
import ElcosAnimation from "./lib/ElcosAnimation";
import './index.css';

export default function TestButtons() {
    const [varName, setVarName] = useState("");
    const [valueName, setValueName] = useState("");

    return (
      <>
          <div className="test-container">
              <div className="test-buttons">
                  <p>SinotticoMode</p>
                  <button type="button" onClick={() => {
                     setVarName("SinotticoMode");
                     setValueName("MODE_OFF");
                  }}>MODE_OFF</button>
                  <button type="button" onClick={() => {
                     setVarName("SinotticoMode");
                     setValueName("MODE_MAN");
                  }}>MODE_MAN</button>
                  <button type="button" onClick={() => {
                     setVarName("SinotticoMode");
                     setValueName("MODE_AUT");
                  }}>MODE_AUT</button>
                  <button type="button" onClick={() => {
                     setVarName("SinotticoMode");
                     setValueName("MODE_AUT_ESC");
                  }}>MODE_AUT_ESC</button>
                  <button type="button" onClick={() => {
                     setVarName("SinotticoMode");
                     setValueName("MODE_AUT_INC");
                  }}>MODE_AUT_INC</button>

                  <p>SinotticoMains</p>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoMains");
                      setValueName("MAINS_ABS");
                  }}>MAINS_ABS</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoMains");
                      setValueName("MAINS_PRES");
                  }}>MAINS_PRES</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoMains");
                      setValueName("MAINS_ANOM");
                  }}>MAINS_ANOM</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoMains");
                      setValueName("MAINS_WAIT");
                  }}>MAINS_WAIT</button>

                  <p>SinotticoMotor</p>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoMotor");
                      setValueName("MOTOR_OFF");
                  }}>MOTOR_OFF</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoMotor");
                      setValueName("MOTOR_ON");
                  }}>MOTOR_ON</button>

                  <p>SinotticoEP</p>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoEP");
                      setValueName("EP_OFF");
                  }}>EP_OFF</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoEP");
                      setValueName("EP_ON");
                  }}>EP_ON</button>

                  <p>SinotticoPress</p>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoEP");
                      setValueName("EP_OFF");
                  }}>EP_OFF</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoEP");
                      setValueName("EP_ON");
                  }}>EP_ON</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoEP");
                      setValueName("EP_ON");
                  }}>EP_ON</button>
              </div>

              <div className="test-buttons">
                  <p>SinotticoAlarm</p>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoAlarm");
                      setValueName("ALARM_NO");
                  }}>ALARM_NO</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoAlarm");
                      setValueName("ALARM_Y_B");
                  }}>ALARM_Y_B</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoAlarm");
                      setValueName("ALARM_Y_A");
                  }}>ALARM_Y_A</button>

                  <p>SinotticoStatus</p>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoStatus");
                      setValueName("ANOM_NO");
                  }}>ANOM_NO</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoStatus");
                      setValueName("ANOM_YES");
                  }}>ANOM_YES</button>

                  <p>SinotticoReq</p>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoReq");
                      setValueName("REQ_NO");
                  }}>REQ_NO</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoReq");
                      setValueName("REQ_START");
                  }}>REQ_START</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoReq");
                      setValueName("REQ_STOP");
                  }}>REQ_STOP</button>

                  <p>SinotticoReqT</p>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoReqT");
                      setValueName("REQT_PRESS");
                  }}>REQT_PRESS</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoReqT");
                      setValueName("REQT_GALL");
                  }}>REQT_GALL</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoReqT");
                      setValueName("REQT_TEST");
                  }}>REQT_TEST</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoReqT");
                      setValueName("REQT_TP");
                  }}>REQT_TP</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoReqT");
                      setValueName("REQT_IN");
                  }}>REQT_IN</button>
                  <button type="button" onClick={() => {
                      setVarName("SinotticoReqT");
                      setValueName("REQT_KEY");
                  }}>REQT_KEY</button>

              </div>
              <div className="test-animation">
                  <ElcosAnimation varName={varName} valueName={valueName} />
              </div>
          </div>
      </>
    );
}