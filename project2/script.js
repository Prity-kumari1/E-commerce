let main = document.getElementById("main");
let blogs = document.getElementById("blogs");
let men = document.getElementById("men")
let women = document.getElementById("women")
let aboutUs = document.getElementById("about");
let contacts = document.getElementById("contact")
// let letter = document.getElementById("letter");
function shop(){
    main.style.display = "none";
    blogs.style.display= "none";
    aboutUs.style.display = "none";
    contacts.style.display= "none";
    men.style.display="block";
    women.style.display="block";
};
function blog(){
    main.style.display = "none";
    blogs.style.display= "block";
    men.style.display="none";
    women.style.display="none";
    aboutUs.style.display = "none";
    contacts.style.display= "none";
    
};
function about(){
    main.style.display = "none";
    blogs.style.display= "none";
    men.style.display="none";
    women.style.display="none";
    aboutUs.style.display = "block";
    contacts.style.display= "none";
    
};
function contact(){
    main.style.display = "none";
    blogs.style.display= "none";
    men.style.display="none";
    women.style.display="none";
    contacts.style.display = "block";
    aboutUs.style.display = "none";

};