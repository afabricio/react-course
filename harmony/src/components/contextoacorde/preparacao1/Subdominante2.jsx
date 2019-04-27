import React, {Component} from 'react'
import './Subdominante2.css'

import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Subdominante2 extends Component{

    subdominante2;

    constructor(props) {
        super();
        this.subdominante2 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
    }

    render(){
        return (  
            <div className="subdominante2  tooltip" >
                <span class="tooltiptext">{this.subdominante2.SIMBOLO+ TIPOACORDE.LOCRIO.SIMBOLO }</span>
            </div>
        )
    }

}  