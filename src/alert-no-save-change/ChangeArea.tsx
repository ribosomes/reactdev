import React from 'react';
import ChangeAreaContainer from './change-area-container';
import ChangeableContents from './ChageableContents';

const ChangeArea: React.FC = () => {
    return (
        <ChangeAreaContainer.Provider initialState={false}>
            <ChangeableContents />
        </ChangeAreaContainer.Provider>
    );
};

export default ChangeArea;
