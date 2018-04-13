$(document).ready(function () {
    var i=1;
    $("#add_table").click(function(){
        $('#addr' + i).html("<thead><tr><th colspan='3' class='text-center'>Jazz Server Details <button class='btn btn-info pull-right ico' data-toggle='collapse' data-target='#demo" + i + "'><i class='material-icons'>add</i></button></th></tr></thead>" + 
            "<tbody id='demo" + i + "' class='collapse in'><tr><td>Server Name:</td><td><input type='text' name='server" + i + "' placeholder='Server' class='form-control input-md' /></td><td><button class='btn btn-primary pull-right'>Connect</button></td></tr>"+
            "<tr><td>Project Area:</td><td><select name='project" + i + "' class='form-control input-md'><option value='1'>CATS</option>" +
            "<option value ='2'> ATRS</option ></select></td><td></td></tr>");
        $('#tab_logic').append('<table class="table table-bordered table-hover" id="addr'+(i+1)+'"></table>');
        i++;        
    });

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
})

