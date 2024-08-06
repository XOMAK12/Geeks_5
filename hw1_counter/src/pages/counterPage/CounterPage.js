import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './counterPage.css'

const CounterPage = () => {

    const title = useSelector(state => state.title);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({
            type: '+1'
        });
    };

    const handleDecrement = () => {
        dispatch({
            type: '-1' });
    };

    const handleIncrement10 = () => {
        dispatch({
            type: '+10',
            payload: 10 });
    };

    const handleDecrement10 = () => {
        dispatch({
            type: '-10',
            payload: 10 });
    };

    const handleReset = () => {
        dispatch({
            type: 'RESET' });
    };

    return (
        <div className="counter-page">
            <div className="counter-container">
                <h1>Счетчик: {title}</h1>
                <div className="counter-buttons">
                    <button onClick={() => handleDecrement10()}>-10</button>
                    <button onClick={handleDecrement}>-1</button>
                    <button onClick={handleReset}>Сброс</button>
                    <button onClick={handleIncrement}>+1</button>
                    <button onClick={() => handleIncrement10()}>+10</button>
                </div>
            </div>
        </div>
    );
};

export default CounterPage;