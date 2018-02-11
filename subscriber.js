var pubnub = new PubNub({
    subscribeKey: 'sub-c-308e7c4c-81c2-11e7-8979-5e3a640e5579'
});

var pointLimit = 15; //Total amount of points on your graph.
var topPadding = 100; // Additional room between the top most point and the top of the chart
var bottomPadding = 100; // Additional room for the bottom of the graph
var eonData = {labels: true,type: 'line'}; // flag for rendering labels with the point and the type of line that will be rendered
var eonAxis = {y: {padding: {top:topPadding, bottom:bottomPadding}},
               x: {type: 'timeseries',tick: {format: '%H:%M:%S'}}}; // Formatting the time stamps along the bottom of the graphs.



eon.chart({
channels: ['bitcoin-feed'],
history: true,
flow: true,
limit: pointLimit,
pubnub: pubnub,
generate: {
    bindto: '#bitcoinChart',
    data: eonData,
    axis: eonAxis
}
});
// Create the Ether Chart for BitCoin and bind its div
eon.chart({
channels: ['ether-feed'],
history: true,
flow: true,
limit: pointLimit,
pubnub: pubnub,
generate: {
    bindto: '#etherChart',
    data: eonData,
    axis: eonAxis
}
});
// Create the LiteCoin Chart for BitCoin and bind its div
eon.chart({
channels: ['litecoin-feed'],
history: true,
flow: true,
limit: pointLimit,
pubnub: pubnub,
generate: {
    bindto: '#liteCoinChart',
    data: eonData,
    axis: eonAxis
}
});