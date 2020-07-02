$(function () {
  $(".hero__carousel").slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">' +
      '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity = "0.8" d = "M1 10.2321C-0.333332 9.46225 -0.333334 7.53775 1 6.76795L12.25 0.272759C13.5833 -0.497042 15.25 0.465208 15.25 2.00481L15.25 14.9952C15.25 16.5348 13.5833 17.497 12.25 16.7272L1 10.2321Z" fill = "black" fill-opacity = "0.3"/></svg>' +
      '</button>',
    nextArrow: '<button type="button" class="slick-next">' +
      '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity = "0.8" d = "M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.749999 16.5348 0.749999 14.9952L0.75 2.00481C0.75 0.46521 2.41667 -0.497043 3.75 0.272758L15 6.76795Z" fill = "black" fill-opacity = "0.3"/></svg>' +
      '</button>'
  });

  $(".new__carousel").slick({
    dots: true,
    arrows: true,
    infinite: true,
    //autoplay: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 40,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">' +
      '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity = "0.8" d = "M1 10.2321C-0.333332 9.46225 -0.333334 7.53775 1 6.76795L12.25 0.272759C13.5833 -0.497042 15.25 0.465208 15.25 2.00481L15.25 14.9952C15.25 16.5348 13.5833 17.497 12.25 16.7272L1 10.2321Z" fill = "black" fill-opacity = "0.3"/></svg>' +
      '</button>',
    nextArrow: '<button type="button" class="slick-next">' +
      '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity = "0.8" d = "M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.749999 16.5348 0.749999 14.9952L0.75 2.00481C0.75 0.46521 2.41667 -0.497043 3.75 0.272758L15 6.76795Z" fill = "black" fill-opacity = "0.3"/></svg>' +
      '</button>'
  });

  let $menuLink = ".aside__nav-item",
    $currentMenuLink;

  function getCurrent() {
    $currentMenuLink = $($menuLink + ".--current").index();
    sessionStorage.setItem('$currentMenuLink', $currentMenuLink);
  };

  $(window).on("load", function () {
    $currentMenuLink = sessionStorage.getItem('$currentMenuLink');
    $($menuLink).eq($currentMenuLink).addClass("--current");
    $($menuLink).eq($currentMenuLink).siblings().removeClass("--current");
  })


  $(".aside__nav-link").focusin(function () {
    $(this).parent($menuLink).addClass("--current");
    $(this).parent($menuLink).siblings().removeClass("--current");
  });

  $($menuLink).focusout(function () {
    $($menuLink).eq($currentMenuLink).addClass("--current");
    $($menuLink).eq($currentMenuLink).siblings().removeClass("--current");
  });

  $($menuLink).click(function () {
    $(this).addClass("--current");
    $(this).siblings().removeClass("--current");
    getCurrent();
  });

  $(".product-item__ingridients-switcher").click(function () {
    $(this).siblings(".product-item__ingr-list").slideToggle(260);
  });

  $(".product-item__ingridient-count").change(function () {
    let i = parseInt($(this).val());
    if (i !== 0) {
      $(this).parent().removeClass("product-item__ingridient-counter--no-count");
    } else {
      $(this).parent().addClass("product-item__ingridient-counter--no-count");
    }
  });

  $('.product-item__button--minus').on("click", function () {
    let $input = $(this).siblings('input[type="number"]');
    let count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    console.log("count", count)
  });

  $('.product-item__button--plus').on("click", function () {
    let $input = $(this).siblings('input[type="number"]');
    count = parseInt($input.val()) + 1;
    $input.val(count);
    $input.change();
    console.log("count", count)
  });

  if ($('.products--filter').length) {
    var mixer = mixitup('.products--filter')
  };

  $(".page__filter-item").click(function () {
    $(this).addClass("--current");
    $(this).siblings().removeClass("--current");
  })

});