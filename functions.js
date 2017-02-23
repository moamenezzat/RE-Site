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
newsSlider=$(".news-container"),
styleBtns = $(".style-btn"),
styleWindowImages = $(".window-image"),
StyleWindowInfo = $(".window-info"),
styleWindowHeaders = $(".titles-container h1"),
styleWindowDesc = $(".desc-container p"),
toggleMenu = $(".header-btn.nav"),
navMenu = $("header nav"),
closeWindowInfo = $(".window-info-btn"),
windowNext = $(".windw-btn.next"),
windowPrev = $(".windw-btn.prev"),
newsNext = $(".news-btn.right"),
newsPrev = $(".news-btn.left"),
headerShare = $(".header-btn.share"),
closeHeaderShare = $(".header-btn.share .share-icon.close");


var updateWindow = function(target){
  var targetIndex = styleBtns.index(target),
  TargetImage = styleWindowImages.eq(targetIndex),
  targetHeader = styleWindowHeaders.eq(targetIndex),
  targetDesc = styleWindowDesc.eq(targetIndex),
  activeBtn = styleBtns.index($(".a")),
  ActiveImage = styleWindowImages.index($(".in")),
  activeHeader = styleWindowHeaders.index($(".i")),
  activeDesc = styleWindowDesc.index($(".here"));

  StyleWindowInfo.removeClass("hidden");
  if(targetIndex === activeBtn){
    return false;
  }else{
    styleBtns.eq(activeBtn).removeClass("a");
    styleBtns.eq(targetIndex).addClass("a");
    styleWindowImages.eq(ActiveImage).removeClass("in").addClass("out");
    TargetImage.removeClass("out").addClass("in");
    styleWindowHeaders.eq(activeHeader).removeClass("i").addClass("up").addClass("down");
    targetHeader.removeClass("up").removeClass("down").addClass("i");
    styleWindowDesc.eq(activeDesc).removeClass("here").addClass("up").addClass("down");
    targetDesc.removeClass("up").removeClass("down").addClass("here");
  }
};

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

newsNext.on("click",function(){
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
newsPrev.on("click",function(){
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

styleBtns.on("click", function(){
  var $this =$(this);
  updateWindow($this);
});

windowPrev.on("click", function(){
  var $this= $(this),
  activeBtn = styleBtns.index($(".a")),
  tagret;
  console.log(activeBtn);
  if(activeBtn === 0){
    target = styleBtns.eq(styleBtns.length - 1);
  }else{
    target = styleBtns.eq(activeBtn).prev();
  }
  console.log(target);
  updateWindow(target);
});

windowNext.on("click", function(){
  var $this= $(this),
  activeBtn = styleBtns.index($(".a")),
  tagret;
  console.log(activeBtn);
  if(activeBtn === styleBtns.length - 1){
    target = styleBtns.eq(0);
  }else{
    target = styleBtns.eq(activeBtn).next();
  }
  console.log(target);
  updateWindow(target);
});

closeWindowInfo.on("click", function(){
  StyleWindowInfo.addClass("hidden");
});

toggleMenu.on("click", function(){
  toggleMenu.toggleClass("close");
  navMenu.toggleClass("hidden");
});

headerShare.add(closeHeaderShare).on("click", function(){
  console.log("clicked");
  headerShare.toggleClass("open");
});
closeHeaderShare.on("click", function(e){
  e.stopPropagation()
  headerShare.removeClass("open");
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
