import React from 'react';

var Schedule = (props) => (
  <div className='schedule'>
  {/* start with rendering data in a list, then refactor to a table layout */}
    <ul>
      {props.teamData.map((team) => {
        return(
          <li className='team-list-item'key={team.id}>
            <div className='team-list-item-teamname'>{team.team}</div>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Schedule;