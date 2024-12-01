/*first step create
1- 
2- select inputs
3 - value inputs
4- object product
5- list products

*/




var siteName =document.getElementById("name");
var siteUrl =document.getElementById("url");
var alret =document.getElementById("alret")
var closebtn=document.getElementById("closeBtn");
var form = document.querySelector("form")



var WebSiteList =[];
if (localStorage.getItem("webSite") != null){
  WebSiteList = JSON.parse(localStorage.getItem("webSite"))
  display()
}



//sitting from 
form.addEventListener("submit",function(e){
e.preventDefault();
})



//close model
function closeBtn(){
  alret.classList.add("d-none")
  
}


//add
function addSite() {

if(validation("name")&&validation("url")){
  
  var  webSite ={
    webName:siteName.value,
    webUlr:siteUrl.value,
          };
          WebSiteList.push(webSite);
          localStorage.setItem("webSite",JSON.stringify(WebSiteList))
          display();
          clear();
          console.log(WebSiteList);

        }else{
          alret.classList.remove("d-none")
        }
    
  }






// display

function display(){
    var data = ""
    for(var i=0; i<WebSiteList.length;i++){
        data += `
        <tr>
                <td>${(i+1)}</td>
                <td>${WebSiteList[i].webName}</td>
                <td>
                    <a target="_blank" class="text-decoration-none btn btn-success text-white" href="${WebSiteList[i].webUlr}"><i class="fa-solid fa-eye"></i> Visit
                    </a>
                </td>
                <td>
           <a onclick="deleteItem(${i})"  class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i> Delete
                </a> 
                </td>
              </tr>
        `
    }
    document.getElementById("tdata").innerHTML=data;
}



//clear input
function clear(){
    siteName.value=""; 
    siteUrl.value = "";
}


 //delete item
function deleteItem(index){
WebSiteList.splice(index,1);
  localStorage.setItem("webSite",JSON.stringify(WebSiteList));
  display();

   
}




function validation(id){
  console.log(id);
  var myElement = document.getElementById(id);
var regexs ={
        
  name: /^[a-zA-Z]\w{2,100}$/,
  url:/^(http:\/\/|https:\/\/)[.a-zA-Z0-9]{3,50}\.com$/ ,
}

  var testName = myElement.value

if(regexs[id].test(testName)){
myElement.classList.add("is-valid")
  myElement.classList.remove("is-invalid")
  alret.classList.add("d-none")
return true;
}else{
  myElement.classList.add("is-invalid")
  myElement.classList.remove("is-valid")
alret.classList.remove("d-none")
  return false;
}

}







//validation input name

// function ValidationBookName(){
//     var regName = /^[a-zA-Z]\w{2,100}$/

// var testName =siteName.value;

// if(regName.test(testName)){
// siteName.classList.add("is-valid")
//   siteName.classList.remove("is-invalid")
// nameValid.classList.add("d-none")
// }else{
//   siteName.classList.add("is-invalid")
//   siteName.classList.remove("is-valid")
//   nameValid.classList.remove("d-none")
// }
// return testName;
// }



//validation url 
// function ValidationURL(){
//    var regurl = /^(http:\/\/|https:\/\/)[.a-zA-Z0-9]{3,50}\.com$/
// var testurl =siteUrl.value;

// if(regurl.test(testurl)){
// siteUrl.classList.add("is-valid")
//   siteUrl.classList.remove("is-invalid")
//   urlValid.classList.add("d-none")
// }else{
//   siteUrl.classList.add("is-invalid")
//   siteUrl.classList.remove("is-valid")
//   urlValid.classList.remove("d-none")
 
// }
// return testurl;
// }

