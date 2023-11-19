// SeizureApp.tsx
import React from 'react';
import Timer from "./timer";
import './heart.css';
const Textbox: React.FC = () => {
    const predefinedText = "Heart attack:\n" +
        "1. **Call 911** \n" +
        "    -If a person suddenly experiences chest pressure or tightness that radiates to his/her jaw or either arm, shortness of breath, nausea and vomiting with no explanation.\n" +
        "\n" +
        "2. **Stay Calm:**\n" +
        "   - Try to remain as calm as possible. Stress can exacerbate the situation.\n" +
        "\n" +
        "3. **Chew Aspirin:**\n" +
        "   - If the person having the heart attack is not allergic to aspirin, and if it's available, you can suggest they chew one adult aspirin (325 mg) or four low-dose aspirin (81 mg each). Aspirin can help thin the blood and improve blood flow to the heart.\n" +
        "\n" +
        "4. **Rest and Keep Comfortable:**\n" +
        "   - Have the person sit down and rest in a comfortable position. Loosen any tight clothing to make breathing easier.\n" +
        "\n" +
        "5. **Monitor Vital Signs:**\n" +
        "   - Keep an eye on the person's vital signs, such as breathing and consciousness. If they lose consciousness and do not have a pulse, be prepared to perform CPR (Cardiopulmonary Resuscitation) if you are trained to do so.\n" +
        "\n" +
        "6. **Stay with the Person:**\n" +
        "   - Do not leave the person alone unless you are seeking emergency assistance.\n" +
        "\n" +
        "7. **Be Prepared to Perform CPR:**\n" +
        "   - If the person becomes unconscious and stops breathing, you may need to perform CPR if you are trained to do so. If you are not trained, the emergency services dispatcher can provide instructions over the phone until help arrives.\n" +
        "\n";

    return (
        <div className="textbox">
            <textarea readOnly value={predefinedText} rows={40} cols={100} />
        </div>
    );
};

const HeartApp: React.FC = () => {
    return (
        <div className="heart-app">
            <header>
                <h1>Heart Attack</h1>
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

export default HeartApp;
