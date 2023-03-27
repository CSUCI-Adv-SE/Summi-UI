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
        <div className="aboutpage">
            <h1>About Us</h1>
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
