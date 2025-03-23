

import * as React from 'react';
import classNames from 'classnames';
import * as styles from './project.module.css';
import { ProjectInfo } from '../types/types';

interface ProjectInfoProps {
    projectInfo: ProjectInfo;
}

const HeaderBar: React.FC<ProjectInfoProps> = ( { projectInfo } ) => { // destructoring
    return (
        <div className={styles.rectangle}>
            <div className={styles.line}>
                <span className={classNames(styles.projectTitle, styles.left)}>{projectInfo.title}</span>
                <span className={classNames(styles.projectTitle, styles.right)}>{projectInfo.year}</span>
            </div>
            <div className={classNames(styles.additionalContent, styles.projectDescription)}>{projectInfo.description}</div>
            <div className="line">
                <div className={classNames(styles.additionalContent, styles.left)}>TECH STACK USED: {projectInfo.technologies.join(", ")}</div>
                <a className={classNames(styles.additionalContent, styles.right)} href={projectInfo.link} target="_blank">GITHUB</a>
            </div>
        </div>
    );
};

export default HeaderBar