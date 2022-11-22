import React, {useState, useEffect} from "react";


import '../App.css';

function AppPedroGenerateJSXFunctionComponent(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithPropThird={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor
  };


  //---------------------------------------

const UserFunctionComponent=() =>{
  return(
    <div>
<h1>Petrica</h1>
<h1>50</h1>
<h1>petrica@gmail.com</h1>
    </div>
  );
};

  //---------------------------------------
//obj props
//doar exemplu
const propsObj={
  propName:"Andrei",
  propAge:70,
  propEmail:"andrei@gmail.com",
  propColor:"Chocolate"
};
//-------------------------------------------
  const UserFunctionComponentWithProps=(props) =>{

return(
  <div style={{padding:"1em" , margin:"1em" , border:`1px solid ${props.propColor}` , color:props.propColor}}>
<h1>{props.propName}</h1>
<h1>{props.propAge}</h1>
<h1>{props.propEmail}</h1>
  </div>
);

  }



  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (<>

    <div className="App">
<p style={styleWithPropThird}>function component is : {propText}</p>
    </div>

    <div className="App">
<UserFunctionComponent />

<UserFunctionComponentWithProps propName={"Andrei"} propAge={70} propEmail={"andrei@gmail.com"} propColor={"Chocolate "}/>
<UserFunctionComponentWithProps propName={"Apolonia"} propAge={19} propEmail={"apolonia@gmail.com"} propColor={"Darkorange"}/>
<UserFunctionComponentWithProps propName={"Casian"} propAge={15} propEmail={"casian@gmail.com"} propColor={"DodgerBlue"}/>
    </div>

  </>);
}

export default AppPedroGenerateJSXFunctionComponent;

//-----------------------------------------------------------------------------
