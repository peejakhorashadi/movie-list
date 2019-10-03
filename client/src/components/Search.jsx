import React from 'react';

class Search extends React.Componenet {
  constructor(props) {
    super(props);
    this.state = {
      movieSearch = ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    this.setState({movieSearch: event.target.value})
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
          <label>
            Submit:
          <input type='submit' name='Submit'/>
          </label>
      </form>
    )
  }
}
export default Search;