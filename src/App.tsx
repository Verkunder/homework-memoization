import React, {useState, useMemo} from 'react';
import Callback from "./components/Callback";
const sum = (n: number) => {
    return n + n
};

const App = () => {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const result = useMemo(() => sum(num), [num]);
    const style = {
        margin: '20px 0'
    }

    return (
        <div>
            <h1 onClick={() => setIsGreen(!isGreen)}
                style={{ color: isGreen ? "green" : "red" }}
            >
                Example
            </h1>
            <h2>
                Sum {result}
            </h2>
            <button onClick={() => setNum(num + 1)}>➕</button>
            <div style={style}>
            <Callback />
            </div>
        </div>
    );
};

export default App;