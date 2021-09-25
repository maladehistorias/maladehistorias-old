(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
})(jQuery);

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#topNav",
});

// function animateValue(id, start, end) {
//     if (start === end) return;
//     var range = end - start;
//     var current = start;
//     var step = Math.pow(10, (Math.log(end) * Math.LOG10E | 0) - 1);
//     console.log(step);
//     var increment = end > start? step : -step;
//     var stepTime = Math.abs(Math.floor(2000 / (range/step)));
//     console.log(range/step);
//     console.log(stepTime);
//     var obj = document.getElementById(id);
//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current >= end) {
//             current = end;
//             obj.innerHTML = current;
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// counter();

// $(window).on("activate.bs.scrollspy", function (e) {
//   if (e.relatedTarget == "#oquefazemos") {
//     // animateValue('counter-1', 0, 2820498);
//     counter();
//   }
// });

// function counter() {
//   $(".counter").each(function () {
//     $(this)
//       .prop("Counter", 0)
//       .animate(
//         {
//           Counter: $(this).text(),
//         },
//         {
//           duration: 4000,
//           easing: "swing",
//           step: function (now) {
//             $(this).text(Math.ceil(now));
//           },
//         }
//       );
//   });
// }
