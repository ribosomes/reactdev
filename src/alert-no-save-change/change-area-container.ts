import { useState, useCallback, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { v1 } from 'uuid';
//
import AlertNoSaveChangeContainer from './container';

const useChangeArea = (ignore: boolean = false) => {
    const alertNoSaveChangeContainer = AlertNoSaveChangeContainer.useContainer();
    const [uuid] = useState<string>(v1());
    const [changed, _setChanged] = useState<boolean>(false);

    // 変更を探知した場合 -- 必要があれば、alert no save に変更を登録する
    const onChanged = useCallback(
        () => {
            if (!ignore) {
                if (!changed) {
                    alertNoSaveChangeContainer.addChange(uuid);
                    _setChanged(true);
                }
            }
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [changed, _setChanged, uuid, ignore]
    );

    // 変更をリセットする場合 -- 必要があれば、alert no save から変更を除去する
    const onReset = useCallback(
        () => {
            if (!ignore) {
                if (changed) {
                    alertNoSaveChangeContainer.removeChange(uuid);
                    _setChanged(false);
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [changed, _setChanged, uuid, ignore]
    );

    // component を unmount する際に解除しておく
    useEffect(() => {
        return () => {
            alertNoSaveChangeContainer.removeChange(uuid);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid, alertNoSaveChangeContainer.removeChange]);

    return {
        // props
        changed,
        uuid,
        // handlers
        onChanged,
        onReset,
    };
};

const ChangeAreaContainer = createContainer(useChangeArea);

export default ChangeAreaContainer;
