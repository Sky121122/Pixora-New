
import { useState } from 'react';
import MascotSprite from './MascotSprite';

function InteractiveMascot({ mascot }) {
  const [directionFrame, setDirectionFrame] = useState(4);

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;

    if (mascot.interaction?.cursorEnabled === false) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const column = x < 0.33 ? 0 : x > 0.67 ? 2 : 1;
    const row = y < 0.33 ? 0 : y > 0.67 ? 2 : 1;

    setDirectionFrame(row * 3 + column);
  };

  const handlePointerLeave = () => {
    setDirectionFrame(4);
  };

  return (
    <div
      className="interactive-mascot"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <MascotSprite
        mascot={mascot}
        type="directions"
        frameIndex={directionFrame}
        size={130}
      />
    </div>
  );
}

export default InteractiveMascot;
