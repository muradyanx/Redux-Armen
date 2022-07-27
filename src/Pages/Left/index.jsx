import React from "react";
import "../Left/style.scss";
import { useSelector, useDispatch } from "react-redux";
import { leftActionCreator, rightActionCreator ,rangeActionCreator,colorTitleActionCreator,colordiscreptionActionCreator,backgroundActionCreator } from "./../../Store/changeReducer";

function Left() {
  const dispatch = useDispatch();
  const left = useSelector((state) => state.changeReducer.left);
  const right = useSelector((state) => state.changeReducer.right);
  const range = useSelector((state) => state.changeReducer.range);
  const colorone = useSelector((state) => state.changeReducer.colorTitle);
  const colordiscreption = useSelector((state) => state.changeReducer.colorDescription);
  const backgroundColor = useSelector((state) => state.changeReducer.background )

  const handleLeft = (e) => {
    const value = e.target.value
    dispatch(leftActionCreator(value));
  };
  const handleRight = (e) => {
    const value = e.target.value
    dispatch(rightActionCreator(value));
  };
  const handleRange = (e) => {
    const value = e.target.value
    dispatch(rangeActionCreator(value));
  };
  const handleColorTitle = (e) =>{
    const value = e.target.value
    dispatch(colorTitleActionCreator(value))
  }
  const handleColorDescreption = (e) =>{
    const value = e.target.value
    dispatch(colordiscreptionActionCreator(value))
  }

  const handlebackground = (e) =>{
    const value = e.target.value
    dispatch(backgroundActionCreator(value))

  }
  return (
    <div className="g-flex-direction left-blok">
      <input className="left-input" type="text" onChange={handleLeft} value={left} />
      <input className="left-input" type="text" onChange={handleRight} value={right} />
      <input className="left-input" type='range' onChange={handleRange} value={range}/>
      <input type="color" onChange={handleColorTitle} value={colorone} />
      <input type='color' onChange={handleColorDescreption}/>
      <input type='color' onChange={handlebackground}/>
    </div>
  );
}

export default Left;
