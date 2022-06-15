import React from "react";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";


const PrimaryButton = ({firstQues,secondQues,thirdQues,fourthQues,fifthQues,sixthQues,openModal,}) =>{
  if(firstQues ===100 && secondQues ===100 && thirdQues ===100 && fourthQues ===100 && fifthQues === 100 && sixthQues ===100){
    return(
      <>
        <Button  onClick={openModal}
          color="secondary"
          variant="contained"
        >結果を確認する</Button>
      </>
     
    )
}
else {
  return (
    <>
      <Button  variant="contained" disabled>合計値が100になっていない質問があります</Button>
    </>
   
  )
}
}
export default PrimaryButton