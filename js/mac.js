/*MAC Style Guide JS */
$(document).delegate('.leftNav>li','click',function(){
	$(this).parent('ul').children('li').children('a').each(function(){
		$(this).removeClass('active');
	});
	$(this).children('a').addClass('active');
});

$(document).delegate('.accordian-toggle','click',function(){
	if($(this).hasClass('toggled')){
		$(this).parent('td').parent('tr').next().children('td').children('div').addClass('hide');
		$(this).removeClass('toggled');
		$(this).addClass('fa-plus-square');
		$(this).removeClass('fa-minus-square');
	}else{
		$(this).parent('td').parent('tr').next().children('td').children('div').removeClass('hide');
		$(this).addClass('toggled');
		$(this).removeClass('fa-plus-square');
		$(this).addClass('fa-minus-square');
	}
});

$(document).delegate('.custom-checkbox','click',function(){
	$(this).children('input').toggle(this.checked);
	if(!$(this).children('input').attr('checked')){
		$(this).children('input').attr('checked',true);
		$(this).removeClass('fa-square-o').addClass('fa-check-square');
	}else{
		$(this).children('input').attr('checked',false);
		$(this).removeClass('fa-check-square').addClass('fa-square-o');
	}
});
/*$(window).scroll(function(){
	if($(window).scrollTop()<20){
       $(".leftNav").parent('div').parent('div').parent('div')
              .stop()
              .animate({"marginTop": ($(window).scrollTop()) + "px"}, "slow" );
	}else{
		$(".leftNav").parent('div').parent('div').parent('div')
              .stop()
              .animate({"marginTop": ($(window).scrollTop() -55) + "px"}, "slow" );
	}
	
});*/

/* Canvas*/
window.onload = function () {
	CanvasJS.addColorSet("macCS",
	[//MAC colorSet Array
	    "#DC241F",
	    "#621A4B",
	    "#2D373E",
	    "#8C7D70",
	    "#585B5E",
	    "#9F0029",
	    "#680000"
	]); 

	var chart = new CanvasJS.Chart("myChart",
	{
	    toolTip: {
	      	enabled: false
	    },
	    colorSet: "macCS",
	    width:200,
	    height:200,
	    data: [
			{
				type: "doughnut",
			    dataPoints: [
			    {  y: 3000,exploded:false},
			    {  y: 1000,exploded:false},
			    {  y: 201,exploded:false},
			    {  y: 120,exploded:false},
			    {  y: 750,exploded:false}
			    ]
			}
		]
	});
	chart.render();
}
