var sectionIndicator=$(".section-indicator"),
sectionIndicatorpoints = $(".section-indicator span"),
sectionIndicatorHeight = sectionIndicator.height(),
sectionIndicatorPosition = sectionIndicator.offset().top,
landingSection = $(".landing"),
communitySection  = $(".community"),
communitySectionPosition = communitySection.offset().top,
planSection = $(".plan"),
planSectionPosition = planSection.offset().top,
styleSection = $(".style"),
styleSectionPosition = styleSection.offset().top,
footer=$("footer"),
footerPosition = footer.offset().top,
footerHeight = footer.height(),
pageHeight = $(document).height(),
viewPortHeight = $(window).height(),
landingSectionIndicators = $(".landing-shows-indicators span"),
landingSectionShows = $(".landing-shows-container"),
wScroll=0,
newsInView = 4,
totalNews=$(".new").length,
newsSlider=$(".news-container");

// Click Events
sectionIndicatorpoints.on("click", function(){
  var $this =$(this),
  target = $($this.data("section")),
  targetPosition = target.offset().top,
  scrollTimingPercentage = Math.abs(( targetPosition - wScroll)/viewPortHeight)+1;
  if(target.length){
    $("html, body").animate({
      scrollTop: targetPosition
    }, scrollTimingPercentage*600);
  };
});

landingSectionIndicators.on("click",function(){
    var $this =$(this),
    targetIndex = landingSectionIndicators.index($this);
    console.log(targetIndex);
    landingSectionShows.css("transform","translate3d(0,-"+(targetIndex*100)+"%,0)");
});

$(".news-btn.right").on("click",function(){
  if(newsInView === totalNews){
    return false
  }else{
    newsInView++;
    $(".news-btn").removeClass("faded");
    var scrollDistance = ((newsInView-4) * 20.5)+"vw";
    console.log(newsInView, scrollDistance);
    newsSlider.css("transform","translateX(-"+scrollDistance+")");
    if(newsInView===totalNews){
      $(this).addClass("faded");
    }
  }
});
$(".news-btn.left").on("click",function(){
  if(newsInView === 4){
    return false
  }else{
    newsInView--;
    $(".news-btn").removeClass("faded");
    var scrollDistance = ((newsInView-4) * 20.5)+"vw";
    console.log(newsInView, scrollDistance);
    newsSlider.css("transform","translateX(-"+scrollDistance+")");
    if(newsInView===4){
      $(this).addClass("faded");
    }
  }
});
$(document).ready(function() {
  if((sectionIndicatorPosition +sectionIndicatorHeight/2) < communitySectionPosition  ){
    sectionIndicator.attr("class","section-indicator landing-section");
  }else if ((sectionIndicatorPosition +sectionIndicatorHeight/2) > styleSectionPosition) {
    sectionIndicator.attr("class","section-indicator style-section");
  } else if ((sectionIndicatorPosition +sectionIndicatorHeight/2) > planSectionPosition) {
    sectionIndicator.attr("class","section-indicator plan-section");
  }else if ((sectionIndicatorPosition +sectionIndicatorHeight/2) > communitySectionPosition) {
    sectionIndicator.attr("class","section-indicator community-section");
  }
});
$(window).on("load",function(){

});

$(window).on("scroll",function(){
  wScroll = $(this).scrollTop();
  // Section Indicator Scolling
  if(!sectionIndicator.hasClass("out")){
    if((sectionIndicator.offset().top +sectionIndicatorHeight/2) < communitySectionPosition ){
      sectionIndicator.attr("class","section-indicator landing-section");
    }else if ((sectionIndicator.offset().top +sectionIndicatorHeight/2) > styleSectionPosition) {
      sectionIndicator.attr("class","section-indicator style-section");
    } else if ((sectionIndicator.offset().top +sectionIndicatorHeight/2) > planSectionPosition) {
      sectionIndicator.attr("class","section-indicator plan-section");
    }else if ((sectionIndicator.offset().top +sectionIndicatorHeight/2) > communitySectionPosition) {
      sectionIndicator.attr("class","section-indicator community-section");
    }
  }

  if(wScroll  > (pageHeight - sectionIndicatorHeight - footerHeight -300)){
    if((sectionIndicator.offset().top +sectionIndicatorHeight) > footerPosition){
      sectionIndicator.addClass("out");
      sectionIndicator.fadeOut(500);
    }
  } else if (wScroll  < (pageHeight - sectionIndicatorHeight - footerHeight )) {
    sectionIndicator.removeClass("out");
    sectionIndicator.fadeIn(500);
  }
});
