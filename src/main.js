import "@splidejs/splide/css";
import "./style.css";
import Splide from "@splidejs/splide";

new Splide(".splide", {
  arrows: false,
  direction: "rtl",
  autoplay: true,
  type: "loop",
  classes: {
    page: "splide__pagination__page splide-custom", // each button
  },
}).mount();
