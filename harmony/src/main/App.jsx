import React, {Component} from 'react'
import './App.css'
import CampoHarmonico from '../components/campoharmonico/CampoHarmonico'
import { TIPOACORDE, NOTA }  from '../Global'

export default class App extends Component{

    

    render(){
        return (
			<div className="app">
                <CampoHarmonico tonica={NOTA.DO} modo={TIPOACORDE.JONIO} />
                <CampoHarmonico tonica={NOTA.RE} modo={TIPOACORDE.DORICO} />
                <CampoHarmonico tonica={NOTA.MI} modo={TIPOACORDE.FRIGIO} />
                <CampoHarmonico tonica={NOTA.FA} modo={TIPOACORDE.LIDIO} />
                <CampoHarmonico tonica={NOTA.SOL} modo={TIPOACORDE.MIXOLIDIO} />
                <CampoHarmonico tonica={NOTA.LA} modo={TIPOACORDE.EOLIO} />
                <CampoHarmonico tonica={NOTA.SI} modo={TIPOACORDE.LOCRIO} />
            </div>
            
        )
    }

}