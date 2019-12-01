import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Route } from 'react-router-dom'
import DashboardPage from './dashboard/DashboardPage.tsx'

export default () => (
  <Container className="p-0" fluid>
    <Route path="/">
      <DashboardPage />
    </Route>
  </Container>
)
