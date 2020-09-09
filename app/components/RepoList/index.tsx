import React, {FunctionComponent, Fragment, useState, useEffect} from 'react';
import { Repo } from '../../models/Repo';

interface Props {
    repos: Repo[]
}

const RepoList: FunctionComponent<Props> = ({ repos }) => {
    const [order, setOrder] = useState('');
    const [tempRepos, setTempRepos] = useState(repos);
    let icon = '';
    if (order === 'asc') {
        icon = '↑';
    } else if (order === 'desc') {
        icon = '↓';
    }

    useEffect(() => {
        setTempRepos(repos);
    }, [repos]);


    const updateOrdering = () => {
        let newOrder = '';
        switch (order) {
            case '':
                newOrder = 'asc';
                break;
            case 'asc':
                newOrder = 'desc';
                break;
            case 'desc':
                newOrder = '';
                break;
        }
        setOrder(newOrder);
        orderRepos(newOrder);
    };

    const orderRepos = (order: string) => {
        if (order === '') {
            return setTempRepos([...repos])
        }
        let orderedRepos = [...repos];
        orderedRepos.sort((r1, r2) => {
            return r1.name.localeCompare(r2.name)
        });
        if (order === 'desc') {
            orderedRepos.reverse();
        }
        setTempRepos(orderedRepos)
    };

    return (
        <Fragment>
            <hr/>
            <h4>Repositories</h4>
            <table className="repo-list">
                <thead>
                <tr>
                    <th className="name-header" onClick={updateOrdering}>Name {icon}</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                {tempRepos.map(repo => (
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
