import React from 'react';
import Timer from "./timer";
import './asthma.css';

// Simple Textbox component with predefined text
const Textbox: React.FC = () => {
    const predefinedText = "Asthma:\n" +
        "\n" +
        "1. **Stay Calm:**\n" +
        "   - Try to remain calm, as stress and anxiety can worsen the situation.\n" +
        "\n" +
        "2. **Assist the Person in Taking Their Medication:**\n" +
        "   - Help the person take their prescribed quick-relief inhaler (usually a bronchodilator such as albuterol). Use a spacer device if available.\n" +
        "\n" +
        "3. **Encourage Slow, Deep Breaths:**\n" +
        "   - Encourage the person to take slow, deep breaths to help them relax and assist with the medication's effectiveness.\n" +
        "\n" +
        "4. **Call for Emergency Medical Assistance:**\n" +
        "   - If the person's symptoms do not improve within a few minutes or if they are having difficulty breathing, call for emergency medical assistance (911 or the appropriate emergency number in your country).\n" +
        "\n" +
        "5. **Continue Medication Use:**\n" +
        "   - If the person has a second dose of their quick-relief inhaler and symptoms persist, they can take another dose after waiting a few minutes.\n" +
        "\n" +
        "6. **Help the Person Find a Comfortable Position:**\n" +
        "   - Assist the person in finding a comfortable sitting position. Leaning forward slightly may make breathing easier.\n" +
        "\n" +
        "7. **Loosen Tight Clothing:**\n" +
        "   - If clothing is tight, especially around the neck, loosen it to make breathing easier.\n" +
        "\n" +
        "8. **Monitor the Person:**\n" +
        "   - Keep a close eye on the person's condition. If they become unconscious or stop breathing, be prepared to administer CPR if you are trained to do so.\n" +
        "\n" +
        "9. **Provide Reassurance:**\n" +
        "   - Offer reassurance and keep the person as calm as possible.\n" +
        "\n" +
        "10. **Identify Triggers and Remove Them:**\n" +
        "    - Help the person identify and, if possible, remove triggers that may have contributed to the asthma attack (e.g., exposure to allergens, smoke).\n";

    return (
        <div className="textbox">
            <textarea readOnly value={predefinedText} rows={55} cols={100} />
        </div>
    );
};

const AsthmaApp: React.FC = () => {
    return (
        <div className="asthma-app">
            <header>
                <h1>Asthma</h1>
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

export default AsthmaApp;
