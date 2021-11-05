import React from "react";
import "./ViewClothes.css";
import { Accordion, Card, Button } from "react-bootstrap";
import { Square } from "react-bootstrap-icons";
import Product from "../Product/Product";

const ViewClothes = () => {
  const Products = (
    <div>
      <div className="products__row">
        <Product
          id="12361527"
          title="Legend 7 T-Shirt Meteor Grey"
          price="299"
          image="https://images.bewakoof.com/t320/legend-7-net-double-tape-panel-t-shirt-meteor-grey--neon-green-men-s-printed-double-tape-panel-t-shirt-277909-1597482458.jpg"
        />
        <Product
          id="12361527"
          title="Legend 7 T-Shirt Meteor Grey"
          price="299"
          image="https://images.bewakoof.com/t320/world-peace-half-sleeve-t-shirt-men-s-printed-t-shirts-231465-1585828751.jpg"
        />
        <Product
          id="12361527"
          title="Legend 7 T-Shirt Meteor Grey"
          price="299"
          image="https://images.bewakoof.com/t320/legend-7-net-half-sleeve-t-shirt-black-men-s-printed-t-shirts-277905-1597482366.jpg"
        />
        <Product
          id="12361527"
          title="Legend 7 T-Shirt Meteor Grey"
          price="299"
          image="https://images.bewakoof.com/t320/young-forever-side-half-sleeve-t-shirt-white-men-s-printed-t-shirts-277586-1597205973.jpg"
        />
        <Product
          id="12361527"
          title="Legend 7 T-Shirt Meteor Grey"
          price="299"
          image="https://images.bewakoof.com/t320/keep-it-simple-half-sleeve-t-shirt-men-s-printed-t-shirts-276741-1596097454.jpg"
        />
        <Product
          id="12361527"
          title="Legend 7 T-Shirt Meteor Grey"
          price="299"
          image="https://images.bewakoof.com/t320/your-way-half-sleeve-t-shirt-frosty-pink-men-s-printed-t-shirts-277492-1596525813.jpg"
        />

        <Product
          id="12361527"
          title="Legend 7 T-Shirt Meteor Grey"
          price="299"
          image="https://images.bewakoof.com/t320/pride-india-half-sleeve-t-shirt-men-s-printed-t-shirts-276412-1595823929.jpg"
        />
        <Product
          id="12361527"
          title="Legend 7 T-Shirt Meteor Grey"
          price="299"
          image="https://images.bewakoof.com/t320/jet-black-half-sleeve-t-shirt-men-s-plain-t-shirts-106-1583736939.jpg"
        />
        <Product
          id="12361527"
          title="Legend 7 T-Shirt Meteor Grey"
          price="299"
          image="https://images.bewakoof.com/t320/pastel-aqua-raw-edge-halfsleeve-t-shirt-men-s-plain-round-neck-halfsleeve-slub-t-shirt-275301-1596012197.jpg"
        />
      </div>
    </div>
  );

  const ExpansionPanel = (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Category
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <span className="listing__Box">T-Shirt</span>
            <span className="listing__Box">T-Shirt Combo</span>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Sizes
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <span className="listing__Box">S</span>
            <span className="listing__Box">M</span>
            <span className="listing__Box">L</span>
            <span className="listing__Box">XL</span>
            <span className="listing__Box">2XL</span>
            <span className="listing__Box">3XL</span>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Colors
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "10px",
              }}
            >
              <Square className="black__color" size={30} />
              <Square className="blue__color" size={30} />
              <Square className="grey__color" size={30} />
              <Square className="yellow__color" size={30} />
              <Square className="cream__color" size={30} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "10px",
              }}
            >
              <Square className="red__color" size={30} />
              <Square className="white__color" size={30} />
              <Square className="orange__color" size={30} />
              <Square className="aqua__color" size={30} />
              <Square className="green__color" size={30} />
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Design
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <span className="listing__Box">Test Printed</span>
            <span className="listing__Box">Plain</span>
            <span className="listing__Box">Printed</span>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            Sizes
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            <span className="listing__Box">Round Neck</span>
            <span className="listing__Box">Polo</span>
            <span className="listing__Box">V Neck</span>
            <span className="listing__Box">Two Piece Collar</span>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="5">
            Sort By
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            <span className="listing__Box">Popular</span>
            <span className="listing__Box">New</span>
            <span className="listing__Box">Price: High to Low</span>
            <span className="listing__Box">Price: Low to High</span>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );

  return (
    <div className="viewClothes">
      <span className="category__name">T-Shirts For Men</span>
      <hr />
      <div className="row">
        <div className="sidebar">
          <h4 className="filter">FILTERS</h4>
          <div className="sidebar__accordion">{ExpansionPanel}</div>
        </div>
        <div className="products">
          {Products}
          {Products}
          {Products}
        </div>
      </div>
    </div>
  );
};

export default ViewClothes;
