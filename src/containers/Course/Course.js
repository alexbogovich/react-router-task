import React, {Component} from 'react';

class Course extends Component {
  render() {
    const id = this.props.match.params.id
    console.log(this.props.location.search)
    const query = new URLSearchParams(this.props.location.search)
    console.log(query)
    const value = query.get("title")

    return (
      <div>
        <h1>{value}</h1>
        <p>You selected the Course with ID: {id}</p>
      </div>
    );
  }
}

export default Course;