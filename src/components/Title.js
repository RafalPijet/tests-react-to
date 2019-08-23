import React from "react";
import PropTypes from "prop-types";

const Title = props => <h1 style={{color: props.color}}>{props.info}</h1>;

Title.propTypes = {
    info: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Title;
