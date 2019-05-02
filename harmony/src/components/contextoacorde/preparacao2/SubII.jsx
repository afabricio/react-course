import React, {Component} from 'react'
import './SubII.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';



export default class SubII extends Component{

    dominante;

    constructor(props) {
        super(props);
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA_AUMENTADA)

        this.state = {img :require('../../../image/subii.png')};
    }

    mouseOut() {
       this.setState({img :require('../../../image/subii.png')});
    }
      
    mouseOver() {
       this.setState({img :require('../../../image/subii2.png')});
    }


    render(){

        return (
           
            <div className="subII  tooltip"  
            onMouseOver={() => this.mouseOver()} 
                    onMouseOut={() => this.mouseOut()}
            onClick={e=> this.props.click(this.dominante.SIMBOLO+ MODO.NATURAL.DORICO.SIMBOLO) }>

                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.NATURAL.DORICO.SIMBOLO }</span>
                <img  src={this.state.img}  />
            </div>
            

        )
    }

}                                