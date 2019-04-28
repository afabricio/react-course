import React, {Component} from 'react'
import './Ciclo.css'
import CampoHarmonico from '../campoharmonico/CampoHarmonico'
import { MODO, NOTA }  from '../../Global'
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
           maior
                <div className="ciclo">
                    <CampoHarmonico  tonica={NOTA.DO} modo={MODO.JONIO} click={this.props.click} />
                    <CampoHarmonico tonica={NOTA.RE} modo={MODO.DORICO} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.MI} modo={MODO.FRIGIO} click={this.props.click}/>
                    <CampoHarmonico tonica={NOTA.FA} modo={MODO.LIDIO} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.SOL} modo={MODO.MIXOLIDIO} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.LA} modo={MODO.EOLIO} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.SI} modo={MODO.LOCRIO} click={this.props.click}/>

                    
                </div>

            harmonica
                <div className="ciclo">
                    <CampoHarmonico  tonica={NOTA.DO} modo={MODO.JONIO5AUM} click={this.props.click} />
                    <CampoHarmonico tonica={NOTA.RE} modo={MODO.DORICO4AUM} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.MI} modo={MODO.FRIGIO3} click={this.props.click}/>
                    <CampoHarmonico tonica={NOTA.FA} modo={MODO.LIDIO2AUM} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.SOLSUS} modo={MODO.ALT} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.LA} modo={MODO.EOLIO7MAIOR} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.SI} modo={MODO.LOCRIO6MAIOR} click={this.props.click}/>

                    
                </div>

            melodica
                <div className="ciclo">
                    <CampoHarmonico  tonica={NOTA.DO} modo={MODO.LIDIO5AUM} click={this.props.click} />
                    <CampoHarmonico tonica={NOTA.RE} modo={MODO.MIXOLIDIO4AUM} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.MI} modo={MODO.MIXOLIDIO6MENOR} click={this.props.click}/>
                    <CampoHarmonico tonica={NOTA.FASUS} modo={MODO.LOCRIO2AUM} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.SOLSUS} modo={MODO.SUPERLOCRIO} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.LA} modo={MODO.DORICO7MAIOR} click={this.props.click}/>
                    <CampoHarmonico  tonica={NOTA.SI} modo={MODO.FRIGIO6MAIOR} click={this.props.click}/>

                    
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