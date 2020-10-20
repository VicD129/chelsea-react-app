import React from 'react';

export const Matches = () => (
    <React.Fragment>
        <h1 className="my-2 text-center">Matches</h1>
        <br />
        <div className="card">
            <div className="card-body bg-warning">
                <p className="font-weight-bold">To-do:</p>
                <ul className="list-unstyled">
                    <li>- show a chunk of matches from the schedule trought the API-Footbal</li>
                    <li>- add ability to export the match(s) to a calendar</li>
                    <li>- (or) use notifications [PWA]</li>
                </ul>
            </div>
        </div>
    </React.Fragment>
)