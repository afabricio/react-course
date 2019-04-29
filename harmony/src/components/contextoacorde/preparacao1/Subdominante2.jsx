import React, {Component} from 'react'
import './Subdominante2.css'

import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Subdominante2 extends Component{

    subdominante2;

    constructor(props) {
        super();
        this.subdominante2 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
    }

    render(){
        return (  
            <div className="subdominante2  tooltip" onClick={e=> this.props.click(this.subdominante2.SIMBOLO+ MODO.NATURAL.LOCRIO.SIMBOLO )}>
                <span className="tooltiptext">{this.subdominante2.SIMBOLO+ MODO.NATURAL.LOCRIO.SIMBOLO }</span>
                <img src={require('../../../image/subdominante2.png')}  />
            </div>
        )
    }

}  