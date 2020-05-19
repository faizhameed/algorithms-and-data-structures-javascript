import React from "react";

class Articles extends React.Component {
  state = {
    data: [],
    isFetched: false,
  };

  handleFetch() {
    const author = document.getElementById("author-input").value;
    fetch(
      `https://jsonmock.hackerrank.com/api/articles?author=${author}&page=1`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          data: data.data.slice(0, 3),
          isFetched: true,
        });
      });
  }

  render() {
    const titles =
      this.state.data.length > 0 ? this.state.data.map((item) => item) : [];
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>author:</span>
            <input
              id="author-input"
              type="text"
              className="text-input"
              data-testid="text-input"
            />
            <button
              className="fetch-button"
              data-testid="fetch-button"
              onClick={this.handleFetch.bind(this)}
            >
              Fetch
            </button>
          </div>
        </div>

        <div>
          {titles.length > 0
            ? titles.map((item, index) => {
                return (
                  <li key={index} data-testid="result-row">
                    {item.title}
                  </li>
                );
              })
            : null}
        </div>
        {this.state.isFetched && this.state.data.length === 0 ? (
          <div data-testid="no-results">No results</div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Articles;
