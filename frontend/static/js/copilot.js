function sendMessage(){

    let input =
    document.getElementById("user-input");

    let chat =
    document.getElementById("chat-box");

    let message =
    input.value;

    if(message === ""){
        return;
    }

    chat.innerHTML += `
        <div class="user-msg">
            ${message}
        </div>
    `;

    chat.innerHTML += `
        <div class="bot-msg">
            Analyzing Network Logs...
        </div>
    `;

    input.value = "";

    chat.scrollTop =
    chat.scrollHeight;
}