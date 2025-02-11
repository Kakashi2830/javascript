let intervalId=null;

const startButton=document.querySelector('#start');
const stopButton=document.querySelector('#stop');
const sayDate=function(str){
    console.log(str,Date.now());
}



startButton.addEventListener('click',()=>{
    if(!intervalId){
        intervalId=setInterval(sayDate,1000,"Sagnik");
    }
});
stopButton.addEventListener('click',()=>{

    clearInterval(intervalId);
    intervalId=null;
});