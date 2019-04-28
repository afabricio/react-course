import React, {Component} from 'react'
import './Ciclo.css'
import CampoHarmonico from '../campoharmonico/CampoHarmonico'
import { TIPOACORDE, NOTA }  from '../../Global'
import ReactDOM from 'react-dom'


export default class Ciclo extends Component{



    constructor(props) {
        super(props);


        this.spinRigth = this.spinRigth.bind(this);
        this.spinLeft = this.spinLeft.bind(this);


      }
    

    spinRigth() {
       var ciclo = ReactDOM.findDOMNode(this).firstChild;
       ciclo.insertBefore(ciclo.lastChild,ciclo.firstChild )
      
    }

    spinLeft() {
        var ciclo = ReactDOM.findDOMNode(this).firstChild;


        ciclo.appendChild(ciclo.firstChild )
       
     }   



    render(){



        return (
            <React.Fragment>
           <div className="quadroecontrole">
                <div className="ciclo">
                    <CampoHarmonico  tonica={NOTA.DO} modo={TIPOACORDE.JONIO} click={this.props.click} />
                    <CampoHarmonico tonica={NOTA.RE} modo={TIPOACORDE.DORICO} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.MI} modo={TIPOACORDE.FRIGIO} click={this.props.click}/>
                    <CampoHarmonico tonica={NOTA.FA} modo={TIPOACORDE.LIDIO} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.SOL} modo={TIPOACORDE.MIXOLIDIO} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.LA} modo={TIPOACORDE.EOLIO} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.SI} modo={TIPOACORDE.LOCRIO} click={this.props.click}/>

                    
                </div>
                <div  className="controle">
                    <input type="button" value="<<" onClick={this.spinLeft} />
                    <input type="button" value=">>" onClick={this.spinRigth} />
                    <input type="button" value="clear" onClick={e=> this.props.clear()} />
                </div>
            </div>
      
            </React.Fragment>
        )
    }

}