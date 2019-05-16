import React, {Component} from 'react'

class ColourGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      hex: ''
    };
  }

  componentDidMount() {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'http://www.colourlovers.com/api/colors/random?format=json'
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => {
        return this.setState({
          name: data[0].title,
          hex: data[0].hex
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const divStyle = {
      background: '#' + this.state.hex
    }
    return (
      <div className={'section'}>
        <h2>Random colour:</h2>
        <div style={divStyle}>
          <h1>{this.state.name}</h1>
        </div>
      </div>
    )
  }
}

export default ColourGenerator


