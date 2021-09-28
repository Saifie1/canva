import React from "react";

 const Text = ({text, fontSize}) => {
  return (
      <div>
         <p style={{fontSize}}>{text}</p>
      </div>
  )
}
export default Text
