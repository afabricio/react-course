import React from 'react'


function childrenWithProperties(props){
    return React.Children.map(props.children, child=> {
        return  React.cloneElement(child, {
             ...props, ...child.props
        })
     })
}

export default props=>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
    <ul>
        {
            childrenWithProperties(props)

            
        }
    </ul>    

    </div>