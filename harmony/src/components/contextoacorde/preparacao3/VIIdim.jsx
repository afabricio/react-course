import React, {Component} from 'react'
import './VIIdim.css'
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class VIIdim extends Component{

    vii;

    constructor(props) {
        super();
        this.vii = getNotaByIntervalo(props.tonica,INTERVALO.SETIMA_MAIOR)

    }


    render(){

        return (
           
            <div className="vIIdim  tooltip" >

                <span class="tooltiptext">{this.vii.SIMBOLO+ TIPOACORDE.ALT.SIMBOLO }</span>
            </div>
            

        )
    }

}                                                