import React, { Component } from 'react';
import mockTeamData from './mockTeamData';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: mockTeamData
        }
    }

    render() {
        return (
            <div>
                <ul><b>Team:</b>
                    {this.state.teams.map(team =>
                    <div key={team.id}>
                        <li>{team.team_name}</li>
                        <ul><b>Record:</b>
                            <li>{team.wins}</li>
                            <li>{team.losses}</li>
                        </ul>
                    </div>)}
                </ul>
            </div>
        )
    };
};

export default App;