
let html = document.getElementById("logo-html");
let java = document.getElementById("logo-java");
let sql = document.getElementById("logo-sql");
let css = document.getElementById("logo-css");
let csharp = document.getElementById("logo-csharp");
let figma = document.getElementById("logo-figma");
let barra = document.getElementById("progresso");
let txtProgresso = document.getElementById("texto-progresso");


html.addEventListener('mouseover', () => { barra.style.width = '80%';
    html.style.width = '15%';
    html.style.height = '20vh';
    html.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "80%";
});
html.addEventListener('mouseout', () => { barra.style.width = '0%';
    html.style.width = '10%';
    html.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
java.addEventListener('mouseover', () => { barra.style.width = '25%';
    java.style.width = '15%';
    java.style.height = '20vh';
    java.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "25%";
});
java.addEventListener('mouseout', () => { barra.style.width = '0%';
    java.style.width = '10%';
    java.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
sql.addEventListener('mouseover', () => { barra.style.width = '75%';
    sql.style.width = '15%';
    sql.style.height = '20vh';
    sql.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "75%";
});
sql.addEventListener('mouseout', () => { barra.style.width = '0%'
    sql.style.width = '10%';
    sql.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
css.addEventListener('mouseover', () => { barra.style.width = '65%';
    css.style.width = '15%';
    css.style.height = '20vh';
    css.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "65%";
});
css.addEventListener('mouseout', () => { barra.style.width = '0%';
    css.style.width = '10%';
    css.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
csharp.addEventListener('mouseover', () => { barra.style.width = '35%';
    csharp.style.width = '15%';
    csharp.style.height = '20vh';
    csharp.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "35%";
});
csharp.addEventListener('mouseout', () => { barra.style.width = '0%';
    csharp.style.width = '10%';
    csharp.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
figma.addEventListener('mouseover', () => { barra.style.width = '90%';
    figma.style.width = '15%';
    figma.style.height = '20vh';
    figma.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "90%";
});
figma.addEventListener('mouseout', () => { barra.style.width = '0%';
    figma.style.width = '10%';
    figma.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
let btn = document.getElementById("btn-sobre-mim");
btn.addEventListener('mouseover',() => {
    btn.style.backgroundColor = '#1B002C';
    btn.style.transition = 'background-color 0.2s';
})
btn.addEventListener('mouseout',() => {
    btn.style.backgroundColor = '#78487F';
    btn.style.transition = 'background-color 0.2s';
});
let btnSobre = document.getElementById("btn-sobre-mim");
let modal = document.getElementById("mae-modal");
function aparecerModal(){
    modal.style.display = "block";
}
let ctnDarkMD = document.getElementById('container-btn-dark');
let mainPage = document.getElementById('main-page');
let nomeMarco = document.getElementById('marco-nome');
let habilidadesPage = document.getElementById('habilidades-page');
let projetosPage = document.getElementById('projetos-page');
ctnDarkMD.addEventListener('click',()=>{
    ctnDarkMD.classList.toggle('dark');
    mainPage.classList.toggle('dark');
    nomeMarco.classList.toggle('dark');
    habilidadesPage.classList.toggle('dark');
    projetosPage.classList.toggle('dark');
})
let enviar = document.getElementById('btn-enviar');
let modalzinho = document.getElementById('mae-modalzinho');
enviar.addEventListener('submit', ()=>{
    modalzinho.style.display = 'inline-block';
})


