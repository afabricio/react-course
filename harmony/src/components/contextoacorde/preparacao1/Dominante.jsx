import React, {Component} from 'react'
import './Dominante.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Dominante extends Component{



    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA)
        this.state = {img :require('../../../image/dominante.png')};
    }

    mouseOut() {
        this.setState({img :require('../../../image/dominante.png')});
     }
       
     mouseOver() {
        this.setState({img :require('../../../image/dominante2.png')});
     }

    render(){

        return (
           
            
            <div className="dominante tooltip" 
            onMouseOver={() => this.mouseOver()} 
            onMouseOut={() => this.mouseOut()}
             onClick={e=> this.props.click(this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO)}>


                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO }</span>
                <img  src={this.state.img}  />
            </div>
           
            

        )
    }

}                