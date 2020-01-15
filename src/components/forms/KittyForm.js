import React, {Component} from "react";
import { connect } from "react-redux";
import { setCondition } from "./../../actions";
import axios from "axios";

class KittyForm extends Component {
    state = {
        stress: null,
        sleep: null,
    }

    componentDidMount() {
        console.log(this.props);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { stress, sleep } = this.state; 

        // axios
    }

    // onInputChange

    render() {
        const { stress, sleep } = this.state;

       return (
            <form onSubmit={this.onFormSubmit}>
                <h2> On a scale of 3 - 7 </h2>
                <h2> How Stressed are you?</h2>
                <p>
                    <label htmlFor="stress">Stress</label>
                    <input type="number" name="stres" min="3" max="7" value={stress} />
                </p>
                <h1> How many hours of sleep did you get last night? </h1>
                <p>
                    <label htmlFor="stress">Sleep</label>
                    <input type="number" name="sleep" min="1" max="12" value={sleep} />
                </p>
            </form>
       )
    }
}
const mapStateToProps = state => {
    return { condition: state.condition}
}

export default connect(mapStateToProps, { setCondition })(KittyForm);

