let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let selecList = document.querySelector("#mySelect");
countries.forEach(element => {
    let country = document.createElement("option");
    country.innerHTML = element;
    selecList.appendChild(country);
});

document.querySelector("#mySelect").addEventListener("change", ()=>{
    let x = document.getElementById("mySelect");
    alert(x.options[x.selectedIndex].value);
});
