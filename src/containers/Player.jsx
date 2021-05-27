import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router'

import '../assets/styles/components/Player.scss'
import { getVideoSource } from '../redux/actions'


export default function Player(props) {

    const dispatch = useDispatch()
    const { id } = props.match.params
    const playing = useSelector(state => state.playing)
    const hasPlaying = Object.keys(playing).length > 0

    useEffect(() => {
        dispatch(getVideoSource(id))
    }, [])

    return hasPlaying ? (
        <div className="player">
            <video controls autoPlay>
                <source src={playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <Redirect to="/404/" />
}
