import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList/index.js'

class Series extends Component {

    state = {
        series: []
      }
    
    //   componentDidMount() {
    //     fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    //     .then((response) => response.json()) // returns json from 'response' objects
    //     // .then(json => console.log(json)) // outputs what was returned in prev. line
    //     .then(json => this.setState({ series: json })) // sets new property for state's property - series
    //   }

    componentDidMount(){
        const series = [
            {
                name: "Hobbit", 
                year: 2000
            },
            {
                name: "Terminator", 
                year: 2005 
            },
            {
                name: "Sharks", 
                year: 1997
            }
        ]

        this.setState({ series})
    }

    render() {
        return (
            <div>The length of series array - {this.state.series.length}
            <SeriesList list={this.state.series} />
            </div>
        )
    }
}

export default Series;