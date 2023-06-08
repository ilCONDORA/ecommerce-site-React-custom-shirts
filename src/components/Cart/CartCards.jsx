import React from "react";

function CartCards(props) {
  //Print the Custom Shirt title if props.title === undefined because Genovese's localStorage doesn't have a title thing.
  let titlePresence;
  if (props.title === undefined) {
    titlePresence = "Custom Shirt";
  } else {
    titlePresence = props.title;
  }
  //And this time for the image that the user use for the Custom program.
  let customImagePresence;
  if (props.customImage !== undefined) {
    customImagePresence = (
      <div className="alignParagraphImageCustom">
        <img className="imgshirtcart" src={props.customImage} alt="shirt" />
      </div>
    );
  }
  //Well this is for showing the side of the print
  let side;
  if (props.side !== null && props.side !== undefined) {
    side = <div>Side: {props.side}</div>;
  }
  //Finally this is for the material of the shirt
  let material;
  if (props.material !== null && props.material !== undefined) {
    material = <div>Material: {props.material}</div>;
  }

  return (
    <div>
      <div className="customImageDivDirection">
        <img className="imgshirtcart" src={props.image} alt="shirt" />
        {customImagePresence}
      </div>
      <div className="descriptionarticle">
        <div>{titlePresence}</div>
        {material}
        {side}
        <div>Color: {props.color}</div>
        <div>Size: {props.size}</div>
      </div>
    </div>
  );
}

export default CartCards;
