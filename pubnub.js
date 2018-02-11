var pubnub = new PubNub({
    publishKey:   'pub-c-39c7e882-f8c8-4b19-ac88-f133a9d445bf',
    subscribeKey: 'sub-c-308e7c4c-81c2-11e7-8979-5e3a640e5579'
  });
var xhr = new XMLHttpRequest();


function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
          pubnub.publish({
            channel: 'bitcoin-feed',
            message: {
              eon: {
                'BitCoin': response.BTC.USD.toFixed(2)
              }
            }
          });
          pubnub.publish({
            channel: 'ether-feed',
            message: {
              eon: {
                'Ether': response.ETH.USD.toFixed(2)
              }
            }
          });
          pubnub.publish({
            channel: 'litecoin-feed',
            message: {
              eon: {
                'LiteCoin': response.LTC.USD.toFixed(2)
              }
            }
          });
      }
  }

  function mainApp() {
    setInterval(function(){
      xhr.open('GET', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD', true)
      xhr.send();
      xhr.onreadystatechange = processRequest;
    }, 10000)
  };
  mainApp();