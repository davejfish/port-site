import { useEffect, useRef, useState } from 'react';

export default function Canvas() {
  const [image, setImage] = useState(null);
  const canvas = useRef(null);

  useEffect(() => {
    const gameMap = new Image();
    gameMap.src = 'https://i.imgur.com/Z7vs7EH.png';
    gameMap.onload = () => {
      setImage(gameMap);
    };
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, 1120, 640);
      ctx.drawImage(image, 0, 0);
    }
  }, [image, canvas]);
  return (
    <canvas ref={canvas} width={1120} height={640} />
  );
}
