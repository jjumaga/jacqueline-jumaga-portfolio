import React from "react";
import "../styles/colorGrid.scss";

const ColorGrid = (props) => {
  return (
    <div className="color-grid">
      <div>
        <div className="beige">1</div>
        <div className="red">2</div>
        <div className="orange">3</div>
        <div className="brown">4</div>
      </div>
      <div>
        <div className="orange">5</div>
        <div className="brown">6</div>
        <div className="beige">7</div>
        <div className="red">8</div>
      </div>
      <div>
        <div className="beige">9</div>
        <div className="red">10</div>
        <div className="orange">11</div>
        <div className="brown">12</div>
      </div>
      <div></div>
    </div>
  );
};

export default ColorGrid;
