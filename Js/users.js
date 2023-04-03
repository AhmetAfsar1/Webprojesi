// Veriseti
let input=document.querySelector("#input");
let button=document.querySelector("#btn");
let button2=document.querySelector("#btn2");
let Developername=document.querySelector("#Developer-name");
let desc=document.querySelector("#desc");
let list1=document.querySelector("#list1");
let list2=document.querySelector("#list2");
let list3=document.querySelector("#list3");
let title=document.querySelector("#title3");
let fotograf=document.querySelector("#Fotograf");
let Kullanicikontrol=false;
var users = [
    {
        name: "Atakan Adalı",
        photo: "img/img3.png",
        desc: "Full Stack Developer",
        skills: ["HTML","CSS","Javascript"]
    },
    {
        name: "Furkan Çakmaker",
        photo: "img/img1.jpg",
        desc: "Back-End Developer",
        skills: ["Javascript","Python"]
    },
    {
        name: "Elif Uğurel",
        photo: "img/img2.jpg",
        desc: "Front-End Developer",
        skills: ["HTML","CSS","Bootstrap"]
    }
    
]
function Yaz()
{
    let isim=input.value;
 for(var i=0; i<users.length; i++)
     {
       if(users[i].name==input.value)
         {
             title.textContent=" ";
             Developername.textContent=users[i].name;
             desc.textContent=users[i].desc;
             fotograf.src=users[i].photo;
             list1.innerHTML=users[i].skills[0];
             list2.innerHTML=users[i].skills[1];
             list3.innerHTML=users[i].skills[2];
             Kullanicikontrol=true;
             break;
          } 
        else(!Kullanicikontrol)
        {
            title.textContent="Girdiğiniz isimde bir Developer bulunamadı ";
            Developername.textContent="";
            desc.textContent="";
            fotograf.src="";
            list1.textContent="";
            list2.textContent="";
            list3.textContent="";
          
        }
        
     }
     input.value="";
} 
function sıfırla()
{
    Yaz()
            Developername.textContent="";
            desc.textContent="";
            fotograf.src="";
            list1.textContent="";
            list2.textContent="";
            list3.textContent="";
}
button2.addEventListener("click", sıfırla)
button.addEventListener("click", Yaz);

