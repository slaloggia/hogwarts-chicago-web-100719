import React, {Component} from 'react'

class HogDetail extends Component {

    render() {
        return (
            <div>
                <p>Specialty: {this.props.hog.specialty}</p>
                <p>Weight: {this.props.hog.weight}</p>
                <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
                {this.props.hog.greased ? <p>GREASED</p> : null}
            </div>
        )
    }
}

export default HogDetail;