document.querySelector("#button").addEventListener("click",rollTheDice)
function rollTheDice(){
    var arr=[]
    //Member 1
    var P1 = Math.floor(Math.random()*6)+1;
    arr.push(P1);
    document.querySelector("#member-1").innerText=P1;
     //Member 2
    var P2 = Math.floor(Math.random()*6)+1;
    arr.push(P2);
    document.querySelector("#member-2").innerText=P2;
     //Member 3
    var P3 = Math.floor(Math.random()*6)+1;
    arr.push(P3);
    document.querySelector("#member-3").innerText=P3;
    console.log(arr)

if(arr[0]>arr[1] && arr[1]>arr[2]){
    document.querySelector("#member-1").style.backgroundColor="green";
    document.querySelector("#member-2").style.backgroundColor="yellow";
    document.querySelector("#member-3").style.backgroundColor="red";
    document.querySelector("#winner").innerText="Member-1";
    document.querySelector("#winner").style.backgroundColor="#E64A39";
} else if(arr[0]>arr[2] && arr[2]>arr[1]){
    document.querySelector("#member-1").style.backgroundColor="green";
    document.querySelector("#member-3").style.backgroundColor="yellow";
    document.querySelector("#member-2").style.backgroundColor="red";
    document.querySelector("#winner").innerText="Member-1";
    document.querySelector("#winner").style.backgroundColor="#E64A39";
}else if (arr[0]>arr[1] && arr[0]>arr[2] && arr[1]==arr[2]){
    document.querySelector("#member-1").style.backgroundColor="green";
    document.querySelector("#member-2").style.backgroundColor="blue";
    document.querySelector("#member-3").style.backgroundColor="blue";
    document.querySelector("#winner").innerText="Member-1";
    document.querySelector("#winner").style.backgroundColor="#E64A39";
}
//Member 2 
if(arr[1]>arr[0] && arr[0]>arr[2]){
    document.querySelector("#member-2").style.backgroundColor="green";
    document.querySelector("#member-1").style.backgroundColor="yellow";
    document.querySelector("#member-3").style.backgroundColor="red";
    document.querySelector("#winner").innerText="Member-2";
    document.querySelector("#winner").style.backgroundColor="#E64A39";
}else if (arr[1]>arr[2] && arr[2]>arr[0]){
    document.querySelector("#member-2").style.backgroundColor="green";
    document.querySelector("#member-3").style.backgroundColor="yellow";
    document.querySelector("#member-1").style.backgroundColor="red";
    document.querySelector("#winner").innerText="Member-2";
    document.querySelector("#winner").style.backgroundColor="#E64A39";
} else if(arr[1]>arr[0] && arr[1]>arr[2] && arr[0]==arr[2]){
    document.querySelector("#member-2").style.backgroundColor="green";
    document.querySelector("#member-1").style.backgroundColor="blue";
    document.querySelector("#member-3").style.backgroundColor="blue";
    document.querySelector("#winner").innerText="Member-2";
    document.querySelector("#winner").style.backgroundColor="#E64A39";
}

// Member 3
if(arr[2]>arr[0] && arr[0]>arr[1]){
    document.querySelector("#member-3").style.backgroundColor="green";
document.querySelector("#member-1").style.backgroundColor="yellow";
document.querySelector("#member-2").style.backgroundColor="red";
document.querySelector("#winner").innerText="Member-3";
document.querySelector("#winner").style.backgroundColor="#E64A39";
}else if (arr[2]>arr[1] && arr[1]>arr[0]){
    document.querySelector("#member-3").style.backgroundColor="green";
document.querySelector("#member-2").style.backgroundColor="yellow";
document.querySelector("#member-1").style.backgroundColor="red";
document.querySelector("#winner").innerText="Member-3";
document.querySelector("#winner").style.backgroundColor="#E64A39";
}else if(arr[2]>arr[0] && arr[2]>arr[1] && arr[0]==arr[1]){
    document.querySelector("#member-3").style.backgroundColor="green";
document.querySelector("#member-2").style.backgroundColor="blue";
document.querySelector("#member-1").style.backgroundColor="blue";
document.querySelector("#winner").innerText="Member-3";
document.querySelector("#winner").style.backgroundColor="#E64A39";
}
//both winner 
if(arr[0]==arr[2] && arr[0]>arr[1] && arr[2]>arr[1]){
    document.querySelector("#member-3").style.backgroundColor="blue";
    document.querySelector("#member-1").style.backgroundColor="blue";
    document.querySelector("#member-2").style.backgroundColor="red";
    document.querySelector("#winner").innerText="Member-1 & Member-3";
    document.querySelector("#winner").style.backgroundColor="#3484F0";
}else if(arr[0]==arr[1] && arr[1]>arr[2] && arr[0]>arr[2]){
    document.querySelector("#member-1").style.backgroundColor="blue";
    document.querySelector("#member-2").style.backgroundColor="blue";
    document.querySelector("#member-3").style.backgroundColor="red";
    document.querySelector("#winner").innerText="Member-1 & Member-2";
    document.querySelector("#winner").style.backgroundColor="#3484F0";
}else if(arr[0]==arr[1] && arr[1]>arr[2] && arr[0]>arr[2]){
    document.querySelector("#member-1").style.backgroundColor="blue";
    document.querySelector("#member-2").style.backgroundColor="blue";
    document.querySelector("#member-3").style.backgroundColor="red";
    document.querySelector("#winner").innerText="Member-1 & Member-2";
    document.querySelector("#winner").style.backgroundColor="#3484F0";
}
// Draw Match
if(arr[0]==arr[1] && arr[1]==arr[2]){
    document.querySelector("#member-3").style.backgroundColor="blue";
    document.querySelector("#member-2").style.backgroundColor="blue";
    document.querySelector("#member-1").style.backgroundColor="blue";
    document.querySelector("#winner").innerText="Match Draw";
    document.querySelector("#winner").style.backgroundColor="#3484F0";
    }
}

