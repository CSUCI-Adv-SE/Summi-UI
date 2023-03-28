import React from 'react';

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
            <p>
                This Web App can read any PDF, JPEG, PNG file and can convert it to Text as an output.

            </p>
            <p>Our team members:</p>
            <ul>
                {teamMembers.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
        </div>
    );
};

export default AboutPage;
