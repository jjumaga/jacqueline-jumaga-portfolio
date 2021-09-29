import React from "react";
import "../styles/colorGrid.scss";

const ColorGrid = (props) => {
  return (
    <div className="color-grid">
      <div>
        <div className="beige-FFEDD6">1</div>
        <div className="pink-559CAD">2</div>
        <div className="orange-FFAF47">3</div>
        <div className="brown-F2545B">4</div>
      </div>
      <div>
        <div className="orange-FFAF47">5</div>
        <div className="brown-F2545B">6</div>
        <div className="beige-FFEDD6">7</div>
        <div className="pink-559CAD">8</div>
      </div>
      <div>
        <div className="beige-FFEDD6">9</div>
        <div className="pink-559CAD">10</div>
        <div className="orange-FFAF47">11</div>
        <div className="brown-F2545B">12</div>
      </div>
      <div></div>
    </div>
  );
};

export default ColorGrid;
