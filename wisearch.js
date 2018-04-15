// function addNode(event) {
//     var x = document.createElement("INPUT");
//     x.setAttribute("type", "text");
//     x.setAttribute("value", "Hello World!");
//     event.appendChild(x);
// }



$(document).ready(function () {
var index=2;
var clickedElement;
    // $(".path-right" + (i -1)).click(function(){
    //     $('#node' + i + "-dom").html("<div class='node-display' id='node" + i +"-display' title='Work Item'></div><div class='path path-right'></div>");
    //     i++;
    //     $('.query-diagram-area').append('<div id="node' + i + '-dom" class="resource-node group-object"></div>');         
    // });

    $("#delete_table").click(function(){
        if(i>1){
        $("#addr"+(i-1)).html('');
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
    $('#myModal').on('hidden.bs.modal', function() {
        var select = $("select", this).val();
        var idx = $("input", this).val();
        $(".djs-label-d", clickedElement).html('<tspan x="6" y="62">'+ select +'</tspan>');
        addNode(idx, select);
    });

    $(document).on("click", ".path-right", function () {
        var idx = $(this).data('index');
        $("#myModal #index").val(idx);
        clickedElement = this;
        // As pointed out in comments, 
        // it is superfluous to have to manually call the modal.
        // $('#addBookDialog').modal('show');
   });

    function addNode(i, select) {
        if (index == i) {
            $('#node' + i + "-dom").html("<div class='node-display' id='node" + i +"-display' title='Work Item'><input type='text'/></div><div class='path path-right' data-index='2' data-toggle='modal' data-target='#myModal'></div>");
            i++;
            index++;
            $('.query-diagram-area').append('<div id="node' + i + '-dom" class="group-object"></div>'); 
        }
    
    }
})

