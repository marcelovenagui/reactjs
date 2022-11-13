import React from "react";
import './card.css'
export default props =>
    <div className="card">
        <div className="Conteudo">
            {props.Children}
        </div>
        <div className="Footer">
            {props.titulo}
        </div>
    </div>