var entries = [];
var global_index = ""
$('.list .title').each(function (index) {
    global_index = index
    var title = this.innerText.replace(':', '')

    if (index == 1) {
        title = "Société Néguentropique"
    }

    if (index == 89) {
        title = "Modèle Handy"
    }

    // remove the anchor if it exists
    // to avoid duplicates
    // in the list content
    $(this).find('.anchor').remove()

    $('.list anchor').remove()

    // create the list box entries
    // and the anchor in the summary list
    // to be used by the 3D Tag Cloud
    // and the summary list
    var anchor = `#${title}`
    $('#summary-list ul').append(`<li><a href="${anchor}">${title}</a></li>`)

    // create the anchor in the list content
    $(this).append(`<a id="${title}" class="anchor"></a>`)

    // create the entry for the 3D Tag Cloud
    entries.push({
        label: title,
        url: anchor,
        target: '_self'
    })
    console.log(entries)
})

var settings = {

    entries: entries[global_index],
    width: 480,
    height: 480,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#111',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#fff',
    fontWeight: 'normal', //bold
    fontStyle: 'normal', //italic 
    fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal', //bold
    tooltipFontStyle: 'normal', //italic 
    tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10

};

//var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
$('#tag-cloud').svg3DTagCloud(settings);
$('#tag-cloud').svg3DTagCloud('setEntries', entries);

// toggle navigation on/off
$("#def-nav-button").on("click", function () {
    $("#navtype-toggle").toggle("slow", function () {});
    $("#summary-list").toggle("slow", function () {});
});

// switch summary-list / tag-cloud
$("#navtype-toggle").on("click", function () {
    if ($("#navtype-toggle").text() === "List (switch)") {
        $("#navtype-toggle").text("Sphere (switch)");
    } else {
        $("#navtype-toggle").text("List (switch)");
    }

    $("#summary-list").toggle("slow", function () {});
    $("#tag-cloud").toggle("slow", function () {})
});