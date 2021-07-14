import React from "react"
import CrearCuenta from "./CrearCuenta"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import InicioSesion from "./InicioSesion"
import PrivateRoute from "./PrivateRoute"
import OlvidoContraseña from "./OlvidoContraseña"
import ActualizarUsuario from "./ActualizarUsuario"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "1000px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/update-profile" component={ActualizarUsuario} />
              <Route path="/signup" component={CrearCuenta} />
              <Route path="/login" component={InicioSesion} />
              <Route path="/forgot-password" component={OlvidoContraseña} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
