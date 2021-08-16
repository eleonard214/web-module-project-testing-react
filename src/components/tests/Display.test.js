import React, { useState } from 'react';
import Loading from "../Loading";
import Show from "../Show";
import fetchShow from '../../api/fetchShow'

const Display = (props) => {
    const [show, setShow] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState("none");

    if (!'none')
    return <Loading />

    const { displayFunc } = props;
    const handleClick = () => {
        fetchShow().then(data => {
            setShow(data);

            if (displayFunc) {
                displayFunc();
            }

        });
    }
        
    const handleSelect = e => {
        setSelectedSeason(e.target.value);
    };

    return (
        <div>
            <img className="poster-img" src='http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg' alt="header image" />
            <br/>
            { !show ? <button onClick={handleClick}>Press to Get Show Data</button> :<Show show={show} selectedSeason={selectedSeason} handleSelect={handleSelect}/> }
        </div>
    );
}

export default Display












///Tasks:
//1. Add in necessary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.