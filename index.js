var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");     
    }
    event.currentTarget.classList.add("active-links")


    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab")
}