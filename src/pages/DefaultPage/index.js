import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export const DefaultPage = ({ title }) => {
    return (
        <Container>
            <h2>{title}</h2>
            <Link to='/'>
                <h3>Volver a la Home</h3>
            </Link>
        </Container>
    )
}