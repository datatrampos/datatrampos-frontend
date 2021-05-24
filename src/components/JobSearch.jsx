import styled from 'styled-components';
import React from 'react';

import { Button, Grid, CardButton, PageTitle } from '../components/Utils'
import JobFilter from './JobFilter';
import JSONDATA from '../assets/JOB_DATA.json';
import LocationCity from '@material-ui/icons/LocationCity';


function JobSearch() {

    const [searchTerm, setSearchTerm] = React.useState("");

    function handleTermChange(event) {
        setSearchTerm(event.target.value);
    }

    const [remoteState, setRemoteState] = React.useState(false);

    const handleRemoteChange = (event) => {
        setRemoteState(event.target.checked);
    };

    return (
        <Container id="vagas">
            <PageTitle>Vagas disponíveis</PageTitle>
            <Grid>
                <JobFilter onTermChange={handleTermChange} term={searchTerm} onRemoteChange={handleRemoteChange} remote={remoteState} />
                <JobList>
                    {JSONDATA.map((val) => {
                        return (<>
                            {
                                val.jobs.filter((value) => {

                                    if (searchTerm == "") {
                                        if (value.remote === remoteState.toString()) {
                                            return value
                                        }
                                    } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        if (value.remote === remoteState.toString()) {
                                            return value
                                        }
                                    } else if (val.company_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        if (value.remote === remoteState.toString()) {
                                            return value
                                        }
                                    }

                                }).map((value) => {

                                    return (
                                        <JobCard>

                                            <img src={`/companies-logo/${val.company_name}-logo.png`} alt={val.company_name} />

                                            <span>
                                                {val.company_name}
                                            </span>
                                            <a href={value.url}>{value.title}</a>

                                            <div>
                                                <LocationCity style={{ width: '15px', marginRight: "5px" }} />
                                                {value.workplace}&nbsp;
                                                <p>
                                                    {value.remote == "true" ? " | Aceita Remoto" : null}
                                                </p>

                                            </div>
                                            <CardButton style={{ color: "rgb(77, 77, 77)" }} href={value.url}>Visitar vaga</CardButton>

                                        </JobCard>
                                    )
                                })
                            }
                        </>)

                    })}

                </JobList>
            </Grid>
        </Container>
    )
}

const JobList = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:fit-content;
    div{
        flex-basis:28% ;
    }
    
`;



const JobCard = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 15px 15px 15px;
    border-radius:10px;
    background-color:white;
    box-shadow:0px 1px 10px rgba(128, 128, 128,0.25);
    align-items:center;
    cursor: pointer;
    height:170px;
    text-align:center;
    justify-content:space-between;

    img{
        width:70px; 
        display:block; 
        height: auto;
        margin-bottom:10px;
    }

    span{
        font-weight:700;
        text-align:center;
        color:rgb(77, 77, 77)
    }

    a{
        font-size:15px;
        text-align:center;
        color:#f70656;
        font-weight:600;
        text-decoration:none;
    }

    p{
        font-weight:bolder;
    }

    div{
        font-size:13px;
        display:flex;
        align-items:center;
    }
    
`;

const Container = styled.div`
    border-top:2px solid rgba(77, 77, 77, 0.10);
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px
`;


export default JobSearch;