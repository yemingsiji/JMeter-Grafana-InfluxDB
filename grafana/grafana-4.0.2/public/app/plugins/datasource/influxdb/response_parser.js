/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash"],function(a){function b(a,b){a[b]=b}var c,d;return{setters:[function(a){c=a}],execute:function(){d=function(){function a(){}return a.prototype.parse=function(a,d){if(!d||0===d.results.length)return[];var e=d.results[0];if(!e.series)return[];var f=a.toLowerCase().indexOf("show tag values")>=0,g={};return c["default"].each(e.series,function(a){c["default"].each(a.values,function(a){c["default"].isArray(a)?f?b(g,a[1]||a[0]):b(g,a[0]):b(g,a)})}),c["default"].map(g,function(a){return{text:a}})},a}(),a("default",d)}}});