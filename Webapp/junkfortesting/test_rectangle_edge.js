/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'RoundRect',
            type:'rect',
            rect:['80px','65px','202px','95px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RoundRect}": [
            ["style", "top", '55px'],
            ["style", "height", '95px'],
            ["style", "left", '93px'],
            ["style", "width", '202px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid7", tween: [ "style", "${_RoundRect}", "left", '228px', { fromValue: '93px'}], position: 0, duration: 500 },
            { id: "eid10", tween: [ "style", "${_RoundRect}", "width", '151px', { fromValue: '202px'}], position: 0, duration: 500 },
            { id: "eid9", tween: [ "style", "${_RoundRect}", "height", '52px', { fromValue: '95px'}], position: 0, duration: 500 },
            { id: "eid8", tween: [ "style", "${_RoundRect}", "top", '136px', { fromValue: '55px'}], position: 0, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-710858178");
