import { GitHub, Instagram } from '@material-ui/icons';
import styled from 'styled-components';
import { Logo } from './Utils';

function FooterInfo() {
    return (
        <>
            <FooterContainer>
                <Logo href="" style={{ color: 'white', fontSize: "40px" }}>DataTrampos</Logo>
                <p>As melhores oportunidades em Dados nas melhores empresas</p>
                <div>
                    <a href="/about">Sobre nós</a>
                    <span>•</span>
                    <a href="/jobs">Vagas</a>
                    <span>•</span>
                    <a href="/companies">Empresas</a>
                </div>
                <div>
                    <a href="https://instagram.com/datatrampos">
                        <Instagram style={{ marginRight: '10px' }} />
                    </a>
                    <a href="https://github.com/luisgmfarias/datajobs">
                        <GitHub />
                    </a>
                </div>
            </FooterContainer>
        </>
    )
}

const FooterContainer = styled.div`
    background-color:#f70656;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:250px;
    color:white;

    p{
        font-size:13px;
        margin:13px 0;
    }

    div{
        display: flex;
        flex-direction:row;
        margin-bottom:10px;

        span{
            margin:0 5px;
        }
    }

    a{
        text-decoration:none;
        color:white;
    }
`

export default FooterInfo