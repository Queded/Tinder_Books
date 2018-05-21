// function contar1(){
//     var x=0;
//     console.log(x++);
// }


// $('#contarnaogosto').click(function(){
//     contar1();
// });





// function contar2(){
//     var y=0;
//     console.log(y++);
// }


// $('#contargosto').click(function(){
//     contar2();
// });


 var likes=0;
 var dislikes=0;


  $('.buttonLike').click(function(){
      likes++;
      $('#lbLikes').text(likes);
  });



  $('.buttonDislike').click(function(){
      dislikes++;
      $('#lbDislikes').text(dislikes);
  });







//  var book1_opinion;
//  var book2_opinion;
//  var book3_opinion;

//   $('#book1 button').click(function(){
//      book1_opinion = $(this.attr);
//      ("data-Opinion");
//  });

//  $('#book2 button').click(function(){
//      book2_opinion = $(this.attr);
//      ("data-Opinion");
//  });

//  $('#book3 button').click(function(){
//      book3_opinion = $(this.attr);
//      ("data-Opinion");
//  });











// $('.buttonLike').click(function(){
//     $('#book1').hide();
//     $('#book2').show();
//     $('#book3').hide();
// });


$('.book button').click(function(){

    var opinion = $(this).attr("data-Opinion")
    $current = $ ('.book.active');
    $next = $current.next();

    if($next.length == 0){
        // $next = $ ('.book').first();
        // $next = $ ('.book').eq(0);
        $next = $ ('.book:first-of-type');
    }
    
    $current.removeClass("active");
    $next.addClass("active");
});



$('.book button1').click(function(){

    var opinion = $(this).attr("data-Opinion")
    $current = $ ('.book.active');
    $next = $current.next();

    if($next.length == 0){
        // $next = $ ('.book').first();
        // $next = $ ('.book').eq(0);
        $next = $ ('.book:first-of-type');
    }
    
    $current.removeClass("active");
    $next.addClass("active");
});

// dia 17 de Maio



var book1 = {
   name: "Deep Work - A concentração máxima num mundo de distrações",
   img:  "livro1.jpeg",
   link: "https://www.wook.pt/livro/deep-work-cal-newport/19869587",
   descricao: "Uma das capacidades mais importantes do ser humano está a tornar-se cada vez mais rara. Quem souber dominá-la conseguirá alcançar resultados extraordinários. A concentração máxima é a capacidade de nos focarmos, sem distrações, numa tarefa cognitivamente exigente, para obtermos melhores resultados em menos tempo. É esta aptidão que gera a produtividade e lhe dá a sensação de realização genuína. Em resumo, a concentração máxima é uma espécie de superpoder na nossa economia cada vez mais competitiva. Em Deep Work, o autor, Cal Newport, debruça-se sobre estes novos tempos em que todos somos obrigados a estar ligados e permanentemente disponíveis, mergulhados em múltiplas intromissões. Dividindo este livro em duas partes, Cal Newport demonstra na primeira que, em quase todas as profissões, cultivar uma ética baseada na concentração máxima produzirá grandes benefícios e, para esse efeito, combina uma crítica cultural com uma série de exemplos práticos - pensemos em Carl Jung, que construiu uma torre num bosque para poder ficar completamente isolado, ou, mais recentemente, no escritor que comprou um bilhete de avião de ida e volta para Tóquio só para se poder concentrar durante a viagem a escrever um livro. Na segunda parte, temos, na sequência desta realidade, um plano de ação rigoroso, baseado em quatro «regras» que irão transformar a sua mente e os seus hábitos de modo a aperfeiçoar a capacidade notável da concentração, em vias de se extinguir no mundo caótico em que vivemos."
}

var book2 = {
    name: "A Economia mais Forte do Mundo",
    img:  "livro2.jpeg",
    link: "https://www.wook.pt/livro/a-economia-mais-forte-do-mundo-joseph-e-stiglitz/18978078",
    descricao: "A crise de 2008 inflamou a discussão em torno do desemprego, da desigualdade, da assistência na doença, dos custos da educação e da reforma. Seguindo-se a várias décadas de salários baixos, a grande recessão minou a esperança num futuro melhor não só na América mas em muitas das economias e sociedades ocidentais mais desenvolvidas. E hoje ainda vivemos no seu rescaldo. Joseph Stiglitz, Prémio Nobel e famoso dissidente da programática neoliberal, propõe um conjunto de medidas para inverter a situação, apresentando-nos o que lhe parece essencial para reescrever as regras da economia, de modo que esta funcione melhor - não apenas para os mais ricos, mas para todos.Um livro essencial, escrito num momento decisivo da política norte-americana, e publicado agora pela Bertrand, numa altura em que é mais necessário do que nunca pensarmos e repensarmos as regras por que se rege o mundo económico e, por arrasto — sinal dos tempos —, o nosso dia-a-dia."
 }

 var book3 = {
    name: "Inteligência Financeira",
    img:  "livro3.jpeg",
    link: "https://www.wook.pt/livro/inteligencia-financeira-karen-berman/21041042",
    descricao:"Um dos melhores e mais claros guias sobre finanças para não financeiros. As empresas esperam que os seus gestores utilizem dados financeiros para gerir recursos e dirigir os seus departamentos. Mas muitos executivos não conseguem interpretar um balanço, não reconhecem um rácio de liquidez, nem sabem calcular um fluxo de caixa ou um retorno sobre investimento. Pior, não fazem ideia de onde vêm os números e de quão confiáveis são. Mas quando os gestores compreendem e se sentem à vontade perante os números, a confiança aumenta, a rotação diminui, os resultados melhoram e as empresas prosperam. Karen Berman e Joe Knight passaram mais de 20 anos a ensinar executivos de todos os níveis a trabalhar em prol dos interesses financeiros das suas empresas. Neste livro, revelam os segredos da finança - uma arte, como explicam, não uma ciência. Com uma linguagem simples e sem jargão, com exemplos de casos de empresas reais e «caixas de ferramentas» muito úteis no final de cada capítulo, Inteligência Financeira é um manual valioso e indispensável para gestores não financeiros de todas as áreas, que irá proporcionar um aumento do conhecimento e da confiança, essenciais para o seu trabalho diário."
 }
 


class Library {
      constructor () {
          this.books = [book1,book2,book3];
          this.seenBooks = [];
          this.Load(book1);
      }
      Load (book){
        $("h1").text(book.name); 
        $("img").attr("src",book.img);
        $("p").text(book.descricao);
        $("a").attr("href",book.link);
        $("a").text(book.name); 
        //preencher conteudo da div
      }
      
NextBook(){

    this.seenBooks.push(this.books[0]);
    this.book.splice(0,1);
    this.Load(this.books[0]);
    //load() o proximo book
    
  }
}




// Passar o livro que acabámos de mostrar para o seenBooks



var lib = new Library ();

$('.book button').click(function(){
Library.NextBook ();
});






