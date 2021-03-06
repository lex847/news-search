import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import NewsSearch from "../NewsSearch/NewsSearch";
import TopNews from "../TopNews/TopNews";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  return (
    <Router>
      <div className="App">
        <Navbar expand="md" className="justify-content-between">
          <Navbar.Brand>
            <Link
              to={process.env.PUBLIC_URL + "/"}
              className="text-decoration-none text-light"
            >
              News search
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-navigation" />
          <Navbar.Collapse id="navbar-navigation">
            <Nav className="mr-auto">
              <Link
                to={process.env.PUBLIC_URL + "/top-news"}
                className="text-light"
              >
                Top news
              </Link>
            </Nav>
            <Form
              inline
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <FormControl
                type="text"
                className="w-100"
                placeholder="Search here..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <NewsSearch query={query} />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/top-news"}>
            <TopNews query={query} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
