const hourArrow=document.querySelector(".hour");
const minArrow=document.querySelector(".min");
const secArrow=document.querySelector(".sec")

const startTime=()=>{
  const time=new Date();
  const hours=time.getHours();
  const minutes=time.getMinutes();
  const seconds=time.getSeconds();
  const hourDegree=(hours/12)*360;
  const minDegree=(minutes/60)*360;
  const secDegree=(seconds/60)*360;
hourArrow.style.transform=`rotate(${hourDegree}deg)`;
secArrow.style.transform=`rotate(${secDegree}deg)`;
minArrow.style.transform=`rotate(${minDegree}deg)`;
  
}

setInterval(startTime,1000)