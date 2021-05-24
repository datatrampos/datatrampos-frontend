import { Button } from './Utils';
import Fade from 'react-reveal/Fade'
import teamwork from '../assets/teamwork.jpg';
import styled from 'styled-components';
import ChevronRight from '@material-ui/icons/ChevronRight';

function ExtraSection() {
    return (
        <Container>
            <h2>Sobre as Empresas</h2>
            <TextContainer>
                <Fade left>
                    <div>
                        <h3>As empresas com as vagas cadastradas são escolhidas por:</h3>
                        <p><ChevronRight /> Aportes de investimento</p>
                        <p><ChevronRight /> Relevância em mídias</p>
                        <p><ChevronRight /> Avaliações do Glassdoor</p>
                        <p><ChevronRight /> GPTW</p>
                        <p><ChevronRight /> Startups ou unicórnios</p>
                        <Button href="/empresas" style={{ width: 'fit-content', marginTop: '40px'}}>Conheça as empresas e suas vagas</Button>
                    </div>
                </Fade>
                <Fade right>
                    <img src={teamwork} alt="..." />
                </Fade>
            </TextContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color:white;
    margin-top:50px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    max-width:1300px;

    h2{
        font-family:'Raleway', sans-serif;
        font-size:50px;
        font-weight:900;
        color:#f70656;
    }

    h3{
        font-size:40px;
        margin-bottom:30px;
    }

    p{
        font-size:17px;
        font-family:'Raleway', sans-serif;
        color:rgb(77, 77, 77);
        margin-left:10px;
    }    

    img{
        width:400px;
        height:auto;
    }
`;

const TextContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding:75px 30px;

    div{
        display:flex;
        flex-direction:column;
    }

    p{
        display: flex;
        flex-direction:row;
        align-items:center;
    }
`

export default ExtraSection;