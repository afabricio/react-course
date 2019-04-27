import React, {Component} from 'react'
import './Dominante.css'
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';
import ReactTooltip from 'react-tooltip';

export default class Dominante extends Component{

    dominante;

    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA)

    }


    render(){

        return (
           
            <div className="dominante" data-tip={this.dominante.SIMBOLO+ TIPOACORDE.MIXOLIDIO.SIMBOLO }>

                <ReactTooltip />
            </div>
            

        )
    }

}                