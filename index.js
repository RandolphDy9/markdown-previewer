marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    setText(`# Welcome to my React Markdown Previewer!`);
  }, []);

  return (
    <div id="container" className="row">
      <div className="row text-center mb-4">
        <div id="title">Markdown Previewer</div>
        <small id="subTitle">By Randolph Dy</small>
      </div>
      <div id="editor-container" className="col-12 col-lg-5">
        <div className="column">
          <h2 className="heading">Editor</h2>
          <div className="textarea-container container">
            <textarea
              name="text"
              id="editor"
              rows="15"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div id="previewer-container" className="col-12 col-lg-7">
        <div className="column">
          <h2 className="heading">Previewer</h2>
          <div className="container">
            <Preview markdown={text} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer })
      }}
      id="preview"
    ></div>
  )
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);