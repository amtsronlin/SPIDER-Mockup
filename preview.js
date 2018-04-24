
var clickedElement;
$(document).ready(function () {
    $(document).on("click", ".column", function () {
        clickedElement = this;
    });
    $('#myModal').on('hidden.bs.modal', function () {
        var text = clickedElement.parentElement.previousElementSibling;
        console.log(text);
        var column = '';
        $(".form-check-input:checked").each(function () {
            column += $(this).val() + ",";
        });
        column = column.slice(0, -1);
        text.innerHTML = column;
    });
})
