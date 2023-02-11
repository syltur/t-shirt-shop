import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(
    props.sizes[0].additionalPrice
  );

  console.log(currentColor, currentSize, currentPrice);

  const getPrice = () => {
    return props.basePrice + currentPrice;
  };

  const title = props.title;

  const productToBasket = (e) => {
    e.preventDefault();
    return console.log(
      'Summary\n',
      '========\n',
      'Name: ',
      title,
      '\n',
      'Price: ',
      getPrice(),
      '\n',
      'Size: ',
      currentSize,
      '\n',
      'Color: ',
      currentColor
    );
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <ProductOptions
          sizes={props.sizes}
          size={props.size}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          price={props.price}
          additionalPrice={props.additionalPrice}
          setCurrentPrice={setCurrentPrice}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          productToBasket={productToBasket}
          onClick={props.onClick}
        />
      </div>
    </article>
  );
};

Product.propTypes = { props: PropTypes.any };

export default Product;