// Code Keypad Component Here

function Keypad() {
    return (
        <input onChange={(e) => {
            console.log('Entering password...')}} type="password" />
    )
}

export default Keypad;