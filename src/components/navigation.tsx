import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './navigation.module.css';

const NavigationBar: React.FC = () => { // destructoring
    return (
        <div className={styles.navbarBanner}>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link to="/">ABOUT ME</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    <li><Link to="/certificates">CERTIFICATES</Link></li>
                    <li><Link to="/globalstate">GLOBAL STATE</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationBar