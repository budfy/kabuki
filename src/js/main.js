$(function () {



  //NOTE - animation init

  AOS.init();



  //NOTE - hero section carousel init

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
      '</button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
      },
    }],
  });



  //NOTE - new section carousel init

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
      '</button>',
    responsive: [{
      breakpoint: 940,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 20,
        variableWidth: true
      },
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 20,
        variableWidth: true,
        dots: false,
        arrows: false,
      },
    }]
  });



  //NOTE - aside menu current link functions

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



  //NOTE - ingridients open/close function

  $(".product-item__ingridients-switcher").click(function () {
    $(this).siblings(".product-item__ingr-list").slideToggle(260);
    $(this).toggleClass("--open")
  });



  //NOTE - ingridients counter

  $(".product-item__ingridient-count").change(function () {
    let i = parseInt($(this).val());
    if (i !== 0) {
      $(this).parent().removeClass("product-item__ingridient-counter--no-count");
    } else {
      $(this).parent().addClass("product-item__ingridient-counter--no-count");
    }
  });

  $('.product-item__button--minus:not(.cart__offer-minus)').on("click", function () {
    let $input = $(this).siblings('input[type="number"]');
    let count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
  });

  $('.product-item__button--plus:not(.cart__offer-plus)').on("click", function () {
    let $input = $(this).siblings('input[type="number"]');
    count = parseInt($input.val()) + 1;
    $input.val(count);
    $input.change();
  });



  //NOTE - cart counter

  $(window).on("load", function () {
    if (parseInt($(".cart__offer-count-input").val()) > 1) {
      $(".cart__offer-count-input").parent().removeClass("product-item__ingridient-counter--no-count");
    } else {
      $(".cart__offer-count-input").parent().addClass("product-item__ingridient-counter--no-count");
    }
  });

  $(".cart__offer-count-input").change(function () {
    let i = parseInt($(this).val());
    if (i > 1) {
      $(this).parent().removeClass("product-item__ingridient-counter--no-count");
    } else {
      $(this).parent().addClass("product-item__ingridient-counter--no-count");
    }
  });

  $('.cart__offer-minus').on("click", function () {
    let $input = $(this).siblings('input[type="number"]');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
  });

  $('.cart__offer-plus').on("click", function () {
    let $input = $(this).siblings('input[type="number"]');
    count = parseInt($input.val()) + 1;
    $input.val(count);
    $input.change();
  });



  //NOTE - filters scripts

  if ($('.products--filter').length) {
    var mixer = mixitup('.products--filter')
  };

  $(".page__filter-item").click(function () {
    $(this).addClass("--current");
    $(this).siblings().removeClass("--current");
  });



  //NOTE - custom scrollbar plugin

  $('.product-item__ingr-wrapper').mCustomScrollbar({
    //autoHideScrollbar: true,
    theme: "ingridient-scroll",
    scrollButtons: {
      enable: true
    },
  });



  //NOTE - modal open/close

  $(".modal-call").click(function () {
    let modal = $(this).data("modal");
    $(".modal").fadeIn(260);
    $("body").addClass("no-scroll");
    $(modal).siblings(".modal__wrapper").fadeOut();
    setTimeout(() => {
      $(modal).fadeIn(260);
    }, 100);
  });

  let alert;

  $(".modal__overlay, .modal__close").click(function () {
    $(".modal__wrapper").fadeOut(260);
    $(".modal").fadeOut(260);
    $("body").removeClass("no-scroll");
    clearInterval(alert);
  });

  $(".js-reset").click(function () {
    $(this).parents(".modal__wrapper").fadeOut(260);
    setTimeout(() => {
      $("#modal-login").fadeIn(260);
    }, 300);
  });



  //NOTE - pay-type-offline/online switch
  $(".modal-pay-online__btn").click(function () {
    $(".pay-type-radio").attr("checked", false);
    $("#pay-type-online").attr("checked", true);
  })



  //NOTE - close/open modals

  $(".modal__btn[data-modal]").click(function () {
    let modal = $(this).data("modal");
    $(this).parents(".modal__wrapper").fadeOut(260);
    setTimeout(() => {
      $(modal).fadeIn(260);
    }, 300);
  });



  //NOTE - forms ajax submit

  $("#offer-form").submit(function () {
    let order_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "",
      data: order_data,
      success: function () {
        window.location.replace($(this).data("pay"));
        $("form").reset();
      },
      error: function () {
        let time;
        time = 5;
        $(".modal__timer").text(time);
        $("#modal-pay").fadeOut();
        $("#modal-alert").fadeIn(260);
        alert = setInterval(function () {
          $(".modal__timer").text(time);
          if (time > 0) {
            time--;
          } else {
            $("#modal-alert").fadeOut(260);
            $(".modal").fadeOut(260);
            $("#pay-type-online").attr("checked", false);
            $("#pay-type-cash").attr("checked", true);
            $("body").removeClass("no-scroll");
            clearInterval(alert);
          }
        }, 1000);
      }
    });
    return false;
  });



  //NOTE - fake placeholder

  $(".form-input--ph").focusin(function () {
    $(this).addClass("full");
    $(this).siblings(".form-placeholder").hide();
  });

  $(".form-input--ph").focusout(function () {
    if ($(this).val() != "") {
      $(this).addClass("full");
      $(this).siblings(".form-placeholder").hide();
    } else {
      $(this).removeClass("full");
      $(this).siblings(".form-placeholder").show();
    }
  });



  //NOTE - forms mask

  maskinit();

  function maskinit() {

    $("[type='text']").inputmask({
      mask: "*{3,30}",
      greedy: false,
      onincomplete: function () {
        $(this).parent().addClass("invalid");
        setTimeout(() => {
          $(this).parent().removeClass("invalid");
        }, 3000);
      },
    });

    $("[type='tel']").inputmask({
      mask: "+7" + " " + "(" + "999" + ")" + " " + "999" + "-" + "99" + "-" + "99",
      greedy: false,
      onincomplete: function () {
        $(this).parent().addClass("invalid");
        setTimeout(() => {
          $(this).parent().removeClass("invalid");
        }, 3000);
      },
      validator: "[0-9]",
    });

    $(".cabinet__input--build, .cart__input--build").inputmask({
      mask: "мкр. " + "9{1,2}" + " " + "дом/здание " + "9{1,3}" + " кв/офис " + "9{1,3}",
      greedy: false,
      validator: "[0-9]",
      onincomplete: function () {
        $(this).parent().addClass("invalid");
        setTimeout(() => {
          $(this).parent().removeClass("invalid");
        }, 3000);
      },
      oncomplete: function () {
        $(this).parent().siblings().find(".js-input--set").focus();
      }
    });

    $(".cabinet__input--set, .cart__input--set").inputmask({
      mask: "подъезд " + "9{1,2}",
      validator: "[0-9]",
      greedy: false,
      onincomplete: function () {
        $(this).parent().addClass("invalid");
        setTimeout(() => {
          $(this).parent().removeClass("invalid");
        }, 3000);
      },
      oncomplete: function () {
        $(this).parent().siblings().find(".js-input--floor").focus();
      },
      oncleared: function () {
        $(this).parent().siblings().find(".js-input--build").focus();
      }
    });

    $(".cabinet__input--floor, .cart__input--floor").inputmask({
      mask: "этаж " + "9",
      validator: "[0-9]",
      greedy: false,
      onincomplete: function () {
        $(this).parent().addClass("invalid");
        setTimeout(() => {
          $(this).parent().removeClass("invalid");
        }, 3000);
      },
      oncleared: function () {
        $(this).parent().siblings().find(".js-input--set").focus();
      }
    });

    $(".form-input--email").inputmask({
      mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}.*{2,6}[.*{1,2}]",
      greedy: false,
      onBeforePaste: function (pastedValue, opts) {
        pastedValue = pastedValue.toLowerCase();
        return pastedValue.replace("mailto:", "");
      },
      definitions: {
        "*": {
          validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
          cardinality: 1,
          casing: "lower",
        },
        onincomplete: function () {
          $(this).parent().addClass("invalid");
          setTimeout(() => {
            $(this).parent().removeClass("invalid");
          }, 3000);
        },
      },
    });
  }


  //NOTE - address add/remove

  let address_id = 1;
  $('.add-item-js').click(
    function () {
      if (address_id <= 2) {
        address_id++;
        $('#address-item-1')
          .clone()
          .attr('id', 'address-item-' + address_id)
          .insertBefore($(this));
        $('#address-item-' + address_id).append('<button type="button" class="cabinet__address-remove remove-btn"></button>');
        maskinit();
        $('#address-item-' + address_id).find('input').val('');
        console.log("address_id", address_id)
      }
    }
  );

  $(document).on("click", ".cabinet__address-remove", function () {
    $(this).parent('.cabinet__address-item').remove();
    address_id--;
  });



  //NOTE - offer items counter

  $(window).on("load", function () {
    if (parseInt($(".cart__offer-count-input").val()) == 0) {
      $(".cart__offer-count-input").siblings(".cart__product-icon").hide();
    }

    if (parseInt($(".cart__offer-count-input").val()) == 1) {
      $(".cart__offer-count-input").siblings(".cart__product-icon--1").show();
      $(".cart__offer-count-input").siblings(".cart__product-icon--2, .cart__product-icon--3, .cart__product-icon--4").hide()
    }

    if (parseInt($(".cart__offer-count-input").val()) == 2) {
      $(".cart__offer-count-input").siblings(".cart__product-icon--1, .cart__product-icon--2").show();
      $(".cart__offer-count-input").siblings(".cart__product-icon--3, .cart__product-icon--4").hide();
    }

    if (parseInt($(".cart__offer-count-input").val()) == 3) {
      $(".cart__offer-count-input").siblings(".cart__product-icon--1, .cart__product-icon--2, .cart__product-icon--3").show();
      $(".cart__offer-count-input").siblings(".cart__product-icon--4").hide();
    }

    if (parseInt($(".cart__offer-count-input").val()) >= 4) {
      $(".cart__offer-count-input").siblings(".cart__product-icon--1, .cart__product-icon--2, .cart__product-icon--3, .cart__product-icon--4").show();
    }
  });

  $(".cart__offer-count-input").change(function () {
    if (parseInt($(this).val()) == 0) {
      $(this).siblings(".cart__product-icon").hide();
    }

    if (parseInt($(this).val()) == 1) {
      $(this).siblings(".cart__product-icon--1").show();
      $(this).siblings(".cart__product-icon--2, .cart__product-icon--3, .cart__product-icon--4").hide();
    }

    if (parseInt($(this).val()) == 2) {
      $(this).siblings(".cart__product-icon--1, .cart__product-icon--2").show();
      $(this).siblings(".cart__product-icon--3, .cart__product-icon--4").hide();
    }

    if (parseInt($(this).val()) == 3) {
      $(this).siblings(".cart__product-icon--1, .cart__product-icon--2, .cart__product-icon--3").show();
      $(this).siblings(".cart__product-icon--4").hide();
    }

    if (parseInt($(this).val()) >= 4) {
      $(this).siblings(".cart__product-icon--1, .cart__product-icon--2, .cart__product-icon--3, .cart__product-icon--4").show();
    }
  });



  //NOTE - cart items delete
  $(".cart__offer-delete").click(function () {
    $(this).parents(".cart__offer-item").remove();
  });



  //NOTE - cart delivery time switch
  $(".cart__delivery-time-radio").change(function () {
    if ($("#time-schedule").is(":checked")) {
      $(".cart__schedule-wrapper").slideDown(260);
    } else {
      $(".cart__schedule-wrapper").slideUp(260);
    }
  });



  //NOTE - cart delivery type switch
  $(".cart__delivery-type-radio").change(function () {
    if ($("#with-delivery").is(":checked")) {
      $(".cart__address-wrapper").slideDown(260);
    } else {
      $(".cart__address-wrapper").slideUp(260);
    }
  });



  //NOTE - cart delivery address switch
  $(".cart__delivery-address-radio").change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().siblings(".cart__address-input-wrapper").find(".cart__input").attr("disabled", false);
      $(this).parents(".cart__address-item").siblings().find(".cart__input").attr("disabled", true);
    }
  });



  //NOTE - burger click functions
  $(".header__burger").click(function () {
    $(this).toggleClass("burger--open");
    $(".header__nav").toggleClass("header__nav--open");
  });



  //NOTE - menu relocate
  $(window).on("load resize orientationchange", function () {
    if ($(window).width() < 1080) {

      $(".header__work-hours, .header__nav, .header__icons")
        .detach()
        .appendTo($(".header__inner--black"));

    } else {
      $(".header__work-hours, .header__nav")
        .detach()
        .insertAfter(".header__logo")
        .removeClass("--black");
      $(".header__icons")
        .detach()
        .insertAfter(".header__phones-list");
    }
  });



  //NOTE - filter relocate
  $(window).on("load resize orientationchange", function () {
    if ($(window).width() < 940) {

      $(".page-title__filter")
        .detach()
        .insertAfter(".page-title");

    } else {
      $(".page-title__filter")
        .detach()
        .appendTo(".page-title__wrapper");
    }
  });



  //NOTE - filter open/close
  $(".page-title__filter-btn").click(function () {
    $(".page-title__filter").slideToggle(260);
  });



  //NOTE - product item ingridients toggle
  $('.product-item__ingridients-btn').click(function () {
    $(this).parent().toggleClass("--open");
  });



  //NOTE - password visible button
  $(".form__password-btn").on("mousedown", function () {
    $(this).siblings('input').attr('type', "text");
  });

  $(".form__password-btn").on("mouseup", function () {
    $(this).siblings('input').attr('type', "password");
  });
});