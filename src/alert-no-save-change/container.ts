import { useState, useCallback, useEffect } from 'react';
import { createContainer } from 'unstated-next';

type changeExistStatus = { [key: string]: boolean };

const alertSendFn = () => {
    return '';
};
const noAlertSendFn = () => {};

const controlOnbeforeunload = (status: changeExistStatus) => {
    window.onbeforeunload = Object.keys(status).length > 0 ? alertSendFn : noAlertSendFn;
};

const useAlertNoSaveChange = () => {
    const [statusMap, setStatusMap] = useState<changeExistStatus>({});

    const addChange = useCallback(
        (uuid: string) => {
            // eslint-disable-next-line no-restricted-syntax
            if (!(uuid in statusMap)) {
                const newStatus: changeExistStatus = {
                    ...statusMap,
                    [uuid]: true,
                };
                setStatusMap(newStatus);
                controlOnbeforeunload(newStatus);
            }
        },
        [statusMap, setStatusMap]
    );

    const removeChange = useCallback(
        (uuid: string) => {
            // eslint-disable-next-line no-restricted-syntax
            if (uuid in statusMap) {
                delete statusMap[uuid];
                const newStatus = { ...statusMap };

                setStatusMap(newStatus);
                controlOnbeforeunload(newStatus);
            }
        },
        [statusMap, setStatusMap]
    );

    return {
        addChange,
        removeChange,
    };
};

const AlertNoSaveChangeContainer = createContainer(useAlertNoSaveChange);

export default AlertNoSaveChangeContainer;
