import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Libros from "./components/Libros";
import Libro from "./components/Libro";
import "./App.css";
import {
	//redireccionamiento
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Navbar />
				<Routes>
					<Route path="libros" element={<Libros />} />
					<Route path="libro/:id" element={<Libro />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
