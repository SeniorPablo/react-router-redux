import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import '../assets/styles/components/Register.scss'
import { registerRequest } from '../redux/actions'

export default function Register(props) {

    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: '',
        name: '',
        password: ''
    })

    const handleInput = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(registerRequest(form))
        props.history.push('/')
    }

    return (
        <Fragment>
            <section className="register">
                <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Nombre"
                        name="name"
                        onChange={handleInput}
                    />
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Correo" 
                        name="email"
                        onChange={handleInput}
                    />
                    <input 
                        className="input" 
                        type="password" 
                        placeholder="Contraseña" 
                        name="password"
                        onChange={handleInput}
                    />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">
                    Iniciar sesión
                </Link>
                </section>
            </section>
        </Fragment>
    )
}
