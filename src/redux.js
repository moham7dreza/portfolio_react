// 1. actions -> js object with type filed
// can be seemed as events on changes on some where
const action001 = {
    // type : defile what is event do
    // sections : category/action
    type: 'counter/increment',
    // data can be store in payload
    payload: 2,
}

// 2. action creators -> return an action
const increment = number => {
    return {
        type: 'counter/increment',
        payload: number,
    }
}

// 3. reducers -> receive action and state and decides how to change state if necessary and return new state
// can be seemed as event listener which handles events(actions)
// rules
// a. depends on received arguments must calculate new state
// b. reducers can not be changes the state directly inside the reducer -> we should make a copy of state then change the copy
// c. can not act async logic or calculate random values or makes side effects -> do not make app unpredictable
// example
const initialState = {
    value: 1
}
// state should be initialized which reducer returns state
const counterReducer = (state = initialState, action) => {
    // we define conditions for actions which will react to them or not
    switch (action.type) {
        case 'counter/increment':
            const copyState = {...state}
            return {
                // value: copyState.value + action.payload
                value: copyState.value += 1
            }
        // only return current state
        default:
            return state
    }
}

// reducer word takes from array reduce function which reduce array items

const numbers = [1, 2, 4]

const addNumber = (prev, current) => {
    return prev + current
}

const initialValue = 0

const total = numbers.reduce(addNumber, initialValue)
