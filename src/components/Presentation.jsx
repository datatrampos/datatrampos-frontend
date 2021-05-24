import styled from 'styled-components';
import jobs from '../assets/data-jobs.jpg';
import {Button} from '../components/Utils';
import Fade from 'react-reveal/Fade';

function Presentation() {
    return (
        <Container>
            <Fade left>
                <div>
                    <h2>Encontre as melhores oportunidades em Dados.</h2>
                    <p>Lista de vagas de emprego nas startups de maior ascenção no mercado.</p>
                    <Button href="#vagas" style={{ marginLeft: 'auto', marginTop: '30px' }}>Buscar Vagas</Button>
                </div>
            </Fade>
            <Fade right>
                <img src={jobs} alt="..." />
            </Fade>
        </Container>
    )
}

export default Presentation;

const Container = styled.div`
    background-color:white;
    margin-top:50px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    div{
        border-right:4px solid #f70656;
        border-top:4px solid #f70656;
        border-bottom:4px solid #f70656;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        height:300px;
        width:40%;
        padding:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    h2{
        font-family:'Raleway', sans-serif;
        font-size:50px;
        font-weight:900;
        color:#f70656;
    }

    p{
        font-size:20px;
        font-family:'Raleway', sans-serif;
        color:rgb(77, 77, 77)
    }
    
    a{
        text-decoration:none;
        font-weight:bold;
        color:rgb(77, 77, 77) !important;

        &:hover{
            color: #f70656;
        }
    }

    

    img{
        width:700px;
        height:auto;
    }
`;