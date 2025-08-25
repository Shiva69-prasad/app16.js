//DOM EXAMINATION

let val;
val=document;
val=document.all;
val=document.all[0]
val=document.all.length;
val=document.head;
val=document.body;
val=document.doctype
val=document.domain
val=document.URL;
val=document.characterSet
val=document.contentType;

val=document.forms;
val=document.forms[0]
val=document.forms[0].id
val=document.links
val=document.links[0]
val=document.links[0].className;
val=document.links[0].classList
val=document.scripts;
val=document.scripts[0].getAttribute("src");
let scripts=document.scripts;
let scriptsArray=Array.from(scripts)
console.log(scripts);
scriptsArray.forEach(element => {
    console.log(scripts)
    
});
console.log(val);


