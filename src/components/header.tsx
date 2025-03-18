import * as React from 'react';
import { titleBanner } from './header.module.css';

const HeaderBar: React.FC = () => { // destructoring
    return (
        <div className={titleBanner}>Josan</div>
    );
};

export default HeaderBar