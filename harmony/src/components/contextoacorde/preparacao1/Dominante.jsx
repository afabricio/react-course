import React, {Component} from 'react'
import './Dominante.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Dominante extends Component{



    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA)

    }

//data-tip={this.dominante.SIMBOLO+ MODO.MIXOLIDIO.SIMBOLO }
    render(){

        return (
           
            
            <div className="dominante tooltip" onClick={e=> this.props.click(this.dominante.SIMBOLO+ MODO.MIXOLIDIO.SIMBOLO)}>


                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.MIXOLIDIO.SIMBOLO }</span>
            </div>
           
            

        )
    }

}                