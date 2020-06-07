import React from 'react';
import ChangeAreaContainer from './change-area-container';

const ChangeableContents: React.FC = () => {
    const changeableContainer = ChangeAreaContainer.useContainer();

    return (
        <div>
            <div onClick={() => changeableContainer.onChanged()}>[changed]</div>
            <div onClick={() => changeableContainer.onReset()}>[reset]</div>
            changed: {changeableContainer.changed ? 'o' : '-'}
        </div>
    );
};

export default ChangeableContents;
