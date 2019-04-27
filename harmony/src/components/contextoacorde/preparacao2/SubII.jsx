import React, {Component} from 'react'
import './SubII.css'
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';



export default class SubII extends Component{

    dominante;

    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA_AUMENTADA)

    }


    render(){

        return (
           
            <div className="subII  tooltip">

                <span class="tooltiptext">{this.dominante.SIMBOLO+ TIPOACORDE.DORICO.SIMBOLO }</span>
            </div>
            

        )
    }

}                                