function Clock() {
    let today = new Date();
    let todaysdate = today.toDateString();
    let timenow = today.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    let starter = true

    return (
        <p>This is the currunt time: {todaysdate} - {timenow}</p>
    )
}

export default Clock;