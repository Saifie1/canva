
import * as React from "react";
import Moveable from "react-moveable";

export default function Mavable() {
  const [target, setTarget] = React.useState();
  const [active,setActive]=React.useState(false);
  const [frame] = React.useState({
    translate: [0, 0],
    rotate: 0
  });
  const moveableRef = React.useRef();
  console.log('rerender');
  React.useEffect(() => {
    const target = document.querySelector(".target");

    setTarget(target);

   

    target.addEventListener("load", () => {
      setTimeout(() => {
        moveableRef?.current?.updateRect();
      }, 2000);
    });
  }, [active]);
  return (
    <div>
      <img
        className="target"
        src="https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg"
        alt="target"
        onClick={()=>{
          console.log(active)
          setActive(!active)}}
      />
       
  
     
     { active && <Moveable
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
      />}
       <button className="btn btn-primary"
        onClick={()=>{
          console.log(active)
          setActive(!active)}}>Make Movable</button>
    </div>
  );
}
