import React, {Component} from 'react'
import './SubV.css'
import { MODO, getNotaByIntervalo, INTERVALO,ACORDE } from '../../../Global';





export default class SubV extends Component{

    dominante;

    constructor(props) {
        super(props);
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.SEGUNDA_MENOR)

        if(this.props.principal)
            this.state = {img :require('../../../image/subvPrinc.png')};
        else
            this.state = {img :require('../../../image/subv.png')};
    }

    mouseOut() {
        if(this.props.principal)
            this.setState({img :require('../../../image/subvPrinc.png')});
        else
            this.setState({img :require('../../../image/subv.png')});
    }
      
    mouseOver() {
        if(this.props.principal)
            this.setState({img :require('../../../image/subv2Princ.png')});
        else
            this.setState({img :require('../../../image/subv2.png')});    
    }


    render(){

        return (
           
            <div className="subv  tooltip"  
            onMouseOver={() => this.mouseOver()} 
                    onMouseOut={() => this.mouseOut()}
            onClick={e=> this.props.click(new ACORDE(this.dominante,MODO.NATURAL.MIXOLIDIO)) } >

                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO }</span>
                <img  src={this.state.img}   />
            </div>
            

        )
    }

}                
                