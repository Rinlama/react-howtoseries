import React from "react";
import "./card.css";
import PropTypes from "prop-types";

function Card(props) {
  const { customer } = props;

  return (
    <div className="card">{`${customer.name} - ${customer.creditLimit}`}</div>
  );
}

Card.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string,
    creditLimit: PropTypes.number,
  }),
};

export default Card;
