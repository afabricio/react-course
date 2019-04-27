import React, {Component} from 'react'
import './Alvo.css'






export default class Alvo extends Component{


        constructor(props) {
            super();
 
    
        }
    
    
        render(){
    
            return (
               
                <div className="alvo  tooltip" >
                            {this.props.tonica.SIMBOLO}
                        {this.props.tipoacorde.SIMBOLO }
                        <span class="tooltiptext">{this.props.tonica.SIMBOLO+ this.props.tipoacorde.SIMBOLO }</span>
                </div>
                
    
            )
        }
    
    } 