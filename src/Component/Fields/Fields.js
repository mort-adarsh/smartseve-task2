import React, { useState } from "react";
import Item from "./Item";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Fields = ({ fields }) => {
  let [selected, setSelected] = useState([]);
  let [Final, SetFinal] = useState(false);
  let history = useHistory();
  let show = () => {
    history.push("/display");
  };
  return (
    <div
      style={{
        alignItems: "center",
        margin: "2.5em",
        border: "1.5px solid black",
        padding: "2em",
        boxShadow: "5px 2px 15px grey",
      }}
    >
      <span>Display Handling</span>
      <br /> <br />
      Select the fields to be displayed
      <div style={{
        margin: "2.5em",
      }}>
      <Row>
        <Col xs={12} md={3}>
          Available Fields
          <br />
        </Col>
        <Col xs={2}></Col>
        <Col md={3}>Fields to be Displayed</Col>
        <br /><br />
      </Row>
      <Row>
        <Col md={3} style={{ border: "1px solid grey" }}>
          {fields.map((el, index) => (
            <Item
              key={index}
              item={el.value}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </Col>
        <Col className="m-2 p-5" xs={2}>
          <button onClick={() => SetFinal(true)}>{">>"}</button>
          <br />
          <br />
          <button>{"<<"}</button>
        </Col>
        <Col md={3} style={{ border: "1px solid grey" }}>
          {Final ? (
            <>
              {selected.map((el, index) => (
                <Item
                  key={index}
                  item={el}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      </div>
      {Final ? (
        <>
          <Row className="m-2">
            <Col md={8}></Col>
            <Col md={4}>
              <button
                onClick={show}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "500",
                }}
              >
                {" "}
                Next
              </button>
              <span style={{ color: "red", margin: "1em" }}>cancel</span>
            </Col>
          </Row>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Fields;
