import React, {Component} from 'react'
import './Subdominante2.css'
import ReactTooltip from 'react-tooltip';
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Subdominante2 extends Component{

    subdominante2;

    constructor(props) {
        super();
        this.subdominante2 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
    }

    render(){
        return (  
            <div className="subdominante2" data-tip={this.subdominante2.SIMBOLO+ TIPOACORDE.LOCRIO.SIMBOLO }>
                <ReactTooltip />
            </div>
        )
    }

}  