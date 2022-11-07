function encodeAndDecodeMessages() {
    let sendArea = document.querySelector("#main div:nth-of-type(1) textarea");
    let receiveArea = document.querySelector("#main div:nth-of-type(2) textarea");

    let sendButton = document.querySelector("#main div:nth-of-type(1) button");
    let receiveButton = document.querySelector("#main div:nth-of-type(2) button");

    sendButton.addEventListener('click', send);
    receiveButton.addEventListener('click', receive);

    let sentMessage = '';
    let receivedMessage = '';

    function send(){
        sentMessage = sendArea.value;
        sendArea.value = '';

        receivedMessage = encode(sentMessage);

        receiveArea.textContent = receivedMessage;
    }

    function receive(){
        receivedMessage = decode(receivedMessage);

        receiveArea.value = receivedMessage;
    }

    function encode(message){
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {

            encodedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
        }
        return encodedMessage;
    }

    function decode(message){
        let decodedMessage = '';

        for (let i = 0; i < message.length; i++) {

            decodedMessage += String.fromCharCode(message.charCodeAt(i) - 1);
        }

        return decodedMessage;
    }
}