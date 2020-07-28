import React, { Component, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import * as consultaCep from 'cep-promise'
import validarCpf from 'validar-cpf'
import './style.css';


export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            cpf: '',
            date: '',
        };
    }
    initialState = {
        cep: '',
        endereco: '',
    }
    state = { ...this.initialState }

    validCep;
    async changeCep(e) {
        this.setState({ cep: e.target.value })
        let cep = e.target.value;
        if (cep.length === 8) {
            try {
                this.validCep = false
                let enderecoCompleto = await consultaCep(cep)
                let ruaEstado = enderecoCompleto?.street + '-' + enderecoCompleto?.city + '-' + enderecoCompleto?.state
                this.setState({ endereco: ruaEstado })
            } catch (error) {
                this.validCep = true
                this.setState({ endereco: 'Endereço não encontrado' })
                this.setState({ cep: '' })
            }
        }
    }
    validCpf;
     async handleInputChange(e){
        this.setState({ cpf: e.target.value });
        let cpf = e.target.value;
        try{

            if(cpf.length === 11) {
                this.validCpf = false
                let cpfValido = await validarCpf(cpf);
                console.log(cpfValido)
                if(cpfValido === false) {
                    this.validCpf = true 
                }
            }
        }catch(error) {
            console.log(error);
        }
     }
     validIdade;
     handleDate(e){
        this.setState({ date: e.target.value });
        let data = e.target.value;
        if(data > '2008-06-27'){
            this.validIdade = true;
            alert('voce deve ter mais que 12 anos para se cadastrar')
            window.location.reload(false);
        }
        else {
            this.validIdade = false;
        }
     }

    render() {
        return (
            <>
                <div className="body">
                    <div className="header">
                        <span className="logo">TestVersel</span>
                        <div className="header-right">
                            <Link to="/Contato">Login</Link>
                        </div>
                    </div>
                    <div className="form">
                        <div className="MuiFormControl-root">
                            <TextField name="nome"  label="Username" variant="outlined" />
                            <TextField name="email" label="Email" variant="outlined" />
                            <TextField
                            onChange={this.handleDate.bind(this)}
                                error={this.validIdade}
                                id="date"
                                name="data"
                                label="Data de nascimento"
                                type="date"
                                defaultValue='1900-12-12'
                                variant="outlined"
                            />
                            <TextField  label="CPF" error={this.validCpf} onChange={this.handleInputChange.bind(this)} variant="outlined" />
                            <TextField name="cep" error={this.validCep} label="CEP" variant="outlined" value={this.state.cep} onChange={this.changeCep.bind(this)} />
                            <TextField  label="Endereço" disabled value={this.state.endereco} variant="outlined" />
                            <TextField label="Número" variant="outlined" />
                            <TextField name="senha" label="Senha" variant="outlined" />
                            <button type="submit" >Cadastre-se</button>
                        </div>
                    </div>
                    <div className="text">
                        <h3>Built for developers</h3>
                        <p>GitHub is a development platform inspired by the way you work.
                        From open source to business, you can host and review code,
                        manage projects, and build software alongside 50 million
                        developers.
                    </p>
                    </div>
                </div>
            </>
        );
    }
};
