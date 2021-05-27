import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import GoogleIcon from '../assets/static/google-icon.png'
import TwitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'
import { loginRequest } from '../redux/actions'

export default function Login(props) {

    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: '',

    })

    const handleInput = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(loginRequest(form))
        props.history.push('/')
    }

    return (
        <Fragment>
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input 
                            name="email"
                            className="input" 
                            type="text" 
                            placeholder="Correo" 
                            onChange={handleInput}
                        />
                        <input 
                            name="password"
                            className="input" 
                            type="password" 
                            placeholder="Contraseña" 
                            onChange={handleInput}
                        />
                        <button className="button">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                            </label>
                            <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div><img src={GoogleIcon} /> Inicia sesión con Google</div>
                        <div><img src={TwitterIcon} /> Inicia sesión con Twitter</div>
                    </section>
                    <p className="login__container--register">No tienes ninguna cuenta 
                        <Link to="/register">
                            Regístrate
                        </Link>
                    </p>
                </section>
            </section>
        </Fragment>
    )
}
