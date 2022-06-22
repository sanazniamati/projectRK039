import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          text={"Default shape rendering.\n fillAfterStrokeEnabled = false"}
          x={50}
          y={50}
          fontSize={30}
          stroke={"green"}
          fill={"yellow"}
          strokeWidth={3}
        />
        <Text
          text={"Reversed rendering order.\nfillAfterStrokeEnabled = true"}
          x={50}
          y={150}
          fontSize={30}
          stroke={"green"}
          fill={"yellow"}
          strokeWidth={3}
          fillAfterStrokeEnabled
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
