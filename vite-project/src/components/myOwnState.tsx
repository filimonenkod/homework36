const myOwnState = (initialValue) => {
    let state = initialValue;
    
    const changeState = (newValue) => {
        state = newValue;
    };

    return [state, changeState];
};