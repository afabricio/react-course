import React, {Component} from 'react'
import './Subdominante3.css'

import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Subdominante3 extends Component{

    subdominante3;

    constructor(props) {
        super();
        this.subdominante3 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
    }

    render(){
        return (  
            <div className="subdominante3  tooltip" >
                <span class="tooltiptext">{this.subdominante3.SIMBOLO+ TIPOACORDE.MIXOLIDIO.SIMBOLO }</span>
            </div>
        )
    }

}                