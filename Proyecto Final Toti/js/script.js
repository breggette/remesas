$(document).ready(function () {
  $("#btnConvertir").click(async function () {
      var moedaOrigem = $("#moedaOrigem").val();
      var moedaDestino = $("#moedaDestino").val();
      var quantidade = $("#quantidade").val();

      console.log('quantidade: ' + quantidade);

      var url = 'http://economia.awesomeapi.com.br/json/last/' + moedaOrigem + "-" + moedaDestino;

      try {
          var busca = await fetch(url, { method: "GET" });
          var dados = await busca.json();

          // Verifica si la respuesta contiene datos válidos
          if (dados[moedaOrigem + moedaDestino]) {
              var taxaDeCambio = dados[moedaOrigem + moedaDestino].high;
              var resultado = quantidade * taxaDeCambio;

              // Muestra el resultado en la div 'resultado'
              $("#resultado").text(`${quantidade} ${moedaOrigem} es aproximadamente ${resultado.toFixed(2)} ${moedaDestino}`);
          } else {
              $("#resultado").text('Error al obtener datos de conversión.');
          }
      } catch (error) {
          console.error('Error en la solicitud API:', error);
          $("#resultado").text('Error al conectar con la API.');
      }
  });
});