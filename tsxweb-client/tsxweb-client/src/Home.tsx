import Timer from "./timer";
import React from "react";
import { useNavigate } from "react-router-dom";

const buttonNames = [
    'Seizure',
    'Heart Attack',
    'Stroke',
    'Choke',
    'Diabetes',
    'Blood',
    'Asthma',
    'Broken Bones',
];

const buttonImages = [
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkGvOEnYdpethXYTWm3aq_D7_vr17G0VH9HfWCJFmvSGg1f5wS',
    'https://media.istockphoto.com/id/1357981953/vector/african-woman-having-heart-disease-symptom-in-flat-design-on-white-background-heart-attack.jpg?s=612x612&w=0&k=20&c=XMAzQ9MnECI9XV45wkWQSYULY5Qb3TiBvbo2LBR2LUA=',
    'https://us.123rf.com/450wm/pikepicture/pikepicture2001/pikepicture200101996/137728286-brain-impulse-icon-vector-outline-brain-impulse-sign-isolated-contour-symbol-illustration.jpg?ver=6',
    'https://api.kramesstaywell.com/Content/6066ca30-310a-4170-b001-a4ab013d61fd/ucr-images-v1/Images/83412_1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjbk-cUI9VimD-LvHSraOPMtUACLPIimjMR6d0cYIEV_Wt1Ca',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbOSJAO_Cm5-uFvVwoSkZbL8o0zPG2nHQFHcLbsnQ1Oc-Vhtmk',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZPgP2iTkY7xor_gBWq8LBi8vVgjWB1DaUyhDdG7Y8YGrcrWi8',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMu7UhgkLxmi9puU7Jhbt_YwkfOZY3kVJLnDFunSoX1eg548la',
];

export function ButtonContainer() {
    const navigation = useNavigate();
    const buttons = buttonNames.map((name, index) => (
        <button
            key={index}
            className="button"
            style={{
                backgroundImage: `url(${buttonImages[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end', // Align text at the bottom
                textAlign: 'center',
                margin: 0, // Remove any default margin
            }}
            onClick={() => navigation('/' + name.toLowerCase().replace(/\s+/g, '-'))}
        >
            {name}
        </button>
    ));

    return (
        <div className="button-container">
            {buttons}
            <div className="emergency-container">
                <button className="emergency-button">Et </button>
            </div>
            <Timer />
        </div>
    );
}

export default ButtonContainer;
