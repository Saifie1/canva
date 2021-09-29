
import * as React from "react";
import Moveable from "react-moveable";

export default function Mavable() {
  const [target, setTarget] = React.useState();
  const [active,setActive]=React.useState();
  const [frame] = React.useState({
    translate: [0, 0],
    rotate: 0
  });
  const moveableRef = React.useRef();
  console.log("R");
  React.useEffect(() => {
    const target = document.querySelector(".target");

    setTarget(target);

    console.log(moveableRef.current.props.target);

    target.addEventListener("load", () => {
      setTimeout(() => {
        moveableRef.current.updateRect();
      }, 2000);
    });
  }, []);
  return (
    <div className="container">
      <img
        className={active?"target":""}
        src="https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg"
        alt="target"
        onClick={()=>{setActive(true)}}
      />
       <img
   
        src="https://static.scientificamerican.com/sciam/cache/file/0C3A8B2F-3F64-4BB5-86DEB2E041D28A2D_source.jpg?w=590&h=800&40A9C99B-A2BF-4496-A9D4D2DF4B637191"
        alt="target"
      />
       <img
      
        src="https://images.unsplash.com/photo-1632813101579-7e7d4dd2c69a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="target"
      />
       <img
        className={active?"" :"target"}
        src="https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg"
        alt="target"
      />
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
          target.style.transform = `translate(${frame.translate[0]}px, ${
            frame.translate[1]
          }px) rotate(${frame.rotate}deg)`;
        }}
      />
    </div>
  );
}
