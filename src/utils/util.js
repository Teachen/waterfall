function getCurrentTime(){var keep='';var date=new Date();var y=date.getFullYear();var m=date.getMonth()+1;m=m<10?'0'+m:m;var d=date.getDate()<10?'0'+date.getDate():date.getDate();var h=date.getHours()<10?'0'+date.getHours():date.getHours();var f=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();var s=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();var rand=Math.round(Math.random()*899+100);keep=y+''+m+''+d+''+h+''+f+''+s;return keep;}
function objLength(input){var type=toString(input);var length=0;if(type!="[object Object]"){}else{for(var key in input){if(key!="number"){length++;}}}
return length;}
function vailPhone(number){let flag=false;let myreg=/^(((13[0-9]{1})|(14[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;if(number.length!=11){flag=flag;}else if(!myreg.test(number)){flag=flag;}else{flag=true;}
return flag;}
function ifSpanish(number){let flag=false;let myreg=/^([6|7|9]{1}(\d+){8})$/;if(number.length!=9){flag=flag;}else if(!myreg.test(number)){flag=flag;}else{flag=true;}
return flag;}
function div(a,b){var c,d,e=0,f=0;try{e=a.toString().split(".")[1].length;}catch(g){}
try{f=b.toString().split(".")[1].length;}catch(g){}
return c=Number(a.toString().replace(".","")),d=Number(b.toString().replace(".","")),mul(c/d,Math.pow(10,f-e));}
function accAdd(arg1,arg2){var r1,r2,m;try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
m=Math.pow(10,Math.max(r1,r2));return((arg1*m+arg2*m)/m).toFixed(2);}
function mul(a,b){var c=0,d=a.toString(),e=b.toString();try{c+=d.split(".")[1].length;}catch(f){}
try{c+=e.split(".")[1].length;}catch(f){}
return Number(d.replace(".",""))*Number(e.replace(".",""))/Math.pow(10,c);}
function displayProp(obj){var names="";for(var name in obj){names+=name+obj[name];}
return names;}
function sTrim(text){return text.replace(/\s/ig,'')}
function replaceMaohao(txt){return txt.replace(/\:/ig,'')}
function convertStarArray(score){var arr=[]
for(var i=1;i<=5;i++){if(score>=i){arr.push(1)}else if(score>i-1&&score<i+1){arr.push(2)}else{arr.push(0)}}
return arr}
module.exports={getCurrentTime:getCurrentTime,objLength:objLength,displayProp:displayProp,sTrim:sTrim,replaceMaohao:replaceMaohao,vailPhone:vailPhone,ifSpanish:ifSpanish,div:div,mul:mul,accAdd:accAdd,convertStarArray:convertStarArray}