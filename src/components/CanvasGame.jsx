import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";

const CanvasGame = () => {
  const canvasRef = useRef(null);
  let scrollCounter, cameraY, current, mode, xSpeed;
  let ySpeed = 2; // Slower speed
  let height = 50;
  let boxes = [{ x: 0, y: 300, width: 200 }];
  let debris = { x: 0, width: 0 };

  const newBox = () => {
    boxes[current] = {
      x: canvasRef.current.width / 2 - boxes[current - 1].width / 2, // Center the new box
      y: (current + 10) * height,
      width: boxes[current - 1].width,
    };
  };

  const gameOver = (context) => {
    mode = "gameOver";
    context.fillStyle = "rgba(255, 255, 255, 0.9)";
    context.fillText(
      "Game over. Click to play again!",
      canvasRef.current.width / 2,
      100
    );
  };

  const animate = (context, canvas) => {
    if (mode !== "gameOver") {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the background gradient
      const bgGradient = context.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      bgGradient.addColorStop(0, "#4c669f");
      bgGradient.addColorStop(1, "#3b5998");
      context.fillStyle = bgGradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the score
      context.fillStyle = "rgba(255, 255, 255, 0.9)";
      context.fillText(
        "Score: " + (current - 1).toString(),
        canvas.width / 2,
        150
      );

      // Draw the boxes with gradients and shadows
      for (let n = 0; n < boxes.length; n++) {
        let box = boxes[n];
        const boxGradient = context.createLinearGradient(
          0,
          0,
          box.width,
          height
        );
        boxGradient.addColorStop(0, `rgb(${n * 16}, ${n * 64}, ${n * 128})`);
        boxGradient.addColorStop(1, `rgb(${n * 32}, ${n * 128}, ${n * 255})`);

        context.fillStyle = boxGradient;
        context.shadowColor = "rgba(0, 0, 0, 0.5)";
        context.shadowBlur = 20;
        context.fillRect(
          box.x,
          canvas.height - box.y + cameraY,
          box.width,
          height
        );
      }

      // Draw the debris
      context.fillStyle = "rgba(255, 0, 0, 0.8)";
      context.shadowColor = "rgba(255, 0, 0, 0.8)";
      context.shadowBlur = 10;
      context.fillRect(
        debris.x,
        canvas.height - debris.y + cameraY,
        debris.width,
        height
      );

      // Update box position
      if (mode === "bounce") {
        boxes[current].x += xSpeed;
        if (
          xSpeed > 0 &&
          boxes[current].x + boxes[current].width > canvas.width
        )
          xSpeed = -xSpeed;
        if (xSpeed < 0 && boxes[current].x < 0) xSpeed = -xSpeed;
      }

      // Handle falling
      if (mode === "fall") {
        boxes[current].y -= ySpeed;
        if (boxes[current].y === boxes[current - 1].y + height) {
          mode = "bounce";
          let difference = boxes[current].x - boxes[current - 1].x;
          if (Math.abs(difference) >= boxes[current].width) {
            gameOver(context);
          }
          debris = { y: boxes[current].y, width: difference };
          if (boxes[current].x > boxes[current - 1].x) {
            boxes[current].width -= difference;
            debris.x = boxes[current].x + boxes[current].width;
          } else {
            debris.x = boxes[current].x - difference;
            boxes[current].width += difference;
            boxes[current].x = boxes[current - 1].x;
          }
          xSpeed = xSpeed > 0 ? xSpeed + 0.8 : xSpeed - 0.8;
          current++;
          scrollCounter = height;
          newBox();
        }
      }

      debris.y -= ySpeed;
      if (scrollCounter) {
        cameraY++;
        scrollCounter--;
      }
    }
    requestAnimationFrame(() => animate(context, canvas));
  };

  const restart = (context, canvas) => {
    boxes = [{ x: canvas.width / 2 - boxes[0].width / 2, y: 300, width: 200 }];
    mode = "bounce";
    cameraY = 0;
    scrollCounter = 0;
    xSpeed = 2;
    current = 1;
    newBox();
    debris.y = 0;
    animate(context, canvas);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.8; // 80% of the viewport width
    canvas.height = window.innerHeight;
    context.font = "bold 40px 'Roboto', sans-serif";
    context.textAlign = "center";
    restart(context, canvas);

    const handlePointerDown = () => {
      if (mode === "gameOver") {
        restart(context, canvas);
      } else if (mode === "bounce") {
        mode = "fall";
      }
    };

    canvas.addEventListener("pointerdown", handlePointerDown);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <motion.div>
      <canvas ref={canvasRef} />
    </motion.div>
  );
};

export default CanvasGame;
