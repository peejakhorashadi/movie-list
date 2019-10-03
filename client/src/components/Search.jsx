import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
        <form>
            <label>
            <input type="text" name="name" />
            <input type='submit' name='Submit'/>
            </label>
        </form>
    );
  }
}

export default Search;