import React, {Component} from 'react'
import './SubV.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';





export default class SubV extends Component{

    dominante;

    constructor(props) {
        super(props);
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MENOR)

    }


    render(){

        return (
           
            <div className="subv  tooltip"  onClick={e=> this.props.click(this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO) } >

                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO }</span>
                <img src={require('../../../image/subv.png')}  />
            </div>
            

        )
    }

}                
                