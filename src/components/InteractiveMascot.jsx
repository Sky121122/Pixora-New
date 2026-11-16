
import { useEffect, useState, useRef } from 'react';
import MascotSprite from './MascotSprite';

function InteractiveMascot({ mascot, cursor }) {
  const [directionFrame, setDirectionFrame] = useState(4);
  const mascotRef = useRef(null);

  useEffect(() => {
    if (!cursor || mascot.interaction?.cursorEnabled === false) {
      setDirectionFrame(4);
      return;
    }

    const element = mascotRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const mascotCenterX = rect.left + rect.width / 2;
    const mascotCenterY = rect.top + rect.height / 2;

    const deltaX = cursor.x - mascotCenterX;
    const deltaY = cursor.y - mascotCenterY;

    const thresholdX = rect.width * 0.15;
    const thresholdY = rect.height * 0.15;

    const column =
      deltaX < -thresholdX ? 0 :
      deltaX > thresholdX ? 2 : 1;

    const row =
      deltaY < -thresholdY ? 0 :
      deltaY > thresholdY ? 2 : 1;

    const nextFrame = row * 3 + column;

    setDirectionFrame((previous) =>
      previous === nextFrame ? previous : nextFrame
    );
  }, [cursor, mascot.interaction]);

  return (
    <div className="interactive-mascot" ref={mascotRef}>
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
