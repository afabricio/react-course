import React, {Component} from 'react'
import './SubII.css'
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';
import ReactTooltip from 'react-tooltip';


export default class SubII extends Component{

    dominante;

    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA_AUMENTADA)

    }


    render(){

        return (
           
            <div className="subII" data-tip={this.dominante.SIMBOLO+ TIPOACORDE.DORICO.SIMBOLO }>

                <ReactTooltip />
            </div>
            

        )
    }

}                                