import React from 'react';
import PropTypes from 'prop-types';

function ProductsTemplate({ state }) {

  return (
    <div className="products">
      {state.map((item) => {
        return (
          <div className="product-holder" key={item.name}>
            <h3 className="product-name"> {item.description}</h3>
            <a href={item.permalink}>
              <img
                src={item.image}
                alt={item.name}
                className="product-picture"
              />
            </a>
            <div className="product-category"> Categoria : {item.category}</div>
            <div className="product-price">
              $: {item.price} {item.currency}
            </div>
            <div className={item.style}>Fonte : {item.fonte} </div>
          </div>
        );
      })}
    </div>
  );
}

ProductsTemplate.propTypes = {
  state: PropTypes.func.isRequired,
};

export default ProductsTemplate;
