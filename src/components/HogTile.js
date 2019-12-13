import React, {Component} from 'react';

class HogTile extends Component {

    formatName = () => {
        let name = this.props.hog.name
        name = name.toLowerCase()
        let slugname = name.replace(/\s+/g, '_')
        return slugname
    }
    render() {
        let imgName= this.formatName()
        return (
            <div>
                <img src={require(`../hog-imgs/${imgName}.jpg`)} alt="" />
                <h3>{this.props.hog.name}</h3>
            </div>
        )
    }
}

export default HogTile;