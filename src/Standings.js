import React from 'react';
import axios from "axios";

const options = {
  method: 'GET',
  url: '/data/Standings.json'
//   url: 'https://rapidapi.p.rapidapi.com/v2/leagueTable/2790',
//   params: {timezone: 'Europe/Kiev'},
//   headers: {
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
//     'x-rapidapi-key': `${process.env.REACT_APP_RAPIDAPI_KEY}`
//   }
};

axios.request(options).then(function (response) {
    console.log(response.data);
    let output = '';
    response.data.standings.forEach(function(standing) {
        output += `<tr><td>${standing.rank}</td> <td><img src="${standing.logo}" height="32px" class="mr-2"/> ${standing.teamName}</td><td>${standing.points}</td></tr>`
    });

    document.getElementById('table').innerHTML = output;

}).catch(function (error) {
	console.error(error);
});

export const Standings = () => (
    <React.Fragment>
        <h1 className="my-2 text-center">Premier League</h1>
        <br />
        <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Team</th>
                <th scope="col">PTS</th>
            </tr>
        </thead>
        <tbody id="table">

        </tbody>
        </table>

        <br />
        <div className="card">
            <div className="card-body bg-warning">
                <p className="font-weight-bold">To-do:</p>
                <ul className="list-unstyled">
                    <li>- show the Premier League standings</li>
                    <li>- add standings from other tournaments</li>
                </ul>
            </div>
        </div>
    </React.Fragment>
)