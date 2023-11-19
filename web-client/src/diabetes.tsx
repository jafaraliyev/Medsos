
import React from 'react';
import Timer from "./timer";
import './diabetes.css';

// Simple Textbox component with predefined text
const Textbox: React.FC = () => {
    const predefinedText = "Diabetes:\n" +
        "\n" +
        "### Hypoglycemia (Low Blood Sugar):\n" +
        "\n" +
        "1. **Recognize the Symptoms:**\n" +
        "   - Symptoms of hypoglycemia can include shakiness, sweating, confusion, irritability, dizziness, and weakness.\n" +
        "\n" +
        "2. **Provide Quick-Acting Carbohydrates:**\n" +
        "   - Give the person a fast-acting source of carbohydrates, such as fruit juice, regular soda (not diet), glucose gel, or glucose tablets.\n" +
        "   - Avoid foods that are high in fat, as they can slow the absorption of glucose.\n" +
        "\n" +
        "3. **Wait and Recheck:**\n" +
        "   - Wait 15 minutes and then recheck the person's blood sugar levels. If they haven't improved, repeat the process.\n" +
        "\n" +
        "4. **If Unconscious:**\n" +
        "   - If the person is unconscious or having a seizure due to low blood sugar, call for emergency medical assistance (911 or the appropriate emergency number in your country).\n" +
        "   - Do not give an unconscious person anything by mouth.\n" +
        "\n" +
        "### Hyperglycemia (High Blood Sugar):\n" +
        "\n" +
        "1. **Recognize the Symptoms:**\n" +
        "   - Symptoms of hyperglycemia can include excessive thirst, frequent urination, fatigue, and confusion.\n" +
        "\n" +
        "2. **Encourage Fluid Intake:**\n" +
        "   - Have the person drink plenty of water to help flush out excess glucose. Avoid sugary drinks.\n" +
        "\n" +
        "3. **Monitor Blood Sugar:**\n" +
        "   - If the person has a blood glucose monitor, help them check their blood sugar levels.\n" +
        "\n" +
        "4. **Contact Healthcare Provider:**\n" +
        "   - Encourage the person to contact their healthcare provider for guidance on adjusting their insulin or medication dosage.\n" +
        "\n" +
        "5. **Seek Medical Help if Necessary:**\n" +
        "   - If the person's blood sugar levels remain very high and they have symptoms like confusion or difficulty breathing, seek emergency medical assistance.\n" +
        "\n" +
        "### General Tips:\n" +
        "\n" +
        "- **Stay Calm:**\n" +
        "  - Keep the person calm and reassure them.\n" +
        "\n" +
        "- **Emergency Contacts:**\n" +
        "  - Know the person's emergency contacts and inform them of the situation.\n" +
        "\n" +
        "- **Medical ID:**\n" +
        "  - If the person has a medical ID bracelet or necklace indicating their diabetes, check for information on their condition.\n";

    return (
        <div className="textbox">
            <textarea readOnly value={predefinedText} rows={70} cols={100} />
        </div>
    );
};

const DiabetesApp: React.FC = () => {
    return (
        <div className="diabetes-app">
            <header>
                <h1>Diabetes</h1>
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

export default DiabetesApp;
