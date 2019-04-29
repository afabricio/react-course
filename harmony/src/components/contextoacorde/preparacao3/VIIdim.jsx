import React, {Component} from 'react'
import './VIIdim.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class VIIdim extends Component{

    vii;

    constructor(props) {
        super(props);
        this.vii = getNotaByIntervalo(props.tonica,INTERVALO.SETIMA_MAIOR)

    }


    render(){

        return (
           
            <div className="vIIdim  tooltip"  onClick={e=> this.props.click(this.vii.SIMBOLO+ MODO.HARMONICA.ALT.SIMBOLO) }>

                <span className="tooltiptext">{this.vii.SIMBOLO+ MODO.HARMONICA.ALT.SIMBOLO }</span>
                <img src={require('../../../image/vii.png')}  />
            </div>
            

        )
    }

}                                                