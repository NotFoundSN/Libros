import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NuevoLibro() {
	const [autores, setAutores] = useState([]);
	const [categorias, setCategorias] = useState([]);
	const navigate = useNavigate();

	const crearLibro = (evento) => {
		evento.preventDefault();
		let cuerpo = {
			title: evento.target.title.value,
			description: evento.target.description.value,
			category: evento.target.category.value,
			author: evento.target.author.value,
		};
		console.log(cuerpo);
		fetch(`http://127.0.0.1:4000/api/nuevoLibro`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(cuerpo),
		})
			.then((respuesta) => {
				respuesta.json().then((resultado) => {
					console.log(resultado);
					navigate("/libros");
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetch(`http://127.0.0.1:4000/api/autores`)
			.then((respuesta) => {
				respuesta.json().then((resultado) => {
					setAutores(resultado);
				});
			})
			.catch((error) => {
				console.log(error);
			});
		fetch(`http://127.0.0.1:4000/api/categorias`)
			.then((respuesta) => {
				respuesta.json().then((resultado) => {
					setCategorias(resultado);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<>
			<div className="card-holder">
				<div className="book-page">
					<form onSubmit={crearLibro} method="POST">
						<table>
							<tbody>
								<tr>
									<td className="section-title">Titulo</td>
									<td>
										<input
											type="text"
											id="title"
											name="title"
										></input>
									</td>
								</tr>
								<tr>
									<td className="section-title">
										Descripcion
									</td>
									<td>
										<textarea
											id="description"
											name="description"
											cols="40"
											rows="6"
										></textarea>
									</td>
								</tr>
								<tr>
									<td className="section-title">Categoria</td>
									<td>
										<select name="category" id="category">
											<option value="-1">
												Seleccione una opcion
											</option>
											{autores.length > 0 &&
												categorias.map((categoria) => {
													return (
														<option
															value={categoria.id}
															key={`categoria-list-${categoria.id}`}
														>
															{categoria.nombre}
														</option>
													);
												})}
										</select>
									</td>
								</tr>
								<tr>
									<td className="section-title">Autor</td>
									<td>
										<select name="author" id="author">
											<option value="-1">
												Seleccione una opcion
											</option>
											{autores.length > 0 &&
												autores.map((autor) => {
													return (
														<option
															value={autor.id}
															key={`autor-list-${autor.id}`}
														>
															{autor.nombre}
														</option>
													);
												})}
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<button>Guardar</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default NuevoLibro;
