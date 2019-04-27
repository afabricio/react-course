import React, {Component} from 'react';
import './Subdominante1.css';

import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';

export default class Subdominante1 extends Component{

    subdominante1;

    constructor(props) {
        super();
        this.subdominante1 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
    }

    render(){
        return (  
            <div className="subdominante1  tooltip"  >

                <span class="tooltiptext">{this.subdominante1.SIMBOLO + TIPOACORDE.DORICO.SIMBOLO } </span>
            </div>
        )
    }

}  