import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LocationCity from '@material-ui/icons/LocationCity'
import Clear from '@material-ui/icons/Clear';
import React from 'react';
import { SecondaryButton } from './Utils';

function JobFilter(props) {

    const [levelState, setLevelState] = React.useState({
        estagio: false,
        junior: false,
        pleno: false,
        senior: false,
        lead: false,
    });

    const [posState, setPosState] = React.useState({
        bi: false,
        analise_de_dados: false,
        ciencia_de_dados: false,
        banco_de_dados: false,
        dev_python: false,
        engenharia_de_dados: false,
    });

    const handleLevelChange = (event) => {
        setLevelState({ ...levelState, [event.target.name]: event.target.checked });
    };

    const handlePosChange = (event) => {
        setPosState({ ...posState, [event.target.name]: event.target.checked });
    };

    const { estagio, junior, pleno, senior, lead } = levelState;
    const { bi, analise_de_dados, ciencia_de_dados, banco_de_dados, dev_python, engenharia_de_dados } = posState;

    return (
        <JobFilterContainer>
            <p>Refine sua busca</p>

            <TextField
                id="outlined-full-width"
                label="Palavra-chave"
                style={{ margin: '15px 0px' }}
                placeholder="Ex.: Analytics, Ciência de dados"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={props.onTermChange}
                value={props.term}
                variant="outlined"
            />
            <TextField
                id="input-with-icon-textfield"
                label="Localização"
                style={{ margin: '15px 0px' }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocationCity />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />

            <FormControl component="fieldset" style={{ margin: '15px 0px' }}>
                <FormLabel component="legend">Nível de experiência</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={estagio} onChange={handleLevelChange} name="estagio" />}
                        label="Estágio"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={junior} onChange={handleLevelChange} name="junior" />}
                        label="Júnior"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={pleno} onChange={handleLevelChange} name="pleno" />}
                        label="Pleno"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={senior} onChange={handleLevelChange} name="senior" />}
                        label="Sênior"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={lead} onChange={handleLevelChange} name="lead" />}
                        label="Lead"
                    />
                </FormGroup>
            </FormControl>
            <FormControl component="fieldset" style={{ margin: '15px 0px' }}>
                <FormLabel component="legend">Área de conhecimento</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={analise_de_dados} onChange={handlePosChange} name="analise_de_dados" />}
                        label="Analise de Dados"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ciencia_de_dados} onChange={handlePosChange} name="ciencia_de_dados" />}
                        label="Ciência de Dados"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={banco_de_dados} onChange={handlePosChange} name="banco_de_dados" />}
                        label="Banco de Dados"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={bi} onChange={handlePosChange} name="bi" />}
                        label="Business Intelligence"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={dev_python} onChange={handlePosChange} name="dev_python" />}
                        label="Desenvolvedor Python"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={engenharia_de_dados} onChange={handlePosChange} name="engenharia_de_dados" />}
                        label="Engenharia de Dados"
                    />
                </FormGroup>
            </FormControl>

            <FormControlLabel
                label="Remoto"
                control={<Switch checked={props.remote} onChange={props.onRemoteChange} />}
                style={{marginBottom: "30px" }}
            />

            <SecondaryButton>
                <InputAdornment style={{ marginRight: '3px' }}>
                    <Clear />
                </InputAdornment>
                Redefinir
            </SecondaryButton>

        </JobFilterContainer>
    )

}

const JobFilterContainer = styled.div`
    display: flex;
    flex-direction:column;
    padding:30px 20px;
    border-radius:10px;
    background-color:white;
    box-shadow:0px 1px 10px rgba(128, 128, 128,0.25);
    height:fit-content;

    p{
        font-weight:600;
        font-size:20px;
        text-align:center;
        margin:10px 0px;
        color:rgb(77, 77, 77);
    }
`;

export default JobFilter