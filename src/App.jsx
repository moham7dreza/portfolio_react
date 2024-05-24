import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {decrement, increment, incrementAsync, incrementByAmount, selectCount} from "./features/counter/counterSlice";
import {useDispatch, useSelector} from "react-redux";

function App() {
    // for states which used only in one component don't need to define them in redux store
    const [incrementAmount, setIncrementAmount] = useState(0)
    // use custom selector for get counter slice from state
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => dispatch(decrement(1))}>
                    -
                </button>
                <button onClick={() => dispatch(increment(2))}>
                    count is {count}
                </button>
                <button onClick={() => dispatch(increment(1))}>
                    +
                </button>
            </div>
            <div className="card">
                {/*value of state converted to number and passed to action to dispatch it to store reducer*/}
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
                    add by amount
                </button>
                <input type='number' size={20} value={incrementAmount}
                       onChange={(e) => setIncrementAmount(e.target.value)}/>
                {/*value received from input is string and must be converted to number*/}
            </div>
            <div className="card">
                <button onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}>
                    add async
                </button>
            </div>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
