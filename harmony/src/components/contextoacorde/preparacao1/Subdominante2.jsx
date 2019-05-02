import React, {Component} from 'react'
import './Subdominante2.css'

import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Subdominante2 extends Component{

    subdominante2;

    constructor(props) {
        super();
        this.subdominante2 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
        this.state = {img :require('../../../image/subdominante2.png')};
    }

    mouseOut() {
        this.setState({img :require('../../../image/subdominante2.png')});
     }
       
     mouseOver() {
        this.setState({img :require('../../../image/subdominante2B.png')});
     }

    render(){
        return (  
            <div className="subdominante2  tooltip"
            onMouseOver={() => this.mouseOver()} 
            onMouseOut={() => this.mouseOut()}
            onClick={e=> this.props.click(this.subdominante2.SIMBOLO+ MODO.NATURAL.LOCRIO.SIMBOLO )}>
                <span className="tooltiptext">{this.subdominante2.SIMBOLO+ MODO.NATURAL.LOCRIO.SIMBOLO }</span>
                <img  src={this.state.img}  />
            </div>
        )
    }

}  