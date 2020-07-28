import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import './style.css';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";


export default function Login() {
   
    let history = useHistory();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e) {
        if (email === 'andresalles' && senha === 'a') {
            dispatch({type: 'SUCESS_LOGIN', email: email})
            e.preventDefault();
            history.push('/dashboard')
        }
        else {
            alert('falha na autenticação')
        }
    }

    return (
        <>
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <TextField label="Email" onChange={e => setEmail(e.target.value)} variant="outlined" />
                    <TextField type="password" label="Senha" onChange={e => setSenha(e.target.value)} variant="outlined" />
                    <button type="submit">Entrar</button>
                    <Link to="/" className="link">Ainda não tem uma conta ?</Link>
                </form>
            </div>
        </>
    )
};