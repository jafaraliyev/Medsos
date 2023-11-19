// SeizureApp.tsx
import React from 'react';
import Timer from "../timer";
import './seizure.css';

// Simple Textbox component with predefined text
const Textbox: React.FC = () => {
    const predefinedText = "Seizure:\n" +
        "1. **Stay Calm:**\n" +
        "   - Try to stay as calm as possible. Most seizures are brief and resolve on their own.\n" +
        "\n" +
        "2. **Ensure Safety:**\n" +
        "   - Move any nearby objects that could cause harm during the seizure.\n" +
        "   - Gently guide the person to the ground to prevent injury.\n" +
        "\n" +
        "3. **Protect the Head:**\n" +
        "   - If the person is on the ground, place them on their side to help keep the airway clear.\n" +
        "   - Put something soft under their head, such as a folded jacket, to prevent head injury.\n" +
        "\n" +
        "4. **Time the Seizure:**\n" +
        "   - Note the start time of the seizure. If it lasts longer than 5 minutes or if another seizure begins immediately, seek emergency medical help.\n" +
        "\n" +
        "5. **Do Not Restrain:**\n" +
        "   - Do not restrain the person or put anything in their mouth. Contrary to popular belief, you cannot swallow your tongue during a seizure.\n" +
        "\n" +
        "6. **Stay with the Person:**\n" +
        "   - Stay with the person until the seizure is over.\n" +
        "   - After the seizure, the person may be confused or drowsy. Reassure them and help them rest.\n" +
        "\n" +
        "7. **Call for Medical Assistance:**\n" +
        "   - If it's the person's first seizure, if the seizure lasts longer than 5 minutes, or if another seizure follows immediately, call for emergency medical assistance.\n" +
        "\n" +
        "8. **Observe and Report:**\n" +
        "   - Observe and take note of any details about the seizure, such as how long it lasts, and report this information to healthcare professionals.\n" +
        "\n" +
        "9. **Comfort and Support:**\n" +
        "   - Be supportive and reassuring. The person may feel confused or embarrassed after a seizure.\n";

    return (
        <div className="textbox">
            <textarea readOnly value={predefinedText} rows={50} cols={100} />
        </div>
    );
};

const SeizureApp: React.FC = () => {
    return (
        <div className="seizure-app">
            <header>
                <h1>Seizure</h1>
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

export default SeizureApp;
