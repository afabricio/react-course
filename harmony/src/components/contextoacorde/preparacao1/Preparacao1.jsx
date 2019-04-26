import React from 'react'
import './Preparacao1.css'
import Subdominante from './Subdominante'
import Dominante from './Dominante'

export default props =>
                <div className="preparacao1">
                    <Subdominante/>
                    
                    <Dominante {...props} />
                </div>