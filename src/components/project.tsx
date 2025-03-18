

import * as React from 'react';
import classNames from 'classnames';
import {
    rectangle,
    line,
    projectTitle,
    left,
    right,
    additionalContent,
    projectDescription
} from './project.module.css';
import { ProjectInfo } from '../types/types';

interface ProjectInfoProps {
    projectInfo: ProjectInfo;
}

const HeaderBar: React.FC<ProjectInfoProps> = ( { projectInfo } ) => { // destructoring
    return (
        <div className={rectangle}>
            <div className={line}>
                <span className={classNames(projectTitle, left)}>{projectInfo.title}</span>
                <span className={classNames(projectTitle, right)}>{projectInfo.year}</span>
            </div>
            <div className={classNames(additionalContent, projectDescription)}>{projectInfo.description}</div>
            <div className="line">
                <div className={classNames(additionalContent, left)}>TECH STACK USED: {projectInfo.technologies.join(", ")}</div>
                <a className={classNames(additionalContent, right)} href={projectInfo.link} target="_blank">GITHUB</a>
            </div>
        </div>
    );
};

export default HeaderBar