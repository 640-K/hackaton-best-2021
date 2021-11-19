import React from "react";

const Leaderboard = () => {
    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Score</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>800</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>1200</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>72000</td>
            </tr>
            </tbody>
        </table>
    );
}

export default Leaderboard;