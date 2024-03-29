import React, {Component} from 'react'

class ColourGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      hex: ''
    };

    this.generateColour = this.generateColour.bind(this);
  }

  generateColour() {
    const proxyurl = 'https://agile-basin-77106.herokuapp.com/'
    const url = 'http://www.colourlovers.com/api/colors/random?format=json'
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => this.setState({
        name: data[0].title,
        hex: data[0].hex
      }))
      .catch(error => {
        console.log(error)
        return this.setState(this.randomColourPls())
      })
  }

  randomColourPls() {
    const colours = [
      {
        name: "Morning Sunshine",
        hex: "ECFECE"
      },
      {
        name: "smooth blues",
        hex: "B0C0E5"
      },
      {
        name: "Bub Green",
        hex: "457C4D"
      },
      {
        name: "Open Doors",
        hex: "7FE3BE"
      },

    ]
    return colours[Math.floor(Math.random()*colours.length)]
  }

  componentDidMount() {
    this.generateColour()
  }

  render() {
    const divStyle = {
      background: '#' + this.state.hex
    }
    return (
      <div className={'section'}>
        <h2>Random Colour:</h2>
        <button onClick={() => this.generateColour()}>Generate</button>
        <div style={divStyle}>
          <h3>{this.state.name}</h3>
        </div>
      </div>
    )
  }
}

export default ColourGenerator


