import React from 'react';
import Timer from "./timer";
import './stroke.css';

// Simple Textbox component with predefined text
const Textbox: React.FC = () => {
    const predefinedText = "Stroke:\n" +
        "\n" +
        "1. **Face Drooping:**\n" +
        "   - Ask the person to smile. Is one side of their face drooping or numb? Is their smile uneven?\n" +
        "\n" +
        "2. **Arm Weakness:**\n" +
        "   - Ask the person to raise both arms. Is one arm weak or numb? Does one arm drift downward?\n" +
        "\n" +
        "3. **Speech Difficulty:**\n" +
        "   - Ask the person to repeat a simple sentence. Is their speech slurred or strange? Can they articulate the words clearly?\n" +
        "\n" +
        "4. **Time to Call 911:**\n" +
        "   - If you observe any of these signs, it's time to call emergency services (911 in the United States or the appropriate emergency number in your country) immediately. Note the time when the symptoms first appeared.\n" +
        "\n" +
        "Additional actions to take:\n" +
        "\n" +
        "- **Do Not Wait:**\n" +
        "  - Do not wait to see if the symptoms improve on their own. Time is crucial in stroke treatment.\n" +
        "\n" +
        "- **Keep the Person Calm:**\n" +
        "  - Encourage the person to lie down and remain calm. Avoid giving them anything to eat or drink.\n" +
        "\n" +
        "- **Note Additional Symptoms:**\n" +
        "  - If possible, note any additional symptoms, such as sudden severe headache, confusion, dizziness, or difficulty seeing in one or both eyes.\n" +
        "\n" +
        "- **Provide Comfort:**\n" +
        "  - Reassure the person and keep them as calm as possible while waiting for emergency services.\n" +
        "\n" +
        "- **Do Not Drive to the Hospital:**\n" +
        "  - Do not attempt to drive the person to the hospital yourself. Emergency medical services are better equipped to provide immediate care.\n";

    return (
        <div className="textbox">
            <textarea readOnly value={predefinedText} rows={50} cols={100} />
        </div>
    );
};

const StrokeApp: React.FC = () => {
    return (
        <div className="stroke-app">
            <header>
                <h1>Stroke</h1>
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

export default StrokeApp;
