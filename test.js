(function($) {
	$(document).ready(function(){
		test("Clean namespace", function() {
			equal(window.$, undefined);
			equal(window.jQuery, undefined);
			equal(window.rangy, undefined);
		});
		test("replaceText", function() {
			equal(palipad.replaceText("AA"), "Ā");
			equal(palipad.replaceText("aa"), "ā");
			equal(palipad.replaceText("II"), "Ī");
			equal(palipad.replaceText("ii"), "ī");
			equal(palipad.replaceText("UU"), "Ū");
			equal(palipad.replaceText("uu"), "ū");
			equal(palipad.replaceText("\"N"), "Ṅ");
			equal(palipad.replaceText("\"n"), "ṅ");
			equal(palipad.replaceText(".M"), "Ṃ");
			equal(palipad.replaceText(".m"), "ṃ");
			equal(palipad.replaceText("~N"), "Ñ");
			equal(palipad.replaceText("~n"), "ñ");
			equal(palipad.replaceText(".T"), "Ṭ");
			equal(palipad.replaceText(".t"), "ṭ");
			equal(palipad.replaceText(".D"), "Ḍ");
			equal(palipad.replaceText(".d"), "ḍ");
			equal(palipad.replaceText(".N"), "Ṇ");
			equal(palipad.replaceText(".n"), "ṇ");
			equal(palipad.replaceText(".L"), "Ḷ");
			equal(palipad.replaceText(".l"), "ḷ");
		});
		test("replaceText Ko.n.da~n~nassa", function() {
			equal(palipad.replaceText("Ko.n.da~n~nassa"), "Koṇḍaññassa");
		});
	});
}(palipad.jQuery));
