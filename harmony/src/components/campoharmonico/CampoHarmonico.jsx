import React, {Component} from 'react'
import './CampoHarmonico.css'
import { MODO, getNotaByIntervalo } from '../../Global';
import ContextoAcorde from '../contextoacorde/ContextoAcorde'

export default class CampoHarmonico extends Component{




    render(){

        let rows = [];
        var m = this.props.modo;



       // var arrayMODOS = m.parentNode;
       var grau=0;
        this.props.modo.INTERVALOS.forEach(i => {

           
            rows.push(<ContextoAcorde grau={grau++} principal={this.props.principal} tonica={getNotaByIntervalo(this.props.tonica,i)} modo={m} click={this.props.click} />);
   
            m = MODO[m.PARENT][m.PROXIMO];
        });

        return (
           
            <div className="campoharmonico" >

                 

                {rows}

                


            </div>
            

        )
    }

}      