import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Libro() {
	const [libro, setLibro] = useState(null);
	let { id } = useParams();

	useEffect(() => {
		fetch(`http://127.0.0.1:4000/api/libro/${id}`)
			.then((respuesta) => {
				respuesta.json().then((resultado) => {
					setLibro(resultado);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<>
			{libro == null ? (
				<div>"no hay libro"</div>
			) : (
				<div>
					muestro los detalles del libro {id}
					<div>
						titulo: {libro.titulo} <br />
						descripcion: {libro.descripcion} <br />
						categoria: {libro.categoria} <br />
						autor: {libro.autor} <br />
					</div>
				</div>
			)}
		</>
	);
}

export default Libro;
