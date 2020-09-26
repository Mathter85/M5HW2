// $(function(){
//   //28568aca6482e241e127a8f4f1fb8076   key for fixer.io
//   $.get(' http://data.fixer.io/api/latest',  //get запрос на сайт
//         {'access_key':'28568aca6482e241e127a8f4f1fb8076', 'base':'EUR'}, //параметры запроса
//         function(response){ // в переменной response ответ в виде json
//           // console.log(response);
//           //console.log(response.rates.USD);
//         $('.curs-exchange-getUSDtoRUB').text((response.rates.RUB/response.rates.USD).toFixed(2)); //добавляем в блок данные
//         $('.curs-exchange-getEURtoRUB').text(response.rates.RUB.toFixed(2));
//   });
// });
