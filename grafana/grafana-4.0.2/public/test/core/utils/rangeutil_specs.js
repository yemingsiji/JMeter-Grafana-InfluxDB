/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","app/core/utils/rangeutil","lodash","moment"],function(a){var b,c,d,e;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){b.describe("rangeUtil",function(){b.describe("Can get range grouped list of ranges",function(){b.it("when custom settings should return default range list",function(){var a=c.getRelativeTimesList({time_options:[]},"Last 5 minutes");b.expect(d["default"].keys(a).length).to.be(4),b.expect(a[3][0].active).to.be(!0)})}),b.describe("Can get range text described",function(){b.it("should handle simple old expression with only amount and unit",function(){var a=c.describeTextRange("5m");b.expect(a.display).to.be("Last 5 minutes")}),b.it("should have singular when amount is 1",function(){var a=c.describeTextRange("1h");b.expect(a.display).to.be("Last 1 hour")}),b.it("should handle non default amount",function(){var a=c.describeTextRange("13h");b.expect(a.display).to.be("Last 13 hours"),b.expect(a.from).to.be("now-13h")}),b.it("should handle non default future amount",function(){var a=c.describeTextRange("+3h");b.expect(a.display).to.be("Next 3 hours"),b.expect(a.from).to.be("now"),b.expect(a.to).to.be("now+3h")}),b.it("should handle now/d",function(){var a=c.describeTextRange("now/d");b.expect(a.display).to.be("Today so far")}),b.it("should handle now/w",function(){var a=c.describeTextRange("now/w");b.expect(a.display).to.be("This week so far")})}),b.describe("Can get date range described",function(){b.it("Date range with simple ranges",function(){var a=c.describeTimeRange({from:"now-1h",to:"now"});b.expect(a).to.be("Last 1 hour")}),b.it("Date range with rounding ranges",function(){var a=c.describeTimeRange({from:"now/d+6h",to:"now"});b.expect(a).to.be("now/d+6h to now")}),b.it("Date range with absolute to now",function(){var a=c.describeTimeRange({from:e["default"]([2014,10,10,2,3,4]),to:"now"});b.expect(a).to.be("Nov 10, 2014 02:03:04 to a few seconds ago")}),b.it("Date range with absolute to relative",function(){var a=c.describeTimeRange({from:e["default"]([2014,10,10,2,3,4]),to:"now-1d"});b.expect(a).to.be("Nov 10, 2014 02:03:04 to a day ago")}),b.it("Date range with relative to absolute",function(){var a=c.describeTimeRange({from:"now-7d",to:e["default"]([2014,10,10,2,3,4])});b.expect(a).to.be("7 days ago to Nov 10, 2014 02:03:04")}),b.it("Date range with non matching default ranges",function(){var a=c.describeTimeRange({from:"now-13h",to:"now"});b.expect(a).to.be("Last 13 hours")}),b.it("Date range with from and to both are in now-* format",function(){var a=c.describeTimeRange({from:"now-6h",to:"now-3h"});b.expect(a).to.be("now-6h to now-3h")}),b.it("Date range with from and to both are either in now-* or now/* format",function(){var a=c.describeTimeRange({from:"now/d+6h",to:"now-3h"});b.expect(a).to.be("now/d+6h to now-3h")}),b.it("Date range with from and to both are either in now-* or now+* format",function(){var a=c.describeTimeRange({from:"now-6h",to:"now+1h"});b.expect(a).to.be("now-6h to now+1h")})})})}}});