import * as React from 'react';
import * as styles from './header.module.css';

const HeaderBar: React.FC = () => { // destructoring
    return (
        <div className={styles.titleBanner}>Josan</div>
    );
};

export default HeaderBar