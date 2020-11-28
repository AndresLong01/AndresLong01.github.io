import React from 'react'
import mirabella from '../../images/mirabella.png'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'
const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My most recent Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={mirabella}/>
                    <ProjectsH2>Mirabella Doors</ProjectsH2>
                    <ProjectsP>Active Full Stack website for a local business boasting a modern style and animations as well as a robust database for their products</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={mirabella}/>
                    <ProjectsH2>Superchat Demo</ProjectsH2>
                    <ProjectsP>Virtual demonstration of a firebase driven chat application at scale with live authentication methods</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={mirabella}/>
                    <ProjectsH2>Test</ProjectsH2>
                    <ProjectsP>test</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
