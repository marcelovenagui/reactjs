import React from "react";

import Primeiro from './components/primeiro'

import ComParametro from './components/ComParametro'

import ComFilhos from './components/Comfilhos'
import Card from './components/layout/Card.jsx'

export default (props) =>
<div>
    <Card titulo='Primeiro Componente'>
        Conteudo
    </Card>
    <Card titulo='Segundo Componente'>
        <Primeiro />
    </Card>
    <Card titulo='Componente com Filhos'>
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
    </Card>

{/**/}

{/*<Primeiro /> 
<ComParametro titulo='Esse é o título' subtitulo='Esse é o subtítulo'/>*/}
</div>