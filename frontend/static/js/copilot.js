const chat=document.getElementById("chatArea");

function sendMessage(){

const input=document.getElementById("userInput");

const text=input.value.trim();

if(text==="") return;

const user=document.createElement("div");

user.className="user";

user.innerHTML=text;

chat.appendChild(user);

setTimeout(()=>{

const bot=document.createElement("div");

bot.className="bot";

bot.innerHTML=generateReply(text);

chat.appendChild(bot);

chat.scrollTop=chat.scrollHeight;

},600);

input.value="";

chat.scrollTop=chat.scrollHeight;

}

function quickAction(action){

document.getElementById("userInput").value=action;

sendMessage();

}

function generateReply(msg){

msg=msg.toLowerCase();

if(msg.includes("cpu"))

return "CPU utilization is within safe limits. Continue monitoring peak hours.";

if(msg.includes("latency"))

return "Latency is normal. No critical congestion detected.";

if(msg.includes("packet"))

return "Packet loss is minimal. Network health is stable.";

if(msg.includes("root"))

return "Likely root cause: Temporary MPLS congestion.";

if(msg.includes("recommend"))

return "Recommendation: Enable Load Balancing and monitor Router R1.";

if(msg.includes("report"))

return "Generating AI incident report...";

if(msg.includes("analyze"))

return "Log analysis complete. Failure probability: 20% (LOW).";

return "AlphaCopilot is ready to assist with MPLS network troubleshooting.";
}