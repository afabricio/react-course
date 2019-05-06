import React, {Component} from 'react'
import './Dominante.css'
import { MODO, getNotaByIntervalo, INTERVALO, ACORDE } from '../../../Global';


export default class Dominante extends Component{



    constructor(props) {
        super();
        this.dominante = getNotaByIntervalo(props.tonica,INTERVALO.QUINTA)

        if(props.principal === true){
            this.state = {img :require('../../../image/dominantePrinc.png')};
        }
        else{
            this.state = {img :require('../../../image/dominante.png')};
        }


       
    }

    mouseOut() {
        

        if(this.props.principal)
            this.setState({img :require('../../../image/dominantePrinc.png')});
        else
            this.setState({img :require('../../../image/dominante.png')});

     }
       
     mouseOver() {

        if(this.props.principal)       
            this.setState({img :require('../../../image/dominante2Princ.png')});
        else
            this.setState({img :require('../../../image/dominante2.png')});    
     }

    render(){

        return (
           
            
            <div className="dominante tooltip" 
            onMouseOver={() => this.mouseOver()} 
            onMouseOut={() => this.mouseOut()}
             onClick={e=> this.props.click(new ACORDE(this.dominante,MODO.NATURAL.MIXOLIDIO))}>


                <span className="tooltiptext">{this.dominante.SIMBOLO+ MODO.NATURAL.MIXOLIDIO.SIMBOLO }</span>
                <img  src={this.state.img}  />
            </div>
           
            

        )
    }

}                