import React from "react";
import Header from "./Header";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return ( 
    <React.Fragment>
      <div className="container">
        <div className='jumbotron'>
          <Header />
        </div>
        <div className='row'>
          <div className='col-6'>
            <MarketSchedule />
          </div>
          <div className='col-6'>
            <SeasonalProduce />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;