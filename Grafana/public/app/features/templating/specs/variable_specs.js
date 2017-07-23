/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../variable"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){c.describe("containsVariable",function(){c.describe("when checking if a string contains a variable",function(){c.it("should find it with $var syntax",function(){var a=d.containsVariable("this.$test.filters","test");c.expect(a).to.be(!0)}),c.it("should not find it if only part matches with $var syntax",function(){var a=d.containsVariable("this.$serverDomain.filters","server");c.expect(a).to.be(!1)}),c.it("should find it if it ends with variable and passing multiple test strings",function(){var a=d.containsVariable("show field keys from $pgmetric","test string2","pgmetric");c.expect(a).to.be(!0)}),c.it("should find it with [[var]] syntax",function(){var a=d.containsVariable("this.[[test]].filters","test");c.expect(a).to.be(!0)}),c.it("should find it when part of segment",function(){var a=d.containsVariable("metrics.$env.$group-*","group");c.expect(a).to.be(!0)}),c.it("should find it its the only thing",function(){var a=d.containsVariable("$env","env");c.expect(a).to.be(!0)}),c.it("should be able to pass in multiple test strings",function(){var a=d.containsVariable("asd","asd2.$env","env");c.expect(a).to.be(!0)})})}),c.describe("assignModelProperties",function(){c.it("only set properties defined in defaults",function(){var a={test:"asd"};d.assignModelProperties(a,{propA:1,propB:2},{propB:0}),c.expect(a.propB).to.be(2),c.expect(a.test).to.be("asd")}),c.it("use default value if not found on source",function(){var a={test:"asd"};d.assignModelProperties(a,{propA:1,propB:2},{propC:10}),c.expect(a.propC).to.be(10)})})}}});