import React from "react";
import Header from "./Header";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

function App(){
  return ( 
    <React.Fragment>
      <div class="container">
        <Header />
        <MarketSchedule />
        <SeasonalProduce />
      </div>
    </React.Fragment>
  );
}

export default App;