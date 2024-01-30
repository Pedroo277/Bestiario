var botao = document.getElementById("botao-alterar-tema");
botao.addEventListener("click", function() {
  document.body.classList.toggle("modo-claro");

  var Sol = document.getElementById("imagem-botao");
  var Lua = document.getElementById("imagem-botao-2");

  if (document.body.classList.contains("modo-claro")) {
    Sol.style.display = "block";
    Lua.style.display = "none";
  } else {
    Sol.style.display = "none";
    Lua.style.display = "block";
  }
});



        
      