var variavel = 10;

function funcao() {
  var variavel = 2;
  this.variavel = 3;
  var xuxu = function() {
    console.log("chegou aqui 2");

  };
  //   console.log(" Chegou aqui: " +);

  console.log(self.xuxu);
}

funcao();
