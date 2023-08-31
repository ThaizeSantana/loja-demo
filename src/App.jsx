import { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios'

//Estado
function App() {
  const [count, setCount] = useState(0)
  const [subTitulo, setSubTitulo] = useState("")

const [produtos, setProdutos] = useState([])

async function handleGetProducts() {
  const {data} = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  setProdutos(data)
 }

useEffect(() => {
 handleGetProducts()
}, [])

  //Cards
  
  //Retorno
  return (
    <>
    <div className='topBar'>
      <img src="https://images.tcdn.com.br/img/img_prod/688469/1595443106_logo-loja.png" width={103} height={50} /> 
    </div>
    <div className="container">
    {
      //map(item) =  percorrendo os elementos
      produtos.map((item) => (
        <div className="caixinha">
          <img src={item.image_link} alt={item.name} width={100}  />
        
          <span className="titulo">{item.name}</span>
          <span className="texto">R$ {item.price}</span>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default App
