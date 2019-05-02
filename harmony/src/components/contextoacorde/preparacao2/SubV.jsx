import React, {Component} from 'react'
import './SubV.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';





export default class SubV extends Component{

    dominante;

    constructor(props) {
        super(props);
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MENOR)

        this.state = {img :require('../../../image/subv.png')};
    }

    mouseOut() {
       this.setState({img :require('../../../image/subv.png')});
    }
      
    mouseOver() {
       this.setState({img :require('../../../image/subv2.png')});
    }


    render(){

        return (
           
            <div className="subv  tooltip"  
            onMouseOver={() => this.mouseOver()} 
                    onMouseOut={() => this.mouseOut()}
            onClick={e=> this.props.click(this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO) } >

                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO }</span>
                <img  src={this.state.img}   />
            </div>
            

        )
    }

}                
                