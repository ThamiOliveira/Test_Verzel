import React, { Component, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import { useSelector } from 'react-redux'



export default class Main extends Component {
    constructor() {
        super();
        
        this.state = {
            novaTarefa: '',
            novaTarefaData: '',
            tarefas: [
                'lavar louça',
                'lavar o carro'
            ]
        };
    }

    handleInputChange = e => {
        this.setState({ novaTarefa: e.target.value });
    }
    handleData = e => {
        this.setState({ novaTarefaData: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ tarefas: [...this.state.tarefas, this.state.novaTarefa], novaTarefa: '', novaTarefaData: '' })
    }
    render() {
        return (
            <>
                <div className="header">
                    <span className="logo">TestVersel</span>
                    <div className="header-right">
                        <GetMail />
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <button className="botao" type="submit">Nova tarefa</button>
                    <input type="text" onChange={this.handleInputChange} value={this.state.novaTarefa} />
                    <ul>
                        {this.state.tarefas.map(tarefa => <li key={tarefa}><h4>{tarefa}</h4></li>)}
                    </ul>
                </form>
            </>
        );
    }
};


export const GetMail = () => {
    const mail = useSelector(state => state.emailUser)
    return mail
}