import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'


const initialState= {

    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}   



export default class Calculator extends Component{

    state = {...initialState}

    clearMemory(){
        this.setState({...initialState})    


        console.log('limpar')
    
    }
    
    setOperation(operation){

        if(this.state.current === 0){
            this.setState({operation, current:1, clearDisplay: true})
        }else{
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            switch(currentOperation) {
                case '+':
                  values[0] = values[0] + values[1]
                  break;
                case '-':
                  values[0] = values[0] - values[1]
                  break;
                case '*':
                  values[0] = values[0] * values[1]
                  break;
                case '/':
                  values[0] = values[0] / values[1]
                  break;
                  // code block
              }
              values[1] = 0


              this.setState({
                  displayValue: values[0], 
                  values,
                  current: equals? 0 : 1,
                  operation: equals ? null: operation,
                  clearDisplay: !equals,
                })

                console.log(values)
        }


       
    }
    
    
    addDigit(d){

        if(d ==='.' && this.state.displayValue.includes('.')){
            return
        }

       const clearDisplay = this.state.displayValue === '0'
       || this.state.clearDisplay

       const currentValue = clearDisplay ? '' : this.state.displayValue
       const displayValue = currentValue + d
       this.setState({displayValue, clearDisplay: false})

       if(d !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)

       }
    }

        render(){ 
             const addDigit = n =>this.addDigit(n)
            const setOperation = n =>this.setOperation(n)

            
            return ( 

                <div className="calculator">
                    <Display value={this.state.displayValue} />
                    <Button label="AC" triple triple click={() => this.clearMemory()}/>
                    <Button label="/" operation click={setOperation}/>
                    <Button label="7" click={addDigit} />
                    <Button label="8" click={addDigit}/>
                    <Button label="9" click={addDigit}/>
                    <Button label="*" operation click={setOperation}/>
                    <Button label="4" click={addDigit}/>
                    <Button label="5" click={addDigit}/>
                    <Button label="6" click={addDigit}/>
                    <Button label="-" operation click={setOperation}/>
                    <Button label="1" click={addDigit}/>
                    <Button label="2" click={addDigit}/>
                    <Button label="3" click={addDigit}/>
                    <Button label="+" operation click={setOperation}/>
                    <Button label="0" click={addDigit} double/>
                    <Button label="."  click={addDigit}/>
                    <Button label="=" operation click={setOperation}/>


                </div>
            )


        }




}