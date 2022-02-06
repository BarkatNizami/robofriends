import React, { Component } from 'react';
import CardList from '../Components/CardList.js';
import Searchbox from '../Components/Searchbox.js';
import { robots } from '../robots';
import Scroll from '../Components/Scroll'
import './App.css';


class App extends Component {
  constructor() {
       super()
       this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox searchChange= {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;