import "./App.css";

function App() {
  return (
    <>
      <center>
        <div className="ui container">
          <div className="ui five column stackable padded grid">
            <div className="column">
              <div className="ui card">
                <a href="#link" className="image">
                  <img
                    src="https://semantic-ui.com/images/avatar/large/steve.jpg"
                    alt=""
                  />
                </a>
                <div className="content">
                  <a href="#link" className="header">
                    Steve Jobs
                  </a>
                  <div className="meta">
                    <a className="time">Last seen 2 days ago</a>
                  </div>
                </div>
                <div className="extra content">
                  <button className="ui right floated animated fade basic primary button">
                    <center>
                      <span className="visible content">View More</span>
                      <span className="hidden content">
                        <i className="right arrow icon"></i>
                      </span>
                    </center>
                  </button>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui card">
                <a href="#link" className="image">
                  <img
                    src="https://semantic-ui.com/images/avatar/large/joe.jpg"
                    alt=""
                  />
                </a>
                <div className="content">
                  <a href="#link" className="header">
                    Joe Roagn
                  </a>
                  <div className="meta">
                    <a className="time">Last seen 2 days ago</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui card">
                <a href="#link" className="image">
                  <img
                    src="https://semantic-ui.com/images/avatar/large/laura.jpg"
                    alt=""
                  />
                </a>
                <div className="content">
                  <a href="#link" className="header">
                    Laura Rhodes
                  </a>
                  <div className="meta">
                    <a className="time">Last seen 2 days ago</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui card">
                <a href="#link" className="image">
                  <img
                    src="https://semantic-ui.com/images/avatar/large/christian.jpg"
                    alt=""
                  />
                </a>
                <div className="content">
                  <a href="#link" className="header">
                    Christian Bale
                  </a>
                  <div className="meta">
                    <a className="time">Last seen 2 days ago</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui card">
                <a href="#link" className="image">
                  <img
                    src="https://semantic-ui.com/images/avatar/large/chris.jpg"
                    alt=""
                  />
                </a>
                <div className="content">
                  <a href="#link" className="header">
                    Chris Hemsworth
                  </a>
                  <div className="meta">
                    <a className="time">Last seen 2 days ago</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui card">
                <a href="#link" className="image">
                  <img
                    src="https://semantic-ui.com/images/avatar/large/daniel.jpg"
                    alt=""
                  />
                </a>
                <div className="content">
                  <a href="#link" className="header">
                    Daniel D
                  </a>
                  <div className="meta">
                    <a className="time">Last seen 2 days ago</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ui five column padded grid">
            <div className="red column">Red</div>
            <div className="orange column">Orange</div>
            <div className="blue column">Blue</div>
            <div className="green column">Green</div>
            <div className="yellow column">Yellow</div>
            <div className="black column">Black</div>
            <div className="pink column">Pink</div>
            <div className="teal column">Teal</div>
            <div className="violet column">Violet</div>
            <div className="brown column">Brown</div>
            <div className="olive column">Olive</div>
            <div className="grey column">Grey</div>
            <div className="purple column">Purpule</div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
