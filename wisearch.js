var index = 2;
var j = 1;
var clickedElement;
var status = '<select class="selectpicker" id="status" multiple data-live-search="true">'+
'<option value="track">Accepted</option>'+
'<option value="parent">Approved</option>'+
'<option value="relate">Closed</option>'+
'<option value="implement">In progress</option>'+
'<option value="child">New</option>'+
'</select>';
var create = '<select class="selectpicker" id="create" data-live-search="true">'+
'<option value="track">Mary</option>'+
'<option value="parent">Peter</option>'+
'<option value="relate">Join</option>'+
'<option value="implement">Tom</option>'+
'<option value="child">Laura</option>'+
'</select>';
var create = '<select class="selectpicker" id="create" data-live-search="true">'+
'<option value="track">Mary</option>'+
'<option value="parent">Peter</option>'+
'<option value="relate">Join</option>'+
'<option value="implement">Tom</option>'+
'<option value="child">Laura</option>'+
'</select>';
var own = '<select class="selectpicker" id="own" data-live-search="true">' +
'<option value="track">Mary</option>' +
'<option value="parent">Peter</option>' +
'<option value="relate">Join</option>' +
'<option value="implement">Tom</option>' +
'<option value="child">Laura</option>' +
'</select>';
var file = '<select class="selectpicker" id="file" multiple data-live-search="true">' +
'<option value="track">RBEI</option>' +
'<option value="parent">MCP</option>' +
'<option value="relate">RCAR</option>' +
'<option value="implement">V850</option>' +
'<option value="child">TC3X</option>' +
'</select>'
var due = '<input type="text" style="display:none;" id="due" name="due">'
$(document).ready(function () {

    // $(".path-right" + (i -1)).click(function(){
    //     $('#node' + i + "-dom").html("<div class='node-display' id='node" + i +"-display' title='Work Item'></div><div class='path path-right'></div>");
    //     i++;
    //     $('.query-diagram-area').append('<div id="node' + i + '-dom" class="resource-node group-object"></div>');         
    // });

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
        if (select !== null) {
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

    function addNode(i, select, event) {
        if (index == i) {
            index++;
            $('#node' + i + "-dom").html("<div class='node-display' id='node" + i + "-display' title='Work Item' class='context' data-toggle='context' data-target='#context-menu'><input type='text'/></div><div class='path path-right' data-index=" + index + " data-toggle='modal' data-target='#myModal'>" + 
                "<svg width='90px' height='100px'><g><defs><marker id='marker' viewBox='0 0 20 20' refX='11' refY='10' markerWidth='10' markerHeight='10' orient='auto'><path d='M 1 5 L 11 10 L 1 15 Z' style='fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;'></path>" +
                "</marker></defs ><text class='djs-label-u' style='font-family: Arial, sans-serif; font-size: 11px;'></text><line x1='0' y1='50' x2='90' y2='50' marker-end='url(#marker)' stroke='black' stroke-width='2' /><text class='djs-label-d' style='font-family: Arial, sans-serif; font-size: 11px;'></text>" +
                "</g ></svg ></div>");
            i++;
            $('.query-diagram-area').append('<div id="node' + i + '-dom" class="group-object"></div>');
        }
    }

    $('#wiModal .save').click(function (e) {
        e.preventDefault();
        addImage(5);
        $('#myModal').modal('hide');
        //$(this).tab('show')
        return false;
    })

    $('#wiModal').on('hidden.bs.modal', function () {
        $('#popupRC').css({ display: 'none' });
    });
    $('#wiModal').on('show.bs.modal', function () {
        $('#status').css({ display: 'none' });
        $('#create').css({ display: 'none' });
        $('#own').css({ display: 'none' });
        $('#file').css({ display: 'none' });
    });

    function addAtt(htmlTxt) {
        $('add-attr' + j).html(htmlTxt);
        j++;
        $('.query-diagram-area').append('<div id="add-attr'+j +'"></div>');

    }


    $('#condSelect').on('changed.bs.select', function (e) {
        addAtt($('#' + $('#condSelect').selectpicker('val')))
    });


})

function remove() {
    $(".djs-label-d", clickedElement).html('');
    $(".djs-label-u", clickedElement).html('');
    var select = $("select", this).val("");
    var radio = $("input[name=optradio]", this).val("");
}
