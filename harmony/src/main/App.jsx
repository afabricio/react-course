import React, {Component} from 'react'
import './App.css'
import Ciclo from '../components/ciclo/Ciclo'
import Display from '../components/display/Display'
import { NOTA, INTERVALO }  from '../Global'

import MIDISounds  from 'midi-sounds-react';

const initialState = {
    displayValue:[null]

}


export default class App extends Component{
 
    state= {...initialState}

    progressao = [];

    constructor(props) {
        super(props);


        this.addChord = this.addChord.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);


      }

    addChord(acorde){
        
        
        this.midiSounds.setMasterVolume(0.3);
        // INST ,NOTE, DURATION
        this.midiSounds.playChordNow(3,acorde.getNotasEmTercas(), 2);

        console.log(acorde.getNotasEmTercas());

        this.progressao.push(acorde);
        this.updateDisplay();

    }

    updateDisplay(){

        var appender='';

        for(const i of this.progressao){
            appender += ' '+ i.tonica.SIMBOLO+i.modo.SIMBOLO;
        }

        this.setState({displayValue:appender})
    }

    clearDisplay(){

        this.progressao= [];
        this.updateDisplay();
    }

    render(){
        return (
			<div className="app">
                <Ciclo tonica={NOTA.DO} intervalo={INTERVALO.QUINTA} grau={0} click={this.addChord}  clear={this.clearDisplay} />
               <Display value={this.state.displayValue}/>
               <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />

            </div>
             
        )
    }

}