import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CarouselAnime from "./CarouselAnime";

export default function Home() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Error al cerrar sesion")
    }
  }

  return (
    <>
      <Card border="dark" style={{ width: 'auto' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Prueba Teleperformance</h2>
          <h3 className="text-center ">Usuario Actual</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}

          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Actualizar Usuario
          </Link>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card bg="dark" text="white" style={{ width: 'auto' }}
      >
        <Card.Body>
          <h2 className="text-center mt-100">{currentUser.email} esta es tu recomendacion de hoy!</h2>
          <div className="d-flex align-items-center justify-content-center">
            <CarouselAnime />
          </div>
        </Card.Body>

      </Card>
    </>
  )
}
