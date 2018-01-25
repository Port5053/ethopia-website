(function () {
	var n = $("#img-container img").length;
	var i = 0;
	var img_width = $(".gallery-img").width(); // px
	function update_gallery () {
		$("#img-container").css({"transform": "translateX("+img_width*(-i)+"px)"});
		$("span.dot.selected").removeClass("selected");
		$("span.dot").eq(i).addClass("selected");
	}
	$("#swipe-left").click(function () {
		i = (i-1+n)%n;
		update_gallery()
	});
	
	$("#swipe-right").click(function () {
		i = (i+1)%n;
		update_gallery()
	});
	$(".gallery-img").each(function(){$("#pos-bar").append("<span class=\"dot\">&bull;</span>")});
	update_gallery();
	$("span.dot").click(function () {
		i = $("span.dot").index($(this));
		update_gallery();
	});
	$(window).scroll(function(){
		//$("#social-bar").css((window.scrollY > 300)?{position: "fixed", top: 150, }:{position: "relative", top: 450})
	});
	$(window).scroll(function(){
		$("#header-float").css({top:(window.scrollY > 240)?0:-151})
	})
})();