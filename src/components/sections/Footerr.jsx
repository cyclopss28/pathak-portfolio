import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

export const Footerr = () => {
    const styles = {
        container: {
            fontFamily: '"Space Grotesk", sans-serif',
            color: '#F3F4F6',
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
        },
        links: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            listStyle: 'none',
            gap: '30px',
            padding: 0,
            margin: 0,
        },
        linkItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        icon: {
            fontSize: '1.5em', // Adjust size with fontSize
        },
        linkText: {
            color: '#E5E7EB',
            textDecoration: 'none',
            fontSize: '1em',
            fontWeight: 400,
            letterSpacing: '0.05em',
        },
    };

    return (
        <footer id="footerr" style={styles.container}>
            <ul style={styles.links}>
                <li style={styles.linkItem}>
                    <FaEnvelope style={styles.icon} />
                    <a href="mailto:pathaklav28@gmail.com" style={styles.linkText}>E-mail</a>
                </li>
                <li style={styles.linkItem}>
                    <FaLinkedin style={styles.icon} />
                    <a href="https://www.linkedin.com/in/lav-pathak-a655a2237/" style={styles.linkText}>LinkedIn</a>
                </li>
                <li style={styles.linkItem}>
                    <FaGithub style={styles.icon} />
                    <a href="https://github.com/cyclopss28" style={styles.linkText}>Github</a>
                </li>
                <li style={styles.linkItem}>
                    <FaCode style={styles.icon} />
                    <a href="https://www.hackerrank.com/profile/pathaklav28" style={styles.linkText}>HackerRank</a>
                </li>
            </ul>
        </footer>
    );
};


