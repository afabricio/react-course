import React, {Component} from 'react'
import './Dominante.css'
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Dominante extends Component{

    dominante;

    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA)

    }

//data-tip={this.dominante.SIMBOLO+ TIPOACORDE.MIXOLIDIO.SIMBOLO }
    render(){

        return (
           
            
            <div className="dominante tooltip" onClick={e=> this.props.click(this.dominante.SIMBOLO+ TIPOACORDE.MIXOLIDIO.SIMBOLO)}>


                <span className="tooltiptext">{this.dominante.SIMBOLO+ TIPOACORDE.MIXOLIDIO.SIMBOLO }</span>
            </div>
           
            

        )
    }

}                