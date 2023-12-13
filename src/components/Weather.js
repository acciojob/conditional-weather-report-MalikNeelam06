import React, { useState } from "react";
function Weather(){
    let [weather,setweather]= useState( { temperature: 25, conditions: "Sunny" });
    let Threshold = 20;
   let colort=weather.temperature>Threshold?"Red":"Blue";
    return(
    <div>
<h1>weather App</h1>
<p style={{color:colort}}>currentTemperature:{weather.temperature}</p>
<p>weather conditions:{weather.conditions}</p>
   </div> )
}
export default Weather;