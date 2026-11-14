
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Documentation.css';

const installCode = 'npm install pixora-mascot';

const importCode = `import { Mascot } from 'pixora-mascot';
import 'pixora-mascot/style.css';`;

const usageCode = `import { Mascot } from 'pixora-mascot';
import 'pixora-mascot/style.css';

function App() {
  return (
    <div>
      <Mascot
        directions="/mascots/cat-directions.webp"
        size={150}
      />
    </div>
  );
}

export default App;`;

const props = [
  {
    name: 'directions',
    type: 'string',
    defaultValue: 'undefined',
    description: 'URL of the 3×3 direction sprite sheet. Allows the mascot to follow the cursor across the screen.',
  },
  {
    name: 'size',
    type: 'number',
    defaultValue: '120',
    description: 'Sets the mascot width and height in pixels.',
  },
];

function CodeBlock({ code, language = 'jsx' }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="docs-code">
      <div className="docs-code-header">
        <span>{language}</span>
        <button onClick={copyCode}>
          {copied ? 'Copied!' : 'Copy code'}
        </button>
      </div>

      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Documentation() {
  return (
    <div className="documentation-page">
      <Header />

      <div className="docs-layout">
        <aside className="docs-sidebar">
          <div className="docs-sidebar-title">DOCUMENTATION</div>

          <a href="#introduction" className="active">Introduction</a>
          <a href="#installation">Installation</a>
          <a href="#quick-start">Quick Start</a>
          <a href="#props">Component Props</a>
          <a href="#troubleshooting">Troubleshooting</a>

          <div className="docs-sidebar-bottom">
            <span>Want to explore?</span>
            <Link to="/mascots">Explore Mascots ↗</Link>
          </div>
        </aside>

        <main className="docs-content">

          {/* INTRODUCTION */}
          <section id="introduction" className="docs-section docs-intro">
            <span className="docs-eyebrow">
              PIXORA MASCOT · DOCUMENTATION
            </span>

            <h1>
              Bring your website
              <br />
              <span>to life.</span>
            </h1>

            <p>
              Pixora Mascot is a lightweight React component that adds
              interactive sprite-based characters to your applications.
              Your mascots follow the cursor wherever it moves across the screen.
            </p>

            <div className="docs-intro-actions">
              <a href="#installation" className="docs-primary-btn">
                Get Started ↘
              </a>

              <a
                href="https://www.npmjs.com/package/pixora-mascot"
                target="_blank"
                rel="noreferrer"
                className="docs-secondary-btn"
              >
                View on npm ↗
              </a>
            </div>

            <div className="docs-feature-row">
              <span>✦ Cursor tracking</span>
              <span>✦ 9 directions</span>
              <span>✦ Custom sprites</span>
            </div>
          </section>

          {/* INSTALLATION */}
          <section id="installation" className="docs-section">
            <span className="docs-number">01 — INSTALLATION</span>

            <h2>Install Pixora Mascot</h2>

            <p>
              Open your React project terminal and install the package
              using npm.
            </p>

            <CodeBlock code={installCode} language="bash" />

            <div className="docs-tip">
              <strong>Requirements</strong>
              <p>
                React 18 or later and React DOM 18 or later are required.
              </p>
            </div>

            <h3>Import the component</h3>

            <p>
              In the React file where you want to use your mascot,
              import the component and its stylesheet.
            </p>

            <CodeBlock code={importCode} />
          </section>

          {/* QUICK START */}
          <section id="quick-start" className="docs-section">
            <span className="docs-number">02 — QUICK START</span>

            <h2>Your first mascot</h2>

            <p>
              Create a mascot by providing its 3×3 direction sprite sheet.
              The mascot automatically follows the cursor across the screen.
            </p>

            <CodeBlock code={usageCode} />

            <div className="docs-tip">
              <strong>Important</strong>
              <p>
                Put your sprite image inside your project's
                <code> public/mascots/ </code> folder. Use paths beginning
                with <code>/mascots/</code> in your component.
              </p>
            </div>
          </section>

          {/* COMPONENT PROPS */}
          <section id="props" className="docs-section">
            <span className="docs-number">03 — COMPONENT PROPS</span>

            <h2>Customize your mascot</h2>

            <p>
              Use these props to control the appearance and behaviour
              of your mascot.
            </p>

            <div className="docs-props-table">
              <div className="docs-props-heading">
                <span>PROP</span>
                <span>TYPE</span>
                <span>DEFAULT</span>
              </div>

              {props.map((prop) => (
                <div className="docs-prop-row" key={prop.name}>
                  <div>
                    <code>{prop.name}</code>
                    <p>{prop.description}</p>
                  </div>

                  <span>{prop.type}</span>
                  <code>{prop.defaultValue}</code>
                </div>
              ))}
            </div>
          </section>

          {/* TROUBLESHOOTING */}
          <section id="troubleshooting" className="docs-section">
            <span className="docs-number">04 — TROUBLESHOOTING</span>

            <h2>Having trouble?</h2>

            <div className="docs-faq">
              <h3>My mascot is not visible.</h3>
              <p>
                Check that your sprite sheet path is correct and that
                the image exists inside your public folder.
              </p>
            </div>

            <div className="docs-faq">
              <h3>The mascot does not follow my cursor.</h3>
              <p>
                Make sure you have provided a valid directions sprite
                sheet. Cursor tracking requires a valid direction sheet.
              </p>
            </div>

            <div className="docs-faq">
              <h3>My mascot shows the wrong direction.</h3>
              <p>
                Make sure your sprite sheet follows the correct 3×3
                direction layout: top-left, top, top-right, left,
                front, right, bottom-left, down and bottom-right.
              </p>
            </div>

            <div className="docs-faq">
              <h3>My CSS is not applied.</h3>
              <p>
                Make sure you have imported
                <code> pixora-mascot/style.css </code>
                in your application.
              </p>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="docs-bottom-cta">
            <span>READY TO BUILD SOMETHING FUN?</span>
            <h2>Give your website a little personality.</h2>
            <Link to="/mascots">Explore the mascot library ↗</Link>
          </section>

          <footer className="docs-footer">
            <span>© 2026 PIXORA MASCOT</span>
            <Link to="/">Back to home ↑</Link>
          </footer>

        </main>
      </div>
    </div>
  );
}

export default Documentation;
