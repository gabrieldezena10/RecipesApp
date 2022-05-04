import React from 'react';
import PropTypes from 'prop-types';

const IngredientsCard = ({ name, index, src }) => (
  <div data-testid={ `${index}-ingredient-card` }>
    <img data-testid={ `${index}-card-img` } src={ src } alt={ name } />
    <p data-testid={ `${index}-card-name` }>{ name }</p>
  </div>
);

IngredientsCard.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default IngredientsCard;
