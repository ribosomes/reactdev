import React, { useState, useEffect } from 'react';
import BackToIndex from '../parts/BackToIndex';
import AlertNoSaveChangeContainer from './container';
import ChangeAreaContainer from './change-area-container';
import ChangeArea from './ChangeArea';
import ChangeableContents from './ChageableContents';

const Index: React.FC = () => {
    const [count, setCount] = useState<number>(1);
    const [counts, setCounts] = useState<number[]>([1]);

    useEffect(() => {
        const a: number[] = [];
        for (let i = 1; i <= count; i += 1) {
            a.push(i);
        }
        setCounts(a);
    }, [count]);

    return (
        <>
            <BackToIndex />
            <AlertNoSaveChangeContainer.Provider>
                <ChangeAreaContainer.Provider initialState>
                    <span onClick={() => setCount(count + 1)}>[+]</span>
                    <span onClick={() => setCount(count - 1)}>[-]</span>
                    {counts.map(v => {
                        return (
                            <div>
                                {v}
                                <ChangeArea />
                            </div>
                        );
                    })}
                    <hr />
                    <ChangeableContents />
                </ChangeAreaContainer.Provider>
            </AlertNoSaveChangeContainer.Provider>
        </>
    );
};

export default Index;
