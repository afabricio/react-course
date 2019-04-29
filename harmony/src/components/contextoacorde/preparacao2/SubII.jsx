import React, {Component} from 'react'
import './SubII.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';



export default class SubII extends Component{

    dominante;

    constructor(props) {
        super(props);
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA_AUMENTADA)

    }


    render(){

        return (
           
            <div className="subII  tooltip"  onClick={e=> this.props.click(this.dominante.SIMBOLO+ MODO.NATURAL.DORICO.SIMBOLO) }>

                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.NATURAL.DORICO.SIMBOLO }</span>
                <img src={require('../../../image/subii.png')}  />
            </div>
            

        )
    }

}                                