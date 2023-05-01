('#btn').click(function () {
    if (("#text").val() === '') {
        ("#msg").text(`Error 404!`)
    } else {
        let text = ('#text').val();
        ('#h1').text(`${text}`);
        ("#color").change(function () {
            ("h1").css('color', (this).val());
        });
    };
});