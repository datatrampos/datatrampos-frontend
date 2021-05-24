import styled from 'styled-components';
import Logo from '../assets/datatrampos-logo.png'
function Navbar() {
    return (
        <Nav>
            <a href="http://localhost:3000"><img src={Logo} alt="datatrampos-logo"/></a>
            <div>
                <a href="/jobs">Vagas</a>
                <a href="/companies">Empresas</a>
            </div>
            {/* <div>
                <a>Login</a>
                <a>Cadastrar</a>
            </div> */}

        </Nav>
    )
}

export default Navbar;

const Nav = styled.div`
    background-color: white;
    padding:15px 30px;
    display:flex;
    flex-direction:row;
    box-shadow:0px 1px 10px rgba(128, 128, 128,0.25);

    div{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:170px;
        margin-left:70px;
        align-items:center;

        a{
            text-decoration:none;
            color:rgb(77, 77, 77);
            font-family:'Raleway', sans-serif;
            font-weight:500;
            font-size:15px;
        }
    
        a:hover{
            color: #f70656;
        }
    }

    img{
        width:200px;
    }


`;

