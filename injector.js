setInterval(blockFrames, 500);

function blockFrames() {
    var els = $('iframe, #ad-horizontal, #ad-vertical, div.block-pair, #sidebar-wrapper');
    els.remove();


    if ($('#the_one_ad').length === 0) {
        $('div.blocks').append("<h1 id='the_one_ad'>PSA from WowHead IFrameBlocker: Go buy <a href='http://www.wowhead.com/premium'>Premium</a>.  It's $9 per year.</h1>");
    }
}
