import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] use effect');
        // const timer = setTimeout(() => {
        //     //alert('Saved some data to cloud');
        //     console.log('Saved some data to cloud');
        // }, 1000);

        //Automatically click the toggle button on page load
        // toggleBtnRef.current.click();
        return () => {
            //clearTimeout(timer);
            console.log('[Cockpit.js] cleapup work in useEffect')
        }
    }, [])

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
            <AuthContext>
                {(context) => <button className={btnClass} onClick={context.login}>Log In</button>}
            </AuthContext>
        </div>
    );
};

export default cockpit;