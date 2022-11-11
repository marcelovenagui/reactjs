import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import Primeiro from './components/primeiro'
import './components/ComParametro'
import ComParametro from './components/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro /> <ComParametro titulo='Esse é o título' subtitulo='Esse é o subtítulo'/>
    </div>,
    document.getElementById('root')
)