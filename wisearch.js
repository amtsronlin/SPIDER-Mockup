var index = 2;
var j = 1;
var clickedElement;
var status = 'Status:<select class="selectpicker" id="status" multiple data-live-search="true">' +
    '<option value="track">Accepted</option>' +
    '<option value="parent">Approved</option>' +
    '<option value="relate">Closed</option>' +
    '<option value="implement">In progress</option>' +
    '<option value="child">New</option>' +
    '</select><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>';
var create = 'Create:<select class="selectpicker" id="create" data-live-search="true">' +
    '<option value="track">Mary</option>' +
    '<option value="parent">Peter</option>' +
    '<option value="relate">Join</option>' +
    '<option value="implement">Tom</option>' +
    '<option value="child">Laura</option>' +
    '</select><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>';
var own = 'Own:<select class="selectpicker" id="own" data-live-search="true">' +
    '<option value="track">Mary</option>' +
    '<option value="parent">Peter</option>' +
    '<option value="relate">Join</option>' +
    '<option value="implement">Tom</option>' +
    '<option value="child">Laura</option>' +
    '</select><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>';
var file = 'File:<select class="selectpicker" id="file" multiple data-live-search="true">' +
    '<option value="track">RBEI</option>' +
    '<option value="parent">MCP</option>' +
    '<option value="relate">RCAR</option>' +
    '<option value="implement">V850</option>' +
    '<option value="child">TC3X</option>' +
    '</select><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>'
var due = 'Due:<input type="text" id="due" name="due"><span class="glyphicon glyphicon-calendar"></span><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>'
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
var rtc = GetURLParameter('rtc');

 $(document).ready(function () {

    if (rtc === "1") {
        console.log(rtc);
        $(".conditionTab2").remove();
    } else {
        $(".conditionTab1").remove();
    }

    $("#delete_table").click(function () {
        if (i > 1) {
            $("#addr" + (i - 1)).html('');
            i--;
        }
    });

    $(document).on('click', ".ico", function () {
        if ($("i", this).html() == "remove") {
            $("i", this).html("add");
        } else {
            $("i", this).html("remove");
        }
    });
    $('#myModal').on('hidden.bs.modal', function () {
        var select = $("select", this).val();
        var radio = $("input[name=optradio]:checked", this).val();
        var idx = $("input[name=index]", this).val();
        if (select != '') {
            $(".djs-label-d", clickedElement).html('<tspan x="6" y="62">' + select + '</tspan>');
            $(".djs-label-u", clickedElement).html('<tspan x="6" y="45">' + radio + '</tspan>');
            addNode(idx, select, this);
        }
    });

    $(document).on("click", ".path-right", function () {
        var idx = $(this).data('index');
        $("#myModal #index").val(idx);
        clickedElement = this;
        // As pointed out in comments, 
        // it is superfluous to have to manually call the modal.
        // $('#addBookDialog').modal('show');
    });

    $(document).on('click', ".node-display", function (e) {
        $("#popupRC").css({
            position: "absolute", top: e.pageY,
            left: e.pageX, display: "block"
        });
    });

    $(document).on('click', ".remove", function (e) {
        alert($(this).parent());
        $(this).parent().remove();
    });

    function addNode(i, select, event) {
        if (index == i) {
            index++;
            $('#node' + i + "-dom").html("<div class='node-display' id='node" + i + "-display' title='Work Item' class='context' data-toggle='context' data-target='#context-menu'><input class='wiInput' type='text' value='wi"+i+"'/></div><div class='path path-right' data-index=" + index + " data-toggle='modal' data-target='#myModal'>" +
                "<svg width='90px' height='100px'><g><defs><marker id='marker' viewBox='0 0 20 20' refX='11' refY='10' markerWidth='10' markerHeight='10' orient='auto'><path d='M 1 5 L 11 10 L 1 15 Z' style='fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;'></path>" +
                "</marker></defs ><text class='djs-label-u' style='font-family: Arial, sans-serif; font-size: 11px;'></text><line x1='0' y1='50' x2='90' y2='50' marker-end='url(#marker)' stroke='black' stroke-width='2' /><text class='djs-label-d' style='font-family: Arial, sans-serif; font-size: 11px;'></text>" +
                "</g ></svg ></div>");
            i++;
            $('.query-diagram-area').append('<div id="node' + i + '-dom" class="group-object"></div>');
        }
    }

    $('#wiModal .save').click(function (e) {
        e.preventDefault();
        $('#wiModal').modal('hide');
        //$(this).tab('show')
        return false;
    })

     $('.choose').click(function (e) {
         e.preventDefault();
         $('#wiModal').modal('hide');
         //$(this).tab('show')
         return false;
     })

    $('#wiModal').on('hidden.bs.modal', function () {
        $('#popupRC').css({ display: 'none' });
    });

    function addAtt(htmlTxt) {
        $('#add-attr' + j).html(htmlTxt);
        j++;
        $('.d-flex').append('<div class="add-attr" id="add-attr' + j + '"></div>');
    }

    $('#condSelect').on('changed.bs.select', function (e) {
        if ($('#condSelect').selectpicker('val') === 'due') {
            addAtt(due);
            $("#due").datepicker();
        } else if ($('#condSelect').selectpicker('val') == 'own') {
            addAtt(own);
        } else if ($('#condSelect').selectpicker('val') == 'create') {
            addAtt(create);
        } else if ($('#condSelect').selectpicker('val') == 'status') {
            addAtt(status);
        } else if ($('#condSelect').selectpicker('val') == 'file') {
            addAtt(file);
        }
        $(".selectpicker").selectpicker('refresh');
    });

 

})

function remove(e) {
    $(".djs-label-d", clickedElement).html('');
    $(".djs-label-u", clickedElement).html('');
    var select = $("#myModal select").val("");
    var radio = $("#myModal input[name=optradio]").val("");
}

