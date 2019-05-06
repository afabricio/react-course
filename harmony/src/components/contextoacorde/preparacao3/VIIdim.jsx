import React, {Component} from 'react'
import './VIIdim.css'
import { MODO, getNotaByIntervalo, INTERVALO } from '../../../Global';


export default class VIIdim extends Component{

    vii;

    constructor(props) {
        super(props);
        this.vii = getNotaByIntervalo(props.tonica,INTERVALO.SETIMA_MAIOR)
        if(this.props.principal)
            this.state = {img :require('../../../image/viiPrinc.png')};
        else
            this.state = {img :require('../../../image/vii.png')};
    }

    mouseOut() {
        if(this.props.principal)
            this.setState({img :require('../../../image/viiPrinc.png')});
       else
            this.setState({img :require('../../../image/vii.png')});
    }
      
    mouseOver() {
        if(this.props.principal)
            this.setState({img :require('../../../image/vii2Princ.png')});
       else
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