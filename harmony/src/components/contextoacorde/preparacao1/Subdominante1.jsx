import React, {Component} from 'react';
import './Subdominante1.css';
import ReactTooltip from 'react-tooltip';
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';

export default class Subdominante1 extends Component{

    subdominante1;

    constructor(props) {
        super();
        this.subdominante1 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
    }

    render(){
        return (  
            <div className="subdominante1"  data-tip={this.subdominante1.SIMBOLO + TIPOACORDE.DORICO.SIMBOLO } >
                <ReactTooltip />
            </div>
        )
    }

}  