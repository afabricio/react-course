import React, {Component} from 'react'
import './VIIdim.css'
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../../Global';
import ReactTooltip from 'react-tooltip';

export default class VIIdim extends Component{

    vii;

    constructor(props) {
        super();
        this.vii = getNotaByIntervalo(props.tonica,INTERVALO.SETIMA_MAIOR)

    }


    render(){

        return (
           
            <div className="vIIdim" data-tip={this.vii.SIMBOLO+ TIPOACORDE.ALT.SIMBOLO }>

                <ReactTooltip />
            </div>
            

        )
    }

}                                                