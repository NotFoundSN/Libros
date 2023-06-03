import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Libros() {
	const [libros, setLibros] = useState([]);

	useEffect(() => {
		fetch("http://127.0.0.1:4000/api/libros")
		.then((respuesta) => {
			respuesta.json()
			.then((resultado) => {				
				setLibros(resultado);
			});
		});
	}, []);
	return (
		<>
			<div>
				{libros.length > 0 &&
					libros.map((libro, index) => {
						return (
							<Link to={`/libro/${libro.id}`}>
								<div
									className="card"
									key={`lista-libro-${index}`}
								>
									<span>{libro.titulo}</span>
									<span>{libro.autor}</span>
									<span>{libro.categoria}</span>
								</div>
							</Link>
						);
					})}
			</div>
		</>
	);
}

export default Libros;
