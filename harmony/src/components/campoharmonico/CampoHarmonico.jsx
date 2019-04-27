import React, {Component} from 'react'
import './CampoHarmonico.css'
import { TIPOACORDE, getNotaByIntervalo } from '../../Global';
import ContextoAcorde from '../contextoacorde/ContextoAcorde'

export default class CampoHarmonico extends Component{



    constructor(props) {
        super();


    }


    render(){

        let rows = [];
        var modo = this.props.modo;
        this.props.modo.ESCALA.forEach(i => {

            rows.push(<ContextoAcorde tonica={getNotaByIntervalo(this.props.tonica,i)} tipoacorde={modo} />);
       
            modo = TIPOACORDE[modo.PROXIMO];
        });

        return (
           
            <div className="campoharmonico" >

                 

{rows}
                {

                    
                    this.props.modo.ESCALA.forEach(element => {
                        
                       // React.createElement('ContextoAcorde', {"tonica":this.props.tonica,"tipoacorde":TIPOACORDE.JONIO}, this);
                       
                    })
                }
                


            </div>
            

        )
    }

}      