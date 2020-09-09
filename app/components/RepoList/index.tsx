import React, {FunctionComponent} from 'react';
import { Repo } from '../../models/Repo';

interface Props {
    repos: Repo[]
}

const RepoList: FunctionComponent<Props> = ({ repos }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {repos.map(repo => (
                        <tr>
                            <td>{repo.name}</td>
                            <td>{repo.description}</td>
                            <td>
                                <a target="_blank" href={repo.repoURL}>Link</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RepoList;
