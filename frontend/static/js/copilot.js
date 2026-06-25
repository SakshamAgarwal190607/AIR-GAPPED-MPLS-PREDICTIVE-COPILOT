function sendMessage(){

let input =
document.getElementById("userInput");

let chat =
document.getElementById("chatArea");

let text = input.value;

if(text==="") return;

chat.innerHTML += `
<div class="user">
${text}
</div>
`;

setTimeout(()=>{

chat.innerHTML += `
<div class="bot">

Risk is HIGH because:

• CPU Usage = 95%

• Latency = 180ms

• Packet Loss = 4%

Recommended Action:

1. Investigate Router R1

2. Enable Load Balancing

3. Reduce MPLS Congestion

</div>
`;

chat.scrollTop =
chat.scrollHeight;

},500);

input.value="";
}