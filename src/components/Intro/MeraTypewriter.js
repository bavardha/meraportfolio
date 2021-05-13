import React from "react";
import "./MeraTypewriter.css";

import Typewriter from 'typewriter-effect';

function MeraTypewriter() {
  return (
    <div className="meradesc">
      <Typewriter
        
        onInit={(typewriter) => {
          typewriter
            .typeString("I am a software engineer")
            .pauseFor(2500)
            .deleteChars(17)
            .typeString("student researcher")
            .pauseFor(2500)
            .deleteAll()
            .typeString("You can find more about me on my ")
            .pasteString("<a href=\"https://www.linkedin.com/in/harsha-balanagu/\" target=\"_blank\" rel=\"noreferrer\">LinkedIN</a>")
            .pauseFor(2500)
            .start();
        }}

        options={{
          loop:true,


        }}
      />
    </div>
    
  );
}
export default MeraTypewriter;
