import * as React from 'react';
import { certificates } from './cert-selector.module.css';

const CertificateSelector: React.FC = () => {
    return (
        <div>
            <nav className={certificates}>
                <ul>
                    <li><a href="#cert1">Security+</a></li>
                    <li><a href="#cert2">Network+</a></li>
                    <li><a href="#cert3">AWS CCP</a></li>
                    <li><a href="#cert4">CCNA</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default CertificateSelector;