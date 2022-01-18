import { useState } from 'react'

export default function useSelect(stateInicial, opciones) {
	const [state, setState] = useState(stateInicial)

	const SelectNoticias = () => (
		<select
			className="browser-default"
			value={state}
			onChange={e => setState(e.target.value)}
		>
			{opciones.map(opcion => (
				<option key={opcion.value} value={opcion.value}>
					{opcion.label}
				</option>
			))}
		</select>
	)
	return [state, SelectNoticias]
}