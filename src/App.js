import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Home from "./Component/Home";
import { Route, Switch } from "react-router-dom";
import Display from "./Component/Display";

function App() {
  let [files, setFiles] = useState([]);
  let [field, setField] = useState([]);
  console.log(field);
  return (
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              files={files}
              field={field}
              setField={setField}
              setFiles={setFiles}
            />
          )}
        />
        <Route
          path="/display"
          render={(props) => (
            <Display
              {...props}
              files={files}
              field={field}
              setField={setField}
              setFiles={setFiles}
            />
          )}
        />
      </Switch>
    </Container>
  );
}

export default App;
