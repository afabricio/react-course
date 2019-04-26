import React, {Component} from 'react'
import './Dominante.css'
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';

/* export default props =>
                <dominante className="dominante">
                    {props.tonica.SIMBOLO}
                    {TIPOACORDES.MIXOLIDIO.SIMBOLO}
                </dominante> */

export default class Dominante extends Component{

    dominante;

    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA)

    }


    render(){

        return (
            <div className="dominante">
                {this.dominante.SIMBOLO}
                {TIPOACORDE.MIXOLIDIO.SIMBOLO}
            </div>
            
        )
    }

}                