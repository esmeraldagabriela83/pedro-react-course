import React, {useState, useEffect} from "react";

import '../App.css';

function AppConditionalRenderingJSXexNrThird(props){

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const exNrThird=50;

return(

<div>
<p>exNrThird is : {exNrThird} </p>
{exNrThird >= 60 ? <h1 style={{color:"coral"}}>you are old , over 60</h1> : <h1 style={{color:"cornflowerblue"}}>you are young , under 60</h1>}
</div>

);

}

export default AppConditionalRenderingJSXexNrThird;
