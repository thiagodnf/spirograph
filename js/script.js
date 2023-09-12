import Spirograph from "./core/Spirograph.js";
import Canvas from "./utils/Canvas.js";
import DarkMode from "./utils/DarkMode.js";

let canvas = new Canvas("canvas");
let spirograph = new Spirograph();

function resizeWindow() {

    const $mainPanel = $(".main-panel");

    canvas.setWidth($mainPanel.width());
    canvas.setHeight($(window).height() - $mainPanel.offset().top - 32);

    $(".side-panel .card").height(canvas.getHeight());
}

$(function () {

    function animate() {

        spirograph.update(canvas)

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    $(window).resize(resizeWindow).trigger("resize");

    DarkMode.init();

    $("#circles").change(function () {
        spirograph.create(Number(this.value));
    }).trigger("change");

    $("#speed").change(function () {
        spirograph.speed = Number(this.value);
    }).trigger("change");

    $("#distance").change(function () {
        spirograph.setDistance(Number(this.value));
    }).trigger("change");

    $("#radius").change(function () {
        spirograph.setRadius(Number(this.value));
    }).trigger("change");

    $("#theme").change(function () {
        spirograph.setTheme(this.value);
    }).trigger("change");

    $("#showOrbits").change(function () {
        spirograph.showOrbits = this.checked;
    }).trigger("change");

    $("#showCentroids").change(function () {
        spirograph.showCentroids = this.checked;
    }).trigger("change");

    $("#color-theme").change(function () {
        DarkMode.setTheme(this.value)
    }).val(DarkMode.getPreferredTheme())
});



