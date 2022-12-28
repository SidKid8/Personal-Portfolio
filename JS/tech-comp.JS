const COLORS = [
  '#bbf7d0',
  '#99f6e4',
  '#bfdbfe',
  '#ddd6fe',
  '#f5d0fe',
  '#fed7aa',
  '#fee2e2',
];
const TAGS = [
  'HTML',
  'CSS',
  'JavaScript',
  'Svelte',
  'Java',
  'CleanCode',
  'React',
  'AWS',
  'WebDev',
  'Figma',
  'UI/UX',
  'Markdown',
  'SVG'
];
const DURATION = 50000;
const ROWS = 5;
const TAGS_PER_ROW = 25;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className='loop-slider'
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal',
      }}
    >
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text, color }) => (
  <div className='tag' style={{ '--color': color }}>
    <span>#</span> {text}
  </div>
);

const App = () => (
  <div className='skill_app'>
    <header>
      <h1>Technical Competencies</h1>
      <p>"If you do things right, people won't be sure you've done anything at all"</p>
    </header>
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 9000, DURATION + 9000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      
    </div>
  </div>
);
ReactDOM.createRoot(document.getElementById('skill_scroll')).render(<App />);

// ReactDOM.render(<App />, document.getElementById('skill_scroll'));
