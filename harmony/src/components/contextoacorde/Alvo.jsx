import React, {Component} from 'react'
import './Alvo.css'
import ReactTooltip from 'react-tooltip';
import { TIPOACORDE, getNotaByIntervalo, INTERVALO } from '../../Global';




export default class Alvo extends Component{


        constructor(props) {
            super();
 
    
        }
    
    
        render(){
    
            return (
               
                <div className="alvo" data-tip={this.props.tonica.SIMBOLO+ this.props.tipoacorde.SIMBOLO }>
                            {this.props.tonica.SIMBOLO}
                        {this.props.tipoacorde.SIMBOLO }
                    <ReactTooltip />
                </div>
                
    
            )
        }
    
    } 