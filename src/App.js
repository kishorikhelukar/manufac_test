import React from "react";
import ScatterPlot from "./components/ScatterPlot";
import BarCharts from "./components/BarCharts";

function App() {
  return (
    <div className="App">
      <div>
        <h1>ScatterPlot</h1>
        <ScatterPlot />
      </div>
      <div>
        <h1>Bar chart</h1>
        <BarCharts />
      </div>
    </div>
  );
}

export default App;
