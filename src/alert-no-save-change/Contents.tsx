import React from 'react';
import useNoSaveChange from './hook';

const Contents: React.FC = () => {
    const showAlert = useNoSaveChange();

    return (
        <>
            <p>id: {showAlert.uuid}</p>
            <p>show flag: {showAlert.shouldShowAlert ? 'o' : '-'}</p>
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
