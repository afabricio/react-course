import React, {Component} from 'react'
import './SubII.css'
import { MODO, getNotaByIntervalo, INTERVALO, ACORDE } from '../../../Global';



export default class SubII extends Component{

    dominante;

    constructor(props) {
        super(props);
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA_AUMENTADA)

        if(this.props.principal)
            this.state = {img :require('../../../image/subiiPrinc.png')};
        else
            this.state = {img :require('../../../image/subii.png')};
    }

    mouseOut() {
       if(this.props.principal)
            this.setState({img :require('../../../image/subiiPrinc.png')});
       else
            this.setState({img :require('../../../image/subii.png')});

    }
      
    mouseOver() {
       if(this.props.principal)
            this.setState({img :require('../../../image/subii2Princ.png')});
       else
            this.setState({img :require('../../../image/subii2.png')});
    }


    render(){

        return (
           
            <div className="subII  tooltip"  
            onMouseOver={() => this.mouseOver()} 
                    onMouseOut={() => this.mouseOut()}
            onClick={e=> this.props.click(new ACORDE(this.dominante, MODO.NATURAL.DORICO)) }>

                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.NATURAL.DORICO.SIMBOLO }</span>
                <img  src={this.state.img}  />
            </div>
            

        )
    }

}                                