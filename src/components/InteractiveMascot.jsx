
import MascotSprite from './MascotSprite';

function InteractiveMascot({ mascot, cursor }) {
  const cursorEnabled = mascot.interaction?.cursorEnabled !== false;

  let directionFrame = 4;

  if (cursorEnabled && cursor) {
    const x = cursor.x / window.innerWidth;
    const y = cursor.y / window.innerHeight;

    const column = x < 0.33 ? 0 : x > 0.67 ? 2 : 1;
    const row = y < 0.33 ? 0 : y > 0.67 ? 2 : 1;

    directionFrame = row * 3 + column;
  }

  return (
    <div className="interactive-mascot">
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
