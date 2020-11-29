import React from 'react'
import mirabella from '../../images/mirabella.png'
import superchat from '../../images/superchat.png'
import database from '../../images/database.png'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'
const Projects = () => {
    return (
        <ProjectsContainer id="projects" >
            <ProjectsH1>My most recent Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard href="https://still-sea-30628.herokuapp.com/" target="_blank">
                    <ProjectsIcon src={mirabella}/>
                    <ProjectsH2>Mirabella Doors</ProjectsH2>
                    <ProjectsP>Active Full Stack website for a local business boasting a modern style and animations as well as a robust database for their products</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={superchat}/>
                    <ProjectsH2>Superchat Demo</ProjectsH2>
                    <ProjectsP>Virtual demonstration of a firebase and React driven actively updated chat application at scale with live authentication methods</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={database}/>
                    <ProjectsH2>SQL Database Demo</ProjectsH2>
                    <ProjectsP>A full demo for Node on a wroking database for sorting employees, adding employees and associating them to different department tables</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
