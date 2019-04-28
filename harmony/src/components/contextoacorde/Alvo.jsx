import React, {Component} from 'react'
import './Alvo.css'






export default class Alvo extends Component{




    
        render(){
    
            return (
               
                <div className="alvo  tooltip" onClick={e=> this.props.click(this.props.tonica.SIMBOLO + this.props.tipoacorde.SIMBOLO)} >
                            {this.props.tonica.SIMBOLO}
                        {this.props.tipoacorde.SIMBOLO }
                        <span id='ssss' className="tooltiptext">{this.props.tonica.SIMBOLO+ this.props.tipoacorde.SIMBOLO }</span>
                </div>
                

    
            )


        }
    
    } 




