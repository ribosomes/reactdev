import React from 'react';
import AlertNoSaveChangeContainer from './container';

const Contents: React.FC = () => {
    const showAlert = AlertNoSaveChangeContainer.useContainer();

    //    window.onbeforeunload;

    return (
        <>
            <p>show flag: {showAlert.shouldAlertShow ? 'o' : '-'}</p>
            <button type="button" onClick={showAlert.setAlert}>
                set alert
            </button>
            <button type="button" onClick={showAlert.unsetAlert}>
                unset alert
            </button>
        </>
    );
};

export default Contents;
