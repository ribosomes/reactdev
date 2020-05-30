import React from 'react';
import { Link } from 'react-router-dom';

const BackToIndex: React.FC = () => {
    return (
        <p>
            <Link to="/">→ back to index</Link>
        </p>
    );
};

export default BackToIndex;
