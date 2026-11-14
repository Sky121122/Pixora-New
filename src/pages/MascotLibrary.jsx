
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import InteractiveMascot from '../components/InteractiveMascot';
import MascotModal from '../components/MascotModal';
import mascots from '../data/mascots';
import './MascotLibrary.css';

function MascotLibrary() {
  const [selectedMascot, setSelectedMascot] = useState(null);
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return;

      setCursor({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handlePointerLeave = () => {
      setCursor(null);
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="mascot-library-page">
      <Header />

      <main className="library-container">
        <div className="library-heading">
          <span className="section-label">
            THE PIXORA COLLECTION
          </span>

          <h1>
            Meet the <span>mascots.</span>
          </h1>

          <p>
            Find a little personality for your next project.
          </p>
        </div>

        <div className="library-grid">
          {mascots.map((mascot) => (
            <button
              type="button"
              className="library-card"
              key={mascot.id}
              onClick={() => setSelectedMascot(mascot)}
              aria-label={`View ${mascot.name}`}
            >
              <div
                className="library-card-image"
                style={{ backgroundColor: mascot.color }}
              >
                <InteractiveMascot
                  mascot={mascot}
                  cursor={cursor}
                />
              </div>

              <div className="library-card-info">
                <h3>{mascot.name}</h3>
                <span>{mascot.category}</span>
              </div>
            </button>
          ))}
        </div>
      </main>

      {selectedMascot && (
        <MascotModal
          mascot={selectedMascot}
          onClose={() => setSelectedMascot(null)}
        />
      )}
    </div>
  );
}

export default MascotLibrary;
