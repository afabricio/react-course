import React, {Component} from 'react';
import './Subdominante1.css';

import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';

export default class Subdominante1 extends Component{

    subdominante1;

    constructor(props) {
        super();
        this.subdominante1 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
    }

    render(){
        return (  
            <div className="subdominante1  tooltip" onClick={e=> this.props.click(this.subdominante1.SIMBOLO + MODO.DORICO.SIMBOLO)} >

                <span className="tooltiptext">{this.subdominante1.SIMBOLO + MODO.DORICO.SIMBOLO } </span>
            </div>
        )
    }

}  