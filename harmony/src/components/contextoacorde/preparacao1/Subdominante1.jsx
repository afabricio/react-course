import React, {Component} from 'react';
import './Subdominante1.css';

import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';

export default class Subdominante1 extends Component{

    subdominante1;

    constructor(props) {
        super();
        this.subdominante1 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)
        this.state = {img :require('../../../image/subdominante1.png')};
    }

    mouseOut() {
        this.setState({img :require('../../../image/subdominante1.png')});
     }
       
     mouseOver() {
        this.setState({img :require('../../../image/subdominante1B.png')});
     }

    render(){
        return (  
            <div className="subdominante1  tooltip" 
            onMouseOver={() => this.mouseOver()} 
            onMouseOut={() => this.mouseOut()}
            onClick={e=> this.props.click(this.subdominante1.SIMBOLO + MODO.NATURAL.DORICO.SIMBOLO)} >

                <span className="tooltiptext">{this.subdominante1.SIMBOLO + MODO.NATURAL.DORICO.SIMBOLO } </span>
                <img  src={this.state.img}  />
            </div>
        )
    }

}  