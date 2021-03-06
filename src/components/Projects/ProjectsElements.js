import styled from 'styled-components'

export const ProjectsContainer = styled.div`
height: 969px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px) {
    height: 1300px;
}

@media screen and (max-width: 560px) {
    height: 1500px;
}`

export const ProjectsWrapper = styled.div`
max-width:1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const ProjectsCard = styled.a`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 420px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
text-decoration: none;
color: #000;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ProjectsIcon = styled.img`
height: 200px;
width: 200px;
border-radius: 10px;
margin-bottom: 20px;
`

export const ProjectsH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const ProjectsH2 = styled.h2`
font-size: 1.25rem;
margin-bottom: 15px;
`

export const ProjectsP = styled.p`
font-size: .7rem;
text-align: center;
`