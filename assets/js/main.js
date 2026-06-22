async function loadCompont(id,file){
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

loadCompont("navbar","./components/navbar.html");
loadCompont("jumbotron","./components/jumbotron.html");