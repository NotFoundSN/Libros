import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Libros from "./components/Libros";
import LibrosFiltrados from "./components/LibrosFiltrados";
import Libro from "./components/Libro";
import Categorias from "./components/Categorias";
import NuevoLibro from "./components/NuevoLibro";
import "./App.css";
import {
	//redireccionamiento
	BrowserRouter as Router,
	Routes,
	Route,
	//Link,
} from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<div className="background">
					<Header />
					<Navbar />
					<Routes>
						<Route path="libros" element={<Libros />} />
						<Route path="libros/:titulo" element={<LibrosFiltrados />} />
						<Route path="libro/:id" element={<Libro />} />
						<Route path="categorias" element={<Categorias />} />
						<Route path="nuevoLibro" element={<NuevoLibro />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
