import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoNoticias from './components/ListadoNoticias'

function App() {
	const [categoria, setCategoria] = useState('')
	const [noticias, setNoticias] = useState([])

	useEffect(() => {
		const consultarAPI = async () => {
			const API_KEY = '7e3fec38a7be4092bb23274dbd552632'
			const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${API_KEY}`
			const respuesta = await fetch(url)
			const noticias = await respuesta.json()
			setNoticias(noticias.articles)
		}
		consultarAPI()
	}, [categoria])

	return (
		<>
			<Header titulo="Buscador de Noticias" />
			<div className="container white">
				<Formulario setCategoria={setCategoria} />
				<ListadoNoticias noticias={noticias} />
			</div>
		</>
	)
}

export default App
