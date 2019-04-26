import React from 'react'
import './ContextoAcorde.css'
import Preparacao1 from './preparacao1/Preparacao1'
import Preparacao2 from './preparacao2/Preparacao2'
import Preparacao3 from './preparacao3/Preparacao3'
import Alvo from './Alvo'


export default props =>
            <div className="contextoacorde" >
                
                <Preparacao1 {...props} />

                <Alvo {...props} />

                <Preparacao2/>

                <Preparacao3/> 
            </div>

