import React, {Component} from 'react';
import HogCard from './HogCard'
import FilterBar from './FilterBar'

class Container extends Component {
    constructor(props) {
        const allHogs = props.hogs;
        super();
        this.state= {
            hogs: allHogs,
            filterGreased: false
        }
    }


    toggleFilterGreased = () => {
        this.setState({
            ...this.state, 
            filterGreased: !this.state.filterGreased
        })
    }

    sortPigs = (event) => {
        const hogs = this.state.hogs
        let sortedHogs
        if (event.target.value === 'Name') {
           sortedHogs = hogs.sort((a, b,) => (a.name > b.name) ? 1 : -1) 
        }else if (event.target.value === 'Weight'){
           sortedHogs = hogs.sort((a, b,) => (a.weight > b.weight) ? 1 : -1)
        }
       this.setState({...this.state, hogs: sortedHogs})
    }

    renderHogs = () => {
        let hogs
        if (this.state.filterGreased) {
            hogs = this.state.hogs.filter(hog => hog.greased === true)
        } else {
            hogs = this.state.hogs
        }
        const hogCards = hogs.map(hog => {
            return <HogCard  {...hog} />
        })
        return hogCards
    }


    render() {
       return (
           <div>
               <div>
                   <FilterBar greasedFilter={this.toggleFilterGreased} sortPigs={this.sortPigs}/>
               </div>
                <div className= "ui grid container">
                    {this.renderHogs()}
                </div>
           </div>
       )
    }
}

export default Container