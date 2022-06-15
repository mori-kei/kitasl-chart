import React from "react";
import RaderGraph from "./RaderGraph";
const Modal = ({show,setShow,resultFam,resultInno,resultMar,resultBure,firstQues,secondQues,thirdQues,fourthQues,fifthQues,sixthQues}) => {
  const closeModal = () => {
    setShow(false)
  }
  if(show){
    return(
      <>
      
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
        
        <RaderGraph 
          firstQues={firstQues}
          secondQues={secondQues}
          thirdQues={thirdQues}
          fourthQues={fourthQues}
          fifthQues={fifthQues}
          sixthQues={sixthQues}
            resultFam={resultFam}
            resultInno={resultInno}
            resultMar={resultMar}
            resultBure={resultBure}
        />
        <p><button onClick={closeModal}>close</button></p>
        </div>
        
      </div>
    </>
    )
  }else {
    return null;
  }
  
  
}

export default Modal;