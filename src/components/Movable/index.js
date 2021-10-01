import * as React from "react";
import Moveable from "react-moveable";

export default function Mavable() {
  const useFocus = () => {
    const htmlElRef = React.useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };

    return [htmlElRef, setFocus];
  };
  const [className, setClassName] = React.useState("target");
  const [target, setTarget] = React.useState();
  const [target2, setTarget2] = React.useState();
  const [active, setActive] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const [focused, setFocused] = useFocus();
  const [frame] = React.useState({
    translate: [0, 0],
    rotate: 0,
  });
  const moveableRef = React.useRef();
  const moveableRef2 = React.useRef();
  console.log("rerender");
  React.useEffect(() => {
    const target = document.querySelector(`.${className}`);
    // const target2 = document.querySelector(".target2");
    setTarget(target);

    target.addEventListener("load", () => {
      setTimeout(() => {
        moveableRef?.current?.updateRect();
      }, 2000);
    });
  }, [count]);
  return (
    <div>
      <img
        className={`dem ${className}`}
        src="https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg"
        // alt="target"
        onClick={() => {
          moveableRef?.current?.focus();
          // console.log(active,"Munem",count)
          if (count === 0) {
            setActive(false);
            setCount(count + 1);
            setFocused();
            moveableRef?.current?.focus();
          } else {
            setFocused();
            setCount(count - 1);
            setActive(true);
            moveableRef?.current?.focus();
          } // moveableRef.fo

          moveableRef?.current?.updateRect();
        }}
      />

      {/* <img 
      
        src="https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg"
        alt="target"
        onClick={()=>{
          console.log(active)
          setActive(!active)}}
      /> */}

      {active === true && (
        <Moveable
          ref={moveableRef}
          target={target}
          draggable={true}
          throttleDrag={0}
          resizable={true}
          throttleResize={0}
          rotatable={true}
          rotationPosition={"top"}
          throttleRotate={0}
          onDragStart={({ set }) => {
            set(frame.translate);
          }}
          onDrag={({ beforeTranslate }) => {
            frame.translate = beforeTranslate;
          }}
          onResizeStart={({ setOrigin, dragStart }) => {
            setOrigin(["%", "%"]);
            dragStart && dragStart.set(frame.translate);
          }}
          onResize={({ target, width, height, drag }) => {
            frame.translate = drag.beforeTranslate;
            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
          }}
          onRotateStart={({ set }) => {
            set(frame.rotate);
          }}
          onRotate={({ beforeRotate }) => {
            frame.rotate = beforeRotate;
          }}
          onRender={({ target }) => {
            target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px) rotate(${frame.rotate}deg)`;
          }}
        />
      )}
      {/* <button className="btn btn-primary"
        onClick={()=>{
          console.log(active)
          setActive(!active)}}>Make Movable</button> */}
    </div>
  );
}
