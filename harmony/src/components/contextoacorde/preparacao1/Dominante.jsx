import React, {Component} from 'react'
import './Dominante.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Dominante extends Component{



    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA)

    }


    render(){

        return (
           
            
            <div className="dominante tooltip" onClick={e=> this.props.click(this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO)}>


                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO }</span>
                <img src={require('../../../image/dominante.png')}  />
            </div>
           
            

        )
    }

}                