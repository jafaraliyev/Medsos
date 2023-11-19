import React from 'react';
import Timer from "./timer";
import './choke.css';

// Simple Textbox component with predefined text
const Textbox: React.FC = () => {
    const predefinedText = "Choke:\n" +
        "\n" +
        "1. **Assess the Severity:**\n" +
        "   - Determine the severity of the situation. If the person is coughing forcefully, encourage them to continue coughing to try and clear the obstruction on their own. If the person is unable to cough, speak, or breathe, immediate action is needed.\n" +
        "\n" +
        "2. **Encourage Coughing:**\n" +
        "   - If the person is able to cough, encourage them to do so. Coughing is a natural reflex that may help dislodge the object.\n" +
        "\n" +
        "3. **Perform the Heimlich Maneuver (Abdominal Thrusts):**\n" +
        "   - If the person is unable to cough, speak, or breathe, and you are trained to do so, perform the Heimlich maneuver (abdominal thrusts):\n" +
        "      - Stand behind the person and place your arms around their waist.\n" +
        "      - Make a fist with one hand and place the thumb side against the middle of the person's abdomen, just above the navel.\n" +
        "      - Grasp your fist with your other hand.\n" +
        "      - Give quick, upward thrusts into the person's abdomen until the object is expelled.\n" +
        "\n" +
        "4. **Call for Emergency Help:**\n" +
        "   - If the person continues to choke or loses consciousness, call for emergency medical assistance immediately (911 or the appropriate emergency number in your country).\n" +
        "\n" +
        "5. **Perform CPR (if necessary):**\n" +
        "   - If the person becomes unconscious and is not breathing, start CPR if you are trained to do so. Chest compressions may help dislodge the obstruction.\n" +
        "\n" +
        "6. **Continue Assistance Until Help Arrives:**\n" +
        "   - Keep providing assistance until emergency medical help arrives. If the person loses consciousness, be prepared to administer CPR.\n";

    return (
        <div className="textbox">
            <textarea readOnly value={predefinedText} rows={50} cols={100} />
        </div>
    );
};

const ChokeApp: React.FC = () => {
    return (
        <div className="choke-app">
            <header>
                <h1>Choke</h1>
            </header>
            <div className="content-container">
                <div className="left-content">
                    <Textbox />
                </div>
                <div className="right-content">
                    {/* Timer Component */}
                    <Timer />
                    {/* Big Call 911 Button */}
                    <button className="call-911-button">Call 911</button>
                </div>
            </div>
        </div>
    );
};

export default ChokeApp;
