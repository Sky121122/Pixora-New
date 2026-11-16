
import './MascotSprite.css';

function MascotSprite({
  mascot,
  type = 'directions',
  frameIndex = 4,
  size = 220,
  onPointerMove,
  onPointerLeave,
}) {
  const spriteSheet = mascot?.assets?.[type];

  const row = Math.floor(frameIndex / 3);
  const column = frameIndex % 3;

  const backgroundX = column * 50;
  const backgroundY = row * 50;

  if (!spriteSheet) {
    return (
      <div
        className="mascot-sprite-fallback"
        style={{
          width: size,
          height: size,
          backgroundColor: mascot?.color || '#F3F0E8',
        }}
      >
        {mascot?.emoji || '🐱'}
      </div>
    );
  }

  return (
    <div
      className="mascot-sprite"
      role="img"
      aria-label={`${mascot.name} ${type}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{
        width: size,
        height: size,
        aspectRatio: '1 / 1',
        backgroundImage: `url("${spriteSheet}")`,
        backgroundSize: '300% 300%',
        backgroundPosition: `${backgroundX}% ${backgroundY}%`,
        backgroundRepeat: 'no-repeat',
        transition: 'none',
      }}
    />
  );
}

export default MascotSprite;
