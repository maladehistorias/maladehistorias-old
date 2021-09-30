var activate = true;

function counter() {
  if (activate) {
    console.log("counter");
    activate = false;
    $(".counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
}

var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0]["intersectionRatio"] === 1) {
      counter();
    }
  },
  { threshold: [0, 1] }
);

observer.observe(document.querySelector("#counter-1"));
