import React, {Component} from 'react'
import './CampoHarmonico.css'
import { MODO, getNotaByIntervalo } from '../../Global';
import ContextoAcorde from '../contextoacorde/ContextoAcorde'

export default class CampoHarmonico extends Component{



    constructor(props) {
        super(props);


    }


    render(){

        let rows = [];
        var modo = this.props.modo;
        this.props.modo.ESCALA.forEach(i => {

            rows.push(<ContextoAcorde tonica={getNotaByIntervalo(this.props.tonica,i)} modo={modo} click={this.props.click} />);
       
            modo = MODO[modo.PROXIMO];
        });

        return (
           
            <div className="campoharmonico" >

                 

                {rows}

                


            </div>
            

        )
    }

}      