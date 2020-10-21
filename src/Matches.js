import React from 'react';
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/v2/fixtures/team/49/next/5',
  params: {timezone: 'Europe/London'},
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': `${process.env.REACT_APP_RAPIDAPI_KEY}`
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
    let output = '';
    response.data.api.fixtures.forEach(function(fixture) {
        output += `<div class="my-5"><p class="text-center">${fixture.event_date}<br><span class="text-secondary">${fixture.league.name}</span></p><div class="d-flex"><div class="d-flex flex-column align-items-center text-center font-weight-bold" style="flex: 50%;"><img src="${fixture.homeTeam.logo}" width="64px"> ${fixture.homeTeam.team_name}</div><div class="d-flex flex-column align-items-center text-center font-weight-bold" style="flex: 50%;"><img src="${fixture.awayTeam.logo}" width="64px"> ${fixture.awayTeam.team_name}</div></div></div>`
    });

    document.getElementById('fixture').innerHTML = output;

}).catch(function (error) {
	console.error(error);
});

export const Matches = () => (
    <React.Fragment>
        <h1 className="my-2 text-center">Matches</h1>
        <div id="fixture"></div>
        <br />
        <div className="card">
            <div className="card-body bg-warning">
                <p className="font-weight-bold">To-do:</p>
                <ul className="list-unstyled">
                    <li>- add ability to export the match(s) to a calendar</li>
                    <li>- (or) use notifications [PWA]</li>
                </ul>
            </div>
        </div>
    </React.Fragment>
)