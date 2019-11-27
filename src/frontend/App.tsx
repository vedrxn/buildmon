import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Route } from 'react-router-dom'
import DashboardPage from './dashboard/DashboardPage.tsx'

export default () => (
  <Container className="p-0" fluid>
    <Row noGutters>
      <Col>
        <nav>nav-bar</nav>
      </Col>
      <Col as="main">
        <Route path="/">
          <DashboardPage />
        </Route>
      </Col>
    </Row>
  </Container>
)
