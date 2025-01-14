let toggleTheme = document.getElementById("toggle-theme");
toggleTheme.onclick=()=>{
    if(document.body.classList.contains("theme") != true){
        document.body.classList.add("theme");
        toggleTheme.src="assets/icons/sun.webp";
    }else{
        document.body.classList.remove("theme");
        toggleTheme.src="assets/icons/moon.webp";
    }
}