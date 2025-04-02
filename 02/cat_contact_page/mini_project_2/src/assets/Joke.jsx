import React, { useState } from 'react'
import jokes from '../data/index'
import './Joke.css'

const Joke = () => {
    function JokeCard(props) {
        const [showPunchline, setShowPunchline] = useState(false)

        return (
            <div className="container" onClick={() => setShowPunchline(!showPunchline)}>
                <div className="emoji-header">
                    <span>⚛️</span>
                    <span className="emoji">😂</span>
                </div>
                <p className="setup">{props.setup}</p>
                {showPunchline ? (
                    <p className="punchline fade-in">{props.punchline}</p>
                ) : (
                    <p className="hint">Click to reveal punchline</p>
                )}
                <hr />
            </div>
        )
    }

    return (
        <div className="card">
            <ToggleTheme />
            {jokes.map((value, index) => (
                <JokeCard
                    key={index}
                    setup={value.setup}
                    punchline={value.punchline}
                />
            ))}
        </div>
    )
}

function ToggleTheme() {
    const [dark, setDark] = useState(false)

    React.useEffect(() => {
        document.body.className = dark ? 'dark-mode' : ''
    }, [dark])

    return (
        <button className="theme-toggle" onClick={() => setDark(prev => !prev)}>
            {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    )
}

export default Joke