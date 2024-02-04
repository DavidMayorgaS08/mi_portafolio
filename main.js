window.addEventListener("load", function(){
    let cont1 = document.getElementById("cont_loader");

    this.setTimeout(function(){
        cont1.classList.remove("cont_loader1");
        cont1.classList.add("cont_loader1");
    }, 1500);
});


function start(){
    let cont1 = document.getElementById("cont1");

    cont1.classList.remove("sub_cont1");
    cont1.classList.add("sub_cont1");

    let options = document.getElementById("cont_options");
    let footer = document.getElementById("cont_footer");

    options.style.left = "50%";
    footer.style.bottom = "10px";
}

function trabajos(){
    let cont_trabajos = document.getElementById("cont_trabajos");
    let options = document.getElementById("cont_options");
    let volver = document.getElementById("cont_volver");

    options.style.left = "-100%";
    cont_trabajos.style.display = "grid";

    setTimeout(function(){
        cont_trabajos.style.clipPath = "inset(0 0 -100% 0)";
        volver.style.top = "20px";
    }, 500);
}

function proyectos(){
    let cont_proyectos = document.getElementById("cont_proyectos");
    let options = document.getElementById("cont_options");
    let volver = document.getElementById("cont_volver");

    options.style.left = "-100%";
    cont_proyectos.style.display = "grid";

    setTimeout(function(){
        cont_proyectos.style.clipPath = "inset(0 0 -100% 0)";
        volver.style.top = "20px";
    }, 500);
}

function volver(){
    let cont_trabajos = document.getElementById("cont_trabajos");
    let cont_proyectos = document.getElementById("cont_proyectos");
    let options = document.getElementById("cont_options");
    let volver = document.getElementById("cont_volver");

    volver.style.top = "200%";

    if(cont_trabajos.style.display == "grid"){
        cont_trabajos.style.clipPath = "inset(0 0 100% 0)";
        setTimeout(function(){
            cont_trabajos.style.display = "none";
            options.style.left = "50%";
        }, 1200);
    }
    else if(cont_proyectos.style.display == "grid"){
        cont_proyectos.style.clipPath = "inset(0 0 100% 0)";
        setTimeout(function(){
            cont_proyectos.style.display = "none";
            options.style.left = "50%";
        }, 1200);
    }


}