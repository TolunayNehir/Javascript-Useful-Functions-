//runs with only rest api
export function callrestapi(request){
    const response = await fetch(request);
    const myJson = await response.json(); //extract JSON from the http response
    const pjson=JSON.parse(myJson);
    return pjson;
}
//runs only with javascript object
export function jsonenc(obj){
return JSON.stringify(obj);
}
//runs only with javascript object
export function jsondec(obj){
return JSON.parse(obj);
}
//basic console echo
export function echoo(str){
    console.log(str);
}
//downlad file 
export function downloadf(fileUrl, fileName) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  }
//return date
export function returndate(){
    var d=new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    return "Second : "+s+"Minute : "+m+"Hour : "+h;
}
//time and trigger a function 
export function timertrigger(funcname,second){
    setTimeout(funcname,second);
}
export function mergearr(arr1,arr2){
    const arr3 = arr1.concat(arr2);
    return arr3;
}
export function mergeobj(obj1,obj2){
    let obj3=Object.assign(obj1,obj2);
    return obj3;
}
