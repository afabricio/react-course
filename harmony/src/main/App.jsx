import React, {Component} from 'react'
import './App.css'
import Ciclo from '../components/ciclo/Ciclo'
import Display from '../components/display/Display'
import { MODO, NOTA }  from '../Global'


const initialState = {
    displayValue:'*'

}


export default class App extends Component{
 
    state= {...initialState}


    constructor(props) {
        super(props);


        this.addChord = this.addChord.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        

      }

    addChord(chord){

        const displayValue = this.state.displayValue+' '+chord;
        this.setState({displayValue})
    }

    clearDisplay(){

        this.setState({...initialState});

    }

    render(){
        return (
			<div className="app">
                <Ciclo  click={this.addChord}  clear={this.clearDisplay} />
               <Display value={this.state.displayValue}/>

            </div>
            
        )
    }

}