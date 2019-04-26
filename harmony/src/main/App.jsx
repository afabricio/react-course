import React, {Component} from 'react'
import ContextoAcorde from '../components/contextoacorde/ContextoAcorde'
import { TIPOACORDE, NOTA }  from '../Global'

export default class App extends Component{

    

    render(){
        return (
			<div className="app">
                <ContextoAcorde tonica={NOTA.DO} tipoacorde={TIPOACORDE.JONIO} />
            </div>
            
        )
    }

}