import React from 'react';

var Schedule = (props) => (
  <div className="col-xs-12" id="sticky-sidebar">
  {/* start with rendering data in a list, then refactor to a table layout */}
    <ul>
      {props.teamData.map((team) => {
        return(
          <li className='team-list-item'key={team.id}>
            <div className='team-list-item-teamname'>TEAM NAME: @{team.team}</div>
            <div>NEWS FEED: {team.feed[0]}</div>
            <div>HIGH PASS: {team.players[1]} {team.stats.pass[0]} yards</div>
            <div>HIGH REC: {team.players[2]} {team.stats.rec[0]} yards</div>
            <div>HIGH RUSH: {team.players[3]} {team.stats.rush[0]} yards</div>
            <div>TEAM ROSTER: {team.players[0]}, etc...</div>
            <div>WIN-LOSS: {team.winloss[0]}</div>
            <div>OPPONENTS: {team.opponent[0]}</div>
            <div>WEEK: {team.week[0]}</div>
            <div>LOGO: <img src={`${team.logo}`}/></div>
          </li>
        )
      })}
    </ul>
  </div>
)
export default Schedule;