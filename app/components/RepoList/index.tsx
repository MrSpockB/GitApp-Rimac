import React, {FunctionComponent, Fragment} from 'react';
import { Repo } from '../../models/Repo';

interface Props {
    repos: Repo[]
}

const RepoList: FunctionComponent<Props> = ({ repos }) => {
    return (
        <Fragment>
            <hr/>
            <h4>Repositories</h4>
            <table className="repo-list">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                {repos.map(repo => (
                    <tr key={`list-${repo.name}`}>
                        <td>{repo.name}</td>
                        <td>{repo.description || '---'}</td>
                        <td>
                            <a target="_blank" href={repo.repoURL}>Link</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default RepoList;
