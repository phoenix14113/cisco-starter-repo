import { useState, useEffect } from "react";

function PacketLatency() {
    const [data, setData] = useState(null);
    let socket = new WebSocket("ws://localhost:55455");

    useEffect(() => {

        socket.onmessage = function (event) {
            setData( (Date.now()) - event.data );
        };
    });

    socket.onerror = function (error) {
        console.log(`[error]`);
    };
    return (<div>{data}</div>)
}

export default PacketLatency;