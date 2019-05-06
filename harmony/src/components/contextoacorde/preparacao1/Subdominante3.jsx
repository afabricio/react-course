import React, {Component} from 'react'
import './Subdominante3.css'

import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class Subdominante3 extends Component{

    subdominante3;

    constructor(props) {
        super();
        this.subdominante3 = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MAIOR)

        if(props.principal === true)
            this.state = {img :require('../../../image/subdominante3Princ.png')};
        else
            this.state = {img :require('../../../image/subdominante3.png')};
            
    }

    mouseOut() {
        if(this.props.principal === true)
            this.setState({img :require('../../../image/subdominante3Princ.png')});
        else
            this.setState({img :require('../../../image/subdominante3.png')});
     }
       
     mouseOver() {
        if(this.props.principal === true)
            this.setState({img :require('../../../image/subdominante3BPrinc.png')});
        else
            this.setState({img :require('../../../image/subdominante3B.png')});
     }

    render(){
        return (  
            <div className="subdominante3  tooltip" 
            
            onMouseOver={() => this.mouseOver()} 
            onMouseOut={() => this.mouseOut()}
            onClick={e=> this.props.click(this.subdominante3.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO)}>
                <span className="tooltiptext">{this.subdominante3.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO }</span>
                <img  src={this.state.img}  />
            </div>
        )
    }

}                