import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;


// Note: Could be optimized in future iterations