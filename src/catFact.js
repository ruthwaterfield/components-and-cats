import React, {Component, Fragment} from 'react'

class CatFact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fact: '',
      length: ''
    };
  }

  componentDidMount() {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://catfact.ninja/fact?max_length=140'
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => this.setState({fact: data.fact, length: data.length})
      )
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className={'section'}>
        <h2>Cat Fact:</h2>
        {this.state.fact.length === 0
          ? <div>wait patiently...</div>
          : <Fragment>
            <div>Fact of length <b>{this.state.length}</b></div>
            <div>{this.state.fact}</div>
          </Fragment>
        }
      </div>
    )
  }
}

export default CatFact


