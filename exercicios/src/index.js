import React from 'react'
import ReactDOM from 'react-dom'



import Pai from './componentes/Pai2'
import Filho from './componentes/Filho'

ReactDOM.render(
<div>
    <Pai nome="Paulo" sobrenome="Silva" >
        <Filho nome="Pedro" />
        
        <Filho nome="João" />
    </Pai>
</div>
,document.getElementById('root'))




//import Saudacao from  './componentes/Saudacao'
//ReactDOM.render(
//<div>
//    <Saudacao tipo="Bom dia" nome="João"/>
//</div>
//,document.getElementById('root'))


//import Multi, {  BoaNoite} from './componentes/Multiplos'

//ReactDOM.render(
//<div>
//    <Multi.BoaTarde nome="111"></Multi.BoaTarde>
//    <BoaNoite nome="222"></BoaNoite>
//</div>
//,document.getElementById('root'))



//import Bomdia from './componentes/Bomdia'
//ReactDOM.render(<Bomdia nome="Guilherme" />,document.getElementById('root'))




