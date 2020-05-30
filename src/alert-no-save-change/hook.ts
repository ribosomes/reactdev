import { v1 } from 'uuid';
import { useState, useCallback, useEffect } from 'react';
import AlertNoSaveChangeContainer from './container';

const useNoSaveChange = () => {
    const container = AlertNoSaveChangeContainer.useContainer();
    const [uuid] = useState<string>(v1());
    const [shouldShowAlert, setShouldShowAlert] = useState<boolean>(false);

    const setAlert = useCallback(() => {
        setShouldShowAlert(true);
        container.addChange(uuid);
    }, [setShouldShowAlert, uuid, container]);

    const unsetAlert = useCallback(() => {
        setShouldShowAlert(false);
        container.removeChange(uuid);
    }, [setShouldShowAlert, uuid, container]);

    useEffect(() => {
        return () => {
            container.removeChange(uuid);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid]);

    return {
        uuid,
        shouldShowAlert,
        setAlert,
        unsetAlert,
    };
};

export default useNoSaveChange;
