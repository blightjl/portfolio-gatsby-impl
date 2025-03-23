import * as React from 'react';
import { Link } from 'gatsby';
import NavigationBar from '../components/navigation';
import * as styles from './index.module.css'

console.log("DISPLAYING ./index.module.css");
console.log(styles);

const Navigation: React.FC = () => { // destructoring
    return (
        <NavigationBar />
    );
};

export default Navigation
