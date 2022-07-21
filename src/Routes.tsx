import {
	BrowserRouter as Router, 
	Routes, // ensure that only one route stay visible
	Route
} from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Catalog } from './pages/Catalog'

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/catalog" element={<Catalog />}/>
				<Route path="/cart" element={<Cart />}/>
			</Routes>
		</Router>
	)
}