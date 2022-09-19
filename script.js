function afficheMenu(obj){

    var idMenu = obj.id;
    var idSousMenu ='sous' + idMenu;
    var sousMenu = document.getElementById(idSousMenu);

    if(sousMenu){
        if(sousMenu.style.display =="block"){
            sousMenu.style.display = "non";
        }
        else{
            sousMenu.style.display = "block";
        }
    }
}