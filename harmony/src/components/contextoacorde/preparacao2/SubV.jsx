import React, {Component} from 'react'
import './SubV.css'
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';
import ReactTooltip from 'react-tooltip';




export default class SubV extends Component{

    dominante;

    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MENOR)

    }


    render(){

        return (
           
            <div className="subv" data-tip={this.dominante.SIMBOLO+ TIPOACORDE.MIXOLIDIO.SIMBOLO }>

                <ReactTooltip />
            </div>
            

        )
    }

}                
                