import React from 'react';
import BackToIndex from '../parts/BackToIndex';
import AlertNoSaveChangeContainer from './container';
import Contents from './Contents';

const Index: React.FC = () => {
    return (
        <>
            <BackToIndex />
            <AlertNoSaveChangeContainer.Provider>
                <Contents />
            </AlertNoSaveChangeContainer.Provider>
        </>
    );
};

export default Index;
