import React, { Component } from 'react';

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
        const newSeries = ["Hobbit", "Test", "Test2"]

        this.setState({ series: newSeries})
    }

    render() {
        return (
            <div>The length of series array - {this.state.series.length}</div>
        )
    }
}

export default Series;