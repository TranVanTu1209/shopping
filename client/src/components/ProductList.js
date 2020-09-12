import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const ProductList = ({ products, addToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);

  const showProductDetail = (_id, title, price, image, description, availableSizes) => {
    setShowModal(true);
    setProduct({ _id, title, image, description, availableSizes, price });
  }
  const hideProductDetail = () => {
    setShowModal(false);
    setProduct(null);
  }
  return (
    <main className="productList">
      <Fade bottom cascade>
        {
          products.map(({ _id, title, price, image, description, availableSizes }) => (
            <article className="productItem" key={_id}>
              <img src={image} alt={title} onClick={() => showProductDetail(_id, title, price, image, description, availableSizes)} />
              <p className="productTitle">
                {title}
              </p>
              <div className="productAction">
                <p className="productPrice"> $ <strong> {price} </strong> </p>
                <button className="btn" onClick={() => addToCart({ _id, title, price, image, description, availableSizes })}>
                  Add to cart
              </button>
              </div>
            </article>
          ))
        }
      </Fade>
      <Modal ariaHideApp={false} isOpen={showModal}>
        {
          product && <div className="productDetail">
            <header>
              <h3> Enjoy your shopping time  </h3>
              <IconButton onClick={hideProductDetail} ><CloseIcon /> </IconButton>
            </header>
            <main>
              <div className="productDetail__left">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="productDetail__right">
                <h3> {product.title} </h3>
                <p>
                  {product.description}
                </p>
                <div className="sizes">
                  Alailable sizes :  {
                    product.availableSizes.map(size => <span key={size}> {size} </span>)
                  }

                </div>
                <p> $ <strong> {product.price} </strong> </p>
                <button className="btn" onClick={() => addToCart(product)} >Add to basket</button>
              </div>
            </main>
          </div>
        }

      </Modal>
    </main>
  )
}

export default ProductList;
