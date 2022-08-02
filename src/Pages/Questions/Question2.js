import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEachUserAsync } from '../../store/actions';

const Question2 = (props) => {
    const dispatch = useDispatch();

    const id = props.match.params.id;

    useEffect(() => {
        dispatch(getEachUserAsync(id));
    }, [dispatch, id])

    const { user } = useSelector(state => state.Person);

    console.log(user)

  return (
    <>
        <div className="p-5">
            <h2>Profile</h2>
            <ul className="d-flex flex-column">
                <li>{user?.User_Details[0]?.firstname} {user?.User_Details[0]?.lastname}</li>
                <li>{user?.User_Details[0]?.email}</li>
                <li>{user?.User_Details[0]?.job_area}</li>
                <li>{user?.User_Details[0]?.job_title}</li>
                <li>{user?.User_Details[0]?.phone_no}</li>
                <li>{user?.Related_Pictures_Count[0]?.picture_count}</li>
                {user?.Related_Pictures?.map((pic, idx) => (
                    <div className="d-flex" key={idx}>
                        <img src={pic.related_pictures} alt="related pics" width="100" />
                    </div>
                ))}
                <li></li>
            </ul>
        </div>
    </>
  )
}

export default withRouter(Question2);