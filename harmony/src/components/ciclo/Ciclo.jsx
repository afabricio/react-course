import React, {Component} from 'react'
import './Ciclo.css'
import CampoHarmonico from '../campoharmonico/CampoHarmonico'
import { MODO, NOTA, getNotaByIntervalo }  from '../../Global'
import ReactDOM from 'react-dom'


export default class Ciclo extends Component{




    constructor(props) {
        super(props);


      

        this.notasCiclo = [];





       for(var M in MODO.HARMONICA){
            this.modoNatural =MODO.NATURAL[M];  
            break;
        }  
        for(var M in MODO.MELODICA){
            this.modoNatural =MODO.NATURAL[M];  
            break;
        }

        var n = props.tonica;
         for (var i = 0; i < 12; i++) { 
            this.notasCiclo.push(n);
            n = getNotaByIntervalo(n, props.intervalo) ;
        }


        this.spinRigth = this.spinRigth.bind(this);
        this.spinLeft = this.spinLeft.bind(this);
        this.showNatural = this.showNatural.bind(this);
        this.showHarmonica = this.showHarmonica.bind(this);
        this.showMelodica = this.showMelodica.bind(this);
        
        
        
      }
    
      showNatural(){

        var listaciclos = ReactDOM.findDOMNode(this).querySelectorAll('.ciclo');

        listaciclos.forEach((ciclo,index)=>{
            if(ciclo.id === 'natural'){
                ciclo.style.visibility= 'visible';
            }else{
                ciclo.style.visibility= 'hidden';
            }       
         });

      }

      showHarmonica(){

        var listaciclos = ReactDOM.findDOMNode(this).querySelectorAll('.ciclo');

        listaciclos.forEach((ciclo,index)=>{
            if(ciclo.id === 'harmonica'){
                ciclo.style.visibility= 'visible';
            }else{
                ciclo.style.visibility= 'hidden';
            }       
         });

      }

      showMelodica(){

        var listaciclos = ReactDOM.findDOMNode(this).querySelectorAll('.ciclo');

        listaciclos.forEach((ciclo,index)=>{
            if(ciclo.id === 'melodica'){
                ciclo.style.visibility= 'visible';
            }else{
                ciclo.style.visibility= 'hidden';
            }       
         });

      }

    spinRigth() {
       var listaciclos = ReactDOM.findDOMNode(this).querySelectorAll('.ciclo');

       listaciclos.forEach((ciclo,index)=>{
          ciclo.insertBefore(ciclo.lastChild,ciclo.firstChild )
        });

    }

    spinLeft() {

        var listaciclos = ReactDOM.findDOMNode(this).querySelectorAll('.ciclo');
        listaciclos.forEach((ciclo,index)=>{
            ciclo.appendChild(ciclo.firstChild )
        });
       
     }   



    render(){



        return (
            <React.Fragment>
 
                    <div className="quadro">
    
                        <div className="ciclo" id="natural" >

                            {
                                this.notasCiclo.map((nota, index) => {

                                    var modo;
                                    var cont =0;
                                    for(var M in MODO.NATURAL){
                                        modo =MODO.NATURAL[M];  
                                        if (this.props.grau == cont++) break;
                                   }

                                    return <CampoHarmonico  tonica={nota} modo={modo} click={this.props.click} />
                                  })
                            }
                        
                            


                            
                        </div>


                        <div className="ciclo" id="harmonica" style={{visibility: 'hidden'}} >
                        
                        {
                            this.notasCiclo.map((nota, index) => {
                                var modo;
                                var cont =0;
                                for(var M in MODO.HARMONICA){
                                    modo =MODO.HARMONICA[M];  
                                    if (this.props.grau == cont++) break;
                                }
                                return <CampoHarmonico  tonica={nota} modo={modo} click={this.props.click} />
                            })
                        }
  
                        </div>
        


                        <div className="ciclo" id="melodica" style={{visibility: 'hidden'}}>
                        
                        {
                            this.notasCiclo.map((nota, index) => {
                                var modo;
                                var cont =0;
                                for(var M in MODO.MELODICA){
                                    modo =MODO.MELODICA[M];  
                                    if (this.props.grau == cont++) break;
                                }
                                return <CampoHarmonico  tonica={nota} modo={modo} click={this.props.click} />
                            })
                        }

                            
 
                        </div>



                    </div>

                    <div  className="controle">
                        <input type="button" value="<<" onClick={this.spinLeft} />
                        <input type="button" value=">>" onClick={this.spinRigth} />
                        <input type="button" value="clear" onClick={e=> this.props.clear()} />
                        <input type="button" value="natural" onClick={this.showNatural} />
                        <input type="button" value="harmonica" onClick={this.showHarmonica} />
                        <input type="button" value="melodica" onClick={this.showMelodica} />
                    </div>

            </React.Fragment>
        )
    }

}