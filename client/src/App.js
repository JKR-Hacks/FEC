import React, { Component } from 'react';
import sampleData from './sample_data';
import Schedule from './components/Schedule.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: sampleData,
            rams: sampleData[0]
        }
    }

    render() {
        return (
            <div>
                <Schedule
                    teamData={this.state.data}
                    rams={this.state.rams}
                />
            </div>
        );
    };
};

export default App;