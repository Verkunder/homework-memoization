import React, {FC, useEffect} from 'react';

interface ChildProps {
    updateOne: () => void,
    updateTwo: () => void
}

const Child: FC<ChildProps> = ({ updateOne, updateTwo }) => {
    useEffect(() => {
        updateOne();
    }, [updateOne]);

    useEffect(() => {
        updateTwo();
    }, [updateTwo]);
    return (<> <h1>Hello World!</h1> </>);
};

export default Child;