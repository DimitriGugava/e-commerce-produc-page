import "./FirstPage.css";
import searchbar from "../icons/searchbar.svg";
import sneakers from "../icons/sneakers.svg";
import cart from "../icons/cart.svg";
import userprofilephoto from "../icons/userprofilephoto.svg";
import arrowright from "../icons/arrowright.svg";
import arrowleft from "../icons/arrowleft.svg";
import shoesphoto from "../icons/shoesphoto.svg";
import plus from "../icons/plus.svg";
import whitecart from "../icons/whitecart.svg";
import { useState } from "react";
import Cart from "./cart";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useRef } from "react";
import DropDownMenu from "./DropDownMenu";
import DesktopSlider from "./DekstopSlider";

const FirstPage = (props) => {
  const [index, setIndex] = useState(0);
  const [productNumber, setProductNumber] = useState(0);
  const [displayCart, setDisplayCart] = useState(false);
  const [num, setNum] = useState(props.info.currentPrice);
  const [addCartBtn, setAddCartBtn] = useState(false);
  const [numberOnCart, setNumberOncart] = useState(false);
  const buttonRef = useRef(null);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [dontShowNeedBtn, setDontShowNeedBtn] = useState(true);
  const [showDropDown, SetShowDropDown] = useState(false);
  const [showDesktopPhoto, setShowDesktopPhoto] = useState(false);
  const [sliderindex, setSliderIndex] = useState(0);
  const [forDesktopSlider, setForDesktopSlider] = useState(0);
  const slideToNextImage = () => {
    if (index < props.info.images.length - 1) {
      setIndex(index + 1);
    }
  };
  const slideToPreviousImage = () => {
    if (index > props.info.images.length - 4) {
      setIndex(index - 1);
    }
  };

  const numberOfProducts = (event) => {
    setProductNumber(event.target.value);
  };

  const addToCart = (props) => {
    if (productNumber >= 1 && numberOnCart === false) {
      setAddCartBtn(!addCartBtn);
      setNumberOncart(!numberOnCart);
      setDontShowNeedBtn(!dontShowNeedBtn);
    }
  };

  const addProduct = () => {
    if (productNumber >= 0) {
      setProductNumber(productNumber + 1);
    }
    setNum((productNumber + 1) * props.info.currentPrice);
  };
  const decreaseProduct = () => {
    if (productNumber >= 1) {
      setProductNumber(productNumber - 1);
      setNum(num - props.info.currentPrice);
    }
  };

  const showCart = (props) => {
    return setDisplayCart(!displayCart);
  };

  const deleteBtn = () => {
    setDeleteProduct(!deleteProduct);
    setNumberOncart(!numberOnCart);
    setDontShowNeedBtn(!dontShowNeedBtn);
    if (productNumber >= 1) {
      return setProductNumber(productNumber * 0);
    }
  };

  const closeDropDown = () => {
    return SetShowDropDown(!showDropDown);
  };
  const showDekstopSlider = () => {
    return setShowDesktopPhoto(!showDesktopPhoto);
  };

  const slideToNextImageSlider = () => {
    if (sliderindex < props.info.images.length - 1) {
      setSliderIndex(sliderindex + 1);
    }
  };
  const slideToPreviousImageSlider = () => {
    if (sliderindex > props.info.images.length - 4) {
      setSliderIndex(sliderindex - 1);
    }
  };

  const SliderChangeDesktop = () => {
    if (index < props.info.images.length - 1) {
      setIndex(index + 1);
    } else if (index >= 3) {
      setIndex(index - 3);
    }
  };

  const SliderChangeDesktopSlider = () => {
    if (sliderindex < props.info.images.length - 1) {
      setSliderIndex(sliderindex + 1);
    } else if (sliderindex >= 3) {
      setSliderIndex(sliderindex - 3);
    }
    console.log(props.sliderindex);
  };

  console.log(index);
  return (
    <div className="mainPageContainer">
      {showDesktopPhoto && (
        <DesktopSlider
          showCart={showCart}
          displayCart={displayCart}
          productNumber={productNumber}
          info={props.info}
          num={num}
          slideToNextImage={slideToNextImage}
          slideToPreviousImage={slideToPreviousImage}
          index={index}
          deleteBtn={deleteBtn}
          deleteProduct={deleteProduct}
          addCartBtn={addCartBtn}
          dontShowNeedBtn={dontShowNeedBtn}
          showDesktopPhoto={showDesktopPhoto}
          showDekstopSlider={showDekstopSlider}
          sliderindex={sliderindex}
          slideToNextImageSlider={slideToNextImageSlider}
          slideToPreviousImageSlider={slideToPreviousImageSlider}
          SliderChangeDesktopSlider={SliderChangeDesktopSlider}
        />
      )}
      {props.showDropDown ? null : (
        <DropDownMenu
          SetShowDropDown={SetShowDropDown}
          showDropDown={showDropDown}
          closeDropDown={closeDropDown}
        />
      )}
      <div className="firstPageHeader">
        <img
          src={searchbar}
          alt="searchbar"
          className="searchBar"
          onClick={closeDropDown}
        />

        <img src={sneakers} alt="sneakers" className="sneakers" />

        <div className="headerTextSectionDesktopOnly">
          <a className="textSection">Collections</a>
          <a className="textSection">Men</a>
          <a className="textSection">Women</a>
          <a className="textSection"> About</a>
          <a className="textSection">Contact</a>
        </div>

        <img src={cart} alt="cart" className="cart" onClick={showCart} />
        {numberOnCart && (
          <div className="numberInCartHeader">{productNumber}</div>
        )}
        <img
          src={userprofilephoto}
          alt="user profile photo"
          className="userprofilephoto"
        />
      </div>
      <div className="lineforDesktop"></div>
      <div className="photosAndSlider">
        <div className="arrowLeftBox" onClick={slideToPreviousImage}>
          <img src={arrowleft} alt="arrow left" className="arrowLeft" />
        </div>
        {!forDesktopSlider && (
          <img
            src={process.env.PUBLIC_URL + props.info.images[index]}
            alt="shoes photo"
            className="shoesphoto"
            onClick={showDekstopSlider}
          />
        )}
        <div className="arrowRightBox" onClick={slideToNextImage}>
          <img src={arrowright} className="arrowRight" alt="Arrow right" />
        </div>
      </div>

      <div className="allPhotosBox">
        <img
          src={process.env.PUBLIC_URL + props.info.images[1]}
          className="allPhotosPhotos"
          onClick={SliderChangeDesktop}
        />
        <img
          src={process.env.PUBLIC_URL + props.info.images[2]}
          className="allPhotosPhotos"
          onClick={SliderChangeDesktop}
        />
        <img
          src={process.env.PUBLIC_URL + props.info.images[3]}
          className="allPhotosPhotos"
          onClick={SliderChangeDesktop}
        />
        <img
          src={process.env.PUBLIC_URL + props.info.images[1]}
          className="allPhotosPhotos"
          onClick={SliderChangeDesktop}
        />
      </div>

      <Cart
        showCart={showCart}
        displayCart={displayCart}
        productNumber={productNumber}
        info={props.info}
        num={num}
        slideToNextImage={slideToNextImage}
        slideToPreviousImage={slideToPreviousImage}
        index={props.index}
        deleteBtn={deleteBtn}
        deleteProduct={deleteProduct}
        addCartBtn={addCartBtn}
        dontShowNeedBtn={dontShowNeedBtn}
      />
      <div className="productdetailsbox">
        <h3 className="companyname">{props.info.nameOfCompany}</h3>
        <h1 className="season">{props.info.season}</h1>
        <p className="description">{props.info.description}</p>
      </div>
      <div className="pricesbox">
        <h1 className="currentprice">${props.info.currentPrice}</h1>
        <div className="salebox">
          <a className="sale">{props.info.sale}%</a>
        </div>
        <a className="previousprice">${props.info.initialPrice}</a>
      </div>
      <div className="increasedecreaseproductsbox">
        <div className="minusbox" onClick={decreaseProduct}>
          <div className="minus"></div>
        </div>
        <div className="number" onChange={numberOfProducts}>
          {productNumber}
        </div>
        <div className="plusBox" onClick={addProduct}>
          <div className="plus"></div> <div className="plushorizontal"></div>
        </div>
      </div>
      <div className="addCartBox" onClick={addToCart}>
        <img className="whitecart" src={whitecart} />
        <a className="cartText">Add to cart</a>
      </div>
    </div>
  );
};

export default FirstPage;
