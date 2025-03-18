import * as React from 'react';
import { Link } from 'gatsby';
import { navbarBanner, navbar } from './navigation.module.css';

const NavigationBar: React.FC = () => { // destructoring
    return (
        <div className={navbarBanner}>
            <nav className={navbar}>
                <ul>
                    <li><Link to="/">ABOUT ME</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    <li><Link to="/certificates">CERTIFICATES</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationBar