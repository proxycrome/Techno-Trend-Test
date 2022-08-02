import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAsync } from '../../store/actions';

import { Table } from 'reactstrap';

const Question1 = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAsync());
    }, [dispatch])

    const { users } = useSelector(state => state.Person);


  return (
    <div className='mx-auto'>
        <Table bordered striped>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users?.User_Details?.map(user => (
                    <tr key={user.user_id}>
                        <td><Link to={`/person/${user.user_id}`}>{user.firstname}</Link></td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default Question1;