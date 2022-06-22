import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Group, Star } from "react-konva";

const App = () => {
  function generateShapes() {
    return [...Array(10)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 180,
      isDragging: false,
    }));
  }
  const INITIAL_STATE = generateShapes();
  const [stars, setStars] = useState(INITIAL_STATE);
  return (
    <Stage width={700} height={700}>
      <Layer>
        {stars.map((star) => (
          <Group
            // onDragStart={handleDragStart}
            // onDragEnd={handleDragEnd}
            draggable
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
          >
            <Star
              numPoints={10}
              innerRadius={20}
              outerRadius={25}
              fill={"blue"}
              // opacity={0.8}
              // onClick={deleteThis}
              rotation={star.rotation}
              shadowColor="black"
              shadowOffsetX={5}
              shadowOffsetY={5}
              // shadowOffsetX={star.isDragging ? 10 : 5}
              // shadowOffsetY={star.isDragging ? 10 : 5}
              // scaleX={star.isDragging ? 1.2 : 1}
              // scaleY={star.isDragging ? 1.2 : 1}
            />
            <Text text={star.id} fill="#ffffff" wrap="char" align="center" />
          </Group>
        ))}
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
