import React from 'react';

export const News = () => (
    <React.Fragment>
        <h1 className="my-2 text-center">News</h1>
        <br />
        <div className="card">
            <div className="card-body bg-warning">
                <p className="font-weight-bold">To-do:</p>
                <ul className="list-unstyled">
                    <li>- show YouTube videos from featured channels through YouTube API</li>
                    <li>- [GENERAL] wrap the app into PWA (to install in mobiles)</li>
                </ul>
            </div>
        </div>
    </React.Fragment>
)