import React, {Component} from 'react';
import HogTile from './HogTile'
import HogDetail from './HogDetail'

class HogCard extends Component {
    constructor() {
        super();
        this.state= {
        showDetails: false
        }
    }

    toggleDetails = () => {
        this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        return (
            <div className= "pigTile">
                <div className="ui card">
                <HogTile hog={this.props}/>
                <button onClick={this.toggleDetails}>Details</button>
                {this.state.showDetails ? <HogDetail hog={this.props} /> : null}
                </div>
            </div>
        )
    }
}

export default HogCard;