import React, {Component} from 'react'

class FilterBar extends Component {


    render() {
        return (
            <div className="filterWrapper">
                <div className="ui menu">
                <label className="ui item">Greased only </label>
                <div className="ui item">
                    <input type="checkbox" onChange={this.props.greasedFilter}></input>
                </div>
                <label className="ui item">Sort by: </label>
                <select className="ui selection dropdown" onChange={this.props.sortPigs}>
                    <option value="None"></option>
                    <option value="Name">Name</option>
                    <option value="Weight">Weight</option>
                </select>
                </div>
            </div>
        )
    }
}

export default FilterBar;