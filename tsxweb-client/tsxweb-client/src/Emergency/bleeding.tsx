import React from 'react';
import Timer from "../timer";
import './bleeding.css';

// Simple Textbox component with predefined text
const Textbox: React.FC = () => {
    const predefinedText = "Bleeding:\n" +
        "\n" +
        "\n" +
        "1. **Assess the Situation:**\n" +
        "   - Quickly assess the severity of the bleeding. Is it minor or severe? Is there an object lodged in the wound?\n" +
        "\n" +
        "2. **Call for Emergency Medical Help:**\n" +
        "   - If the bleeding is severe or if there's an object lodged in the wound, call for emergency medical assistance immediately (911 or the appropriate emergency number in your country).\n" +
        "\n" +
        "3. **Protect Yourself:**\n" +
        "   - Wear disposable gloves if available to protect yourself from contact with the person's blood.\n" +
        "\n" +
        "4. **Position and Comfort the Person:**\n" +
        "   - Help the person lie down and keep them calm. Elevate the injured area if possible, unless it causes more pain or exacerbates the injury.\n" +
        "\n" +
        "5. **Apply Direct Pressure:**\n" +
        "   - Use a clean cloth, bandage, or your hands to apply direct pressure to the wound. Maintain pressure until the bleeding stops or help arrives.\n" +
        "\n" +
        "6. **Add Dressing and Bandage:**\n" +
        "   - If blood soaks through the initial dressing, do not remove it. Instead, add more layers and continue applying pressure.\n" +
        "\n" +
        "7. **Use Tourniquet (if necessary):**\n" +
        "   - Consider using a tourniquet only if bleeding is severe and direct pressure is not stopping it. Place the tourniquet above the bleeding site, but do not place it directly on a joint. Tighten until the bleeding stops, and note the time when you applied it.\n" +
        "\n" +
        "8. **Immobilize the Injured Area (if applicable):**\n" +
        "   - If there's a possibility of a broken bone or injury to a limb, try to immobilize the area without causing additional pain.\n" +
        "\n" +
        "9. **Comfort and Keep Warm:**\n" +
        "   - Keep the person warm by covering them with a blanket or jacket. Shock can occur due to significant blood loss.\n" +
        "\n" +
        "10. **Wait for Professional Help:**\n" +
        "   - Keep providing care until professional medical help arrives. Be prepared to continue managing bleeding and providing first aid.\n";

    return (
        <div className="textbox">
            <textarea readOnly value={predefinedText} rows={55} cols={100} />
        </div>
    );
};

const BleedingApp: React.FC = () => {
    return (
        <div className="bleeding-app">
            <header>
                <h1>Bleeding</h1>
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

export default BleedingApp;
