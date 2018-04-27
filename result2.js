$(document).ready(function () {
    $('.query-diagram-area1').show();
    $('.query-diagram-area2').hide();
    $('.query-diagram-area3').hide();
    $('select').on('change', function () {
        if(this.value == "1") {
            $('.query-diagram-area1').show();
            $('.query-diagram-area2').hide();
            $('.query-diagram-area3').hide();
        } else if (this.value == "2") {
            $('.query-diagram-area1').hide();
            $('.query-diagram-area2').show();
            $('.query-diagram-area3').hide();
        } else if (this.value == "3") {
            $('.query-diagram-area1').hide();
            $('.query-diagram-area2').hide();
            $('.query-diagram-area3').show();

        }
    })
})
