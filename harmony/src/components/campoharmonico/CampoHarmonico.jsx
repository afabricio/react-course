import React, {Component} from 'react'
import './CampoHarmonico.css'
import { TIPOACORDE, getNotaByIntervalo } from '../../Global';
import ContextoAcorde from '../contextoacorde/ContextoAcorde'

export default class CampoHarmonico extends Component{



    constructor(props) {
        super(props);


    }


    render(){

        let rows = [];
        var modo = this.props.modo;
        this.props.modo.ESCALA.forEach(i => {

            rows.push(<ContextoAcorde tonica={getNotaByIntervalo(this.props.tonica,i)} tipoacorde={modo} click={this.props.click} />);
       
            modo = TIPOACORDE[modo.PROXIMO];
        });

        return (
           
            <div className="campoharmonico" >

                 

                {rows}

                


            </div>
            

        )
    }

}      