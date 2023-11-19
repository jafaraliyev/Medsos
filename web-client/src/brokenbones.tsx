import React from 'react';
import Timer from "./timer";
import './brokenbones.css';

// Simple Textbox component with predefined text
const Textbox: React.FC = () => {
    const predefinedText = "Broken bones:\n" +
        "\n" +
        "1. **Call for Emergency Help:**\n" +
        "   \n" +
        "   -If the broken bone is the result of major trauma or injury, call 911. Also call for emergency help if: The person is unresponsive, isn't breathing or isn't moving. Begin CPR if there's no breathing or heartbeat.\n" +
        "\n" +
        "2. **Keep the Person Calm:**\n" +
        "   - Encourage the person to remain as still and calm as possible. Movement can worsen the injury.\n" +
        "\n" +
        "3. **Do Not Move the Person (Unless Necessary):**\n" +
        "   - Avoid moving the person unless there is an immediate danger, such as a fire or other life-threatening situation. If you must move them, do so gently and support the injured area.\n" +
        "\n" +
        "4. **Immobilize the Injured Area:**\n" +
        "   - If possible, immobilize the injured area to prevent further damage. You can use splints or padding to support the broken bone and keep it in place.\n" +
        "      - For broken arms or wrists, you might use a sling or tie the arm to the body for support.\n" +
        "      - For broken legs or ankles, you can use splints or cushions to help immobilize the area.\n" +
        "\n" +
        "5. **Apply Ice (if available):**\n" +
        "   - If you have access to ice or a cold pack, you can apply it to the injured area to help reduce swelling. However, ensure that the ice is wrapped in a cloth or towel to prevent direct contact with the skin.\n" +
        "\n" +
        "6. **Elevate the Injured Area (if possible):**\n" +
        "   - If feasible and it doesn't cause more pain, elevate the injured limb to help reduce swelling.\n" +
        "\n" +
        "7. **Provide Comfort:**\n" +
        "   - Offer reassurance and keep the person as comfortable as possible. You can use cushions or blankets to support and pad the injured area.\n" +
        "\n" +
        "8. **Monitor for Shock:**\n" +
        "   - Keep an eye out for signs of shock, such as pale skin, rapid breathing, or weakness. If you suspect shock, keep the person warm and reassure them while waiting for professional help.\n" +
        "\n" +
        "\n";

    return (
        <div className="textbox">
            <textarea readOnly value={predefinedText} rows={52} cols={100} />
        </div>
    );
};

const BrokenbonesApp: React.FC = () => {
    return (
        <div className="brokenbones-app">
            <header>
                <h1>Broken Bones</h1>
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

export default BrokenbonesApp;
