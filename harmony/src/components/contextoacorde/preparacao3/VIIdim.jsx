import React, {Component} from 'react'
import './VIIdim.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class VIIdim extends Component{

    vii;

    constructor(props) {
        super(props);
        this.vii = getNotaByIntervalo(props.tonica,INTERVALO.SETIMA_MAIOR)

        this.state = {img :require('../../../image/vii.png')};
    }

    mouseOut() {
       this.setState({img :require('../../../image/vii.png')});
    }
      
    mouseOver() {
       this.setState({img :require('../../../image/vii2.png')});
    }


    render(){

        return (
           
            <div className="vIIdim  tooltip"  
            onMouseOver={() => this.mouseOver()} 
                    onMouseOut={() => this.mouseOut()}
            
            onClick={e=> this.props.click(this.vii.SIMBOLO+ MODO.HARMONICA.ALT.SIMBOLO) }>

                <span className="tooltiptext">{this.vii.SIMBOLO+ MODO.HARMONICA.ALT.SIMBOLO }</span>
                <img  src={this.state.img}  />
            </div>
            

        )
    }

}                                                