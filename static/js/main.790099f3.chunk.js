(this["webpackJsonpfcc-choropleth-map"]=this["webpackJsonpfcc-choropleth-map"]||[]).push([[0],{103:function(t,e,n){},106:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(82),o=n.n(c),i=(n(97),n(60)),h=n(56),l=n(58),s=n(59),u=function(t){var e=Object(a.useRef)();return Object(a.useEffect)((function(){return t(s.select(e.current))}),[t]),e};function d(){var t=Object(h.a)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    svg {\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n"]);return d=function(){return t},t}var f=l.a.div(d()),p=function(t){var e=t.drawSvg,n=t.viewBox,c=n.width,o=void 0===c?100:c,i=n.height,h=void 0===i?100:i,l=Object(a.useCallback)((function(t){var n=t.append("svg").attr("preserveAspectRatio","xMidYMid meet").attr("viewBox","0 0 ".concat(o," ").concat(h));e(n,o,h)}),[e,o,h]),s=u(l);return r.a.createElement(f,{ref:s})},g=n(89),m=n(39),v=n(61),b=n(85),w=n(87),j=Object(m.a)(Object(m.a)({},s),{},{tip:b.a,legendColor:w.a});j.selection.prototype.appendForEach=function(t,e){return this.selectAll(null).data(e).enter().append(t)},j.selection.prototype.forEach=function(t){return this.each((function(e,n,a){var r=j.select(this);t(r,e,n,a)}))},j.selection.prototype.attrs=function(t){if("function"===typeof t)this.forEach((function(e,n){return e.attrs(t(n))}));else for(var e in t)this.attr(e,t[e]);return this};var O=j,E=n(88),y={top:15,right:15,bottom:15,left:15};var x=function(t){var e=t.areaName,n=t.state,a=t.bachelorsOrHigherPercent;return"".concat(e,", ").concat(n,": ").concat(O.format(".0%")(a))};function k(t,e,n){var a=e.data,r=e.width,c=e.height,o=e.colorScale;t.append("g").attr("id","nation").call((function(t){t.appendForEach("path",a).attrs((function(t){var e=t.fips,n=t.bachelorsOrHigher,a=t.bachelorsOrHigherPercent;return{class:"county",stroke:"black",fill:o(a),"data-fips":e,"data-education":n}})).attr("d",O.geoPath()).on("mouseover",n.show).on("mouseout",n.hide)})).call(B,r,c)}function B(t,e,n){var a=t.node().getBBox(),r=a.x,c=a.y,o=a.width,i=a.height,h=Math.min(e/o,n/i),l=(e/h-o)/2,s=(n/h-i)/2;t.attr("transform","scale(".concat(h,") translate(").concat(-r+l,", ").concat(-c+s,")"))}function P(t,e){var n=e.colorScale,a=e.width,r=e.height;t.append("g").attrs({id:"legend",transform:"translate(".concat(.65*a,", ").concat(.05*r,")")}).style("font-size","14px").call(O.legendColor().orient("horizontal").shape("rect").shapePadding(0).shapeHeight(15).shapeWidth(a/4/8).cells(8).labelFormat(O.format(".0%")).scale(n))}var H=function(t,e,n){var a=function(t,e,n,a){var r=a.left,c=a.top,o=a.right,i=a.bottom;return t.append("rect").attrs({id:"background",x:0,y:0,width:e,height:n}),{chart:t.append("g").attr("transform","translate(".concat(r,", ").concat(c,")")),width:e-r-o,height:n-o-i}}(t,e,n,y),r=a.chart,c=a.width,o=a.height;return Promise.all([O.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json").then((function(t){return E.a(t,t.objects.counties).features})),O.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json")]).then((function(t){return function(t,e,n){var a=Object(i.a)(t,2),r=a[0],c=function(t,e){var n={};return t.forEach((function(t){var a=t[e],r=Object(v.a)(t,[e].map(g.a));n[a]=r})),n}(a[1],"fips"),o=r.map((function(t){var e=t.id,n=Object(v.a)(t,["id"]),a=c[e],r=a.area_name,o=Object(v.a)(a,["area_name"]);return Object(m.a)(Object(m.a)({fips:e},n),{},{areaName:r},o)}));return o.forEach((function(t){var e=t.bachelorsOrHigher;t.bachelorsOrHigherPercent=e/100})),{width:e,height:n,data:o,colorScale:O.scaleSequential(O.extent(o,(function(t){return t.bachelorsOrHigherPercent})),O.interpolateBlues)}}(t,c,o)})).then((function(t){var e=function(t,e){var n=e.width;return O.tip().direction("n").offset([0,10]).attr("id","tooltip").attr("data-education",(function(t){return t.bachelorsOrHigher})).style("font-size",(function(){return"".concat(15*t.node().getBoundingClientRect().width/n,"px")})).html(x)}(r,t);r.call(e).call(k,t,e).call(P,t)})).catch((function(t){return console.error(t)}))},S=(n(103),n(86));function F(){var t=Object(h.a)(["\n    padding: 10px\n    height: calc(100vh - ",")\n"]);return F=function(){return t},t}var _=l.a.div(F(),(function(t){var e=t.marginTop;return"".concat(e,"px")})),T=function(){var t=Object(S.a)(),e=Object(i.a)(t,2),n=e[0],a=e[1].height;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:n},r.a.createElement("h1",{id:"title"},"United States Education Attainment"),r.a.createElement("h3",{id:"description"},"Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)")),r.a.createElement(_,{marginTop:a+20},r.a.createElement(p,{drawSvg:H,viewBox:{width:1600,height:900}})))},C=n(73),z=function(){return Object(C.useFccTest)({fccTest:C.FccTests.choropleth,queryParam:"fcc-test"}),r.a.createElement(T,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},92:function(t,e,n){t.exports=n(106)},97:function(t,e,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.790099f3.chunk.js.map