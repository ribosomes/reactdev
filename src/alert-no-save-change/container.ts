import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useAlertNoSaveChange = () => {
    const [shouldAlertShow, setShouldAlertShow] = useState<boolean>(false);

    const setAlert = () => {
        setShouldAlertShow(true);
        window.onbeforeunload = () => {
            return '';
        };
    };
    const unsetAlert = () => {
        setShouldAlertShow(false);
        window.onbeforeunload = () => {};
    };

    return {
        shouldAlertShow,
        setAlert,
        unsetAlert,
    };
};

const AlertNoSaveChangeContainer = createContainer(useAlertNoSaveChange);

export default AlertNoSaveChangeContainer;
