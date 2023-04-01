import React from 'react';
import ocrFlowImage from './ocr_flow.png';
import '../../App.css';

const AboutPage = () => {
    const teamMembers = [
        'Prashant Kumar Reddy',
        'Sara Khoshnudrad',
        'Wassema Islam',
        'Minrui Hu',
        'Shahin Safarov'
    ];

    return (
        <div className="col">
            <h1>About Us</h1>
            <h2>What is SummI?</h2>
            <p>
                “SummI” is a website that summarizes images. You can easily upload your image and receive the summary of the text in it.
            </p>
            <h2>How does it work?</h2>
            <p>
                It uses artificial intelligence technologies to automatically recognize the text in the image and then summarize it.
                Also, we enable you to upload any format of images you want, such as JPEG, PNG, WebP, etc.
            </p>
            <p>
                We are five students studying MSc in computer science at CSUCI and participating in building this web application as a project for one of our classes.
            </p>
            <p>Thanks for choosing our website.</p>
            <p>Our team members:</p>
            <ul>
                {teamMembers.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
            <img src={ocrFlowImage} alt="OCR flow diagram" className="image-50-percent" />
        </div>
    );
};

export default AboutPage

