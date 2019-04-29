import React, {Component} from 'react'
import './Subdominante3.css'

import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Subdominante3 extends Component{

    subdominante3;

    constructor(props) {
        super();
        this.subdominante3 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
    }

    render(){
        return (  
            <div className="subdominante3  tooltip" onClick={e=> this.props.click(this.subdominante3.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO)}>
                <span className="tooltiptext">{this.subdominante3.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO }</span>
                <img src={require('../../../image/subdominante3.png')}  />
            </div>
        )
    }

}                