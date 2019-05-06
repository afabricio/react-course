import React, {Component} from 'react'
import './Alvo.css'
import { ACORDE } from '../../Global';




export default class Alvo extends Component{



    constructor(props) {
        super(props);
        
        

        if(this.props.principal === true){
            this.state = {img :require('../../image/alvoPrinc.png')};
        }
        else{
            this.state = {img :require('../../image/alvo.png')};
        }
        
     
        this.mouseOver = this.mouseOver.bind(this);
  
    }

    mouseOut() {
        if(this.props.principal)
            this.setState({img :require('../../image/alvoPrinc.png')});
        else
            this.setState({img :require('../../image/alvo.png')});
    }
      
    mouseOver() {
 
        if(this.props.principal)
            this.setState({img :require('../../image/alvoPrinc2.png')});
        else
            this.setState({img :require('../../image/alvo2.png')});
    }

    
        render(){
    
            return (
 
                
                <div className ='alvo  tooltip'
                    onMouseOver={() => this.mouseOver()} 
                    onMouseOut={() => this.mouseOut()}  
                    onClick={e=> this.props.click(new ACORDE(this.props.tonica, this.props.modo, this.props.grau))} >
                <img src={this.state.img} style={{position:'absolute',align:'center'}} />
                        <span style={this.props.principal?
                            {position:'absolute', top: '20px', left: '5px', fontWeight: 'bold', fontSize: '12px',color:'white'}:
                            {position:'absolute', top: '20px', left: '5px'}
                            } >
                            {this.props.tonica.SIMBOLO}
                            {this.props.modo.SIMBOLO }
                        </span>
                        <span className="tooltiptext" >{this.props.tonica.SIMBOLO+ this.props.modo.SIMBOLO }</span>
               
                </div>
                

    
            )


        }
    
    } 




