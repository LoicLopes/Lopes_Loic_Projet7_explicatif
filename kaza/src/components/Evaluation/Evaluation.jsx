import React from "react";
import Heart from "../../assets/icons/Heart.png";
import EmptyHeart from "../../assets/icons/Empty_Heart.png";


 function Evaluation(props) {
    const value = props.value;
    const evaluation = [1, 2, 3, 4, 5];
    return (
        <React.Fragment>
            {evaluation.map((rangeElem, index) =>
                value >= rangeElem ? (
                    <span className="evaluation" key={`${rangeElem}-${index}`}>
                    <img src={Heart} alt="heart" />  
                    </span>
                ) : (
                    <span className="empty--evaluation" key={`${rangeElem}-${index}`}>
                       <img src={EmptyHeart} alt="empty heart" /> 
                    </span>
                )
            )}
        </React.Fragment>
    );
}
export default Evaluation