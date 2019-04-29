import React, {Component} from 'react'
import './Alvo.css'






export default class Alvo extends Component{




    
        render(){
    
            return (
               
                <div className="alvo  tooltip" onClick={e=> this.props.click(this.props.tonica.SIMBOLO + this.props.modo.SIMBOLO)} >
                <img src={require('../../image/alvo.png')} style={{position:'absolute',align:'center'}} />
                        <span style={{position:'absolute', top: '20px', left: '5px'}} >
                            {this.props.tonica.SIMBOLO}
                            {this.props.modo.SIMBOLO }
                        </span>
                        <span className="tooltiptext" >{this.props.tonica.SIMBOLO+ this.props.modo.SIMBOLO }</span>
               
                </div>
                

    
            )


        }
    
    } 




