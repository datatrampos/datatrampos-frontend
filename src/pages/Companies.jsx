import JSONDATA from '../assets/JOB_DATA.json';
import styled from 'styled-components';
import {PageTitle} from '../components/Utils'

function Companies() {
    return (
        <>
            <PageTitle>Empresas</PageTitle>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <strong style={{textAlign:"center", color:'#f70656'}}>Por enquanto, não existe um sistema de cadastro de vagas!</strong>
                <p>As empresas a seguir foram escolhidas baseadas em critérios definidos pela equipe do DataTrampos.<a href="#companies-choice" style={{textDecoration:'none', color:"rgb(77, 77, 77)"}}><strong> Saiba quais são eles</strong></a></p>
            </div>
            <CompaniesList>            
            {JSONDATA.map((value)=>{
                return(
                    <CompanyCard href={`/empresas/${value.company_name.toLowerCase()}`}>
                        <img src={`/companies-logo/${value.company_name}-logo.png`} alt={value.company_name} width="125px" style={value.jobs.length == 0 ? {filter:"grayscale(100%)"} : {filter:"grayscale(0%)"}}/>
                        <div style={value.jobs.length == 0 ? {color:"rgb(77, 77, 77)"} : {color:"#f70656"}}>
                            <strong style={{fontSize:"20px"}}> {value.jobs.length} </strong>
                            <span style={{fontSize:"12px"}}>Vagas disponíveis</span>
                        </div>

                    </CompanyCard>
                )
            })}
            </CompaniesList>
        </>
    )
}

const CompanyCard = styled.a`
    display:flex;
    flex-direction:column;
    margin:0 15px 15px 15px;
    border-radius:10px;
    background-color:white;
    box-shadow:0px 1px 10px rgba(128, 128, 128,0.25);
    align-items:center;
    cursor: pointer;
    text-align:center;
    padding:30px;
    text-decoration:none;

    img{
        margin:auto;
    }

    div{
        color:#f70656;
    }
`;


const CompaniesList = styled.div`
    margin-top:50px;
    display:flex;
    flex-wrap:wrap;
    height:fit-content;
    justify-content:center;
    div{
        flex-basis:10% ;
    }
`


export default Companies
