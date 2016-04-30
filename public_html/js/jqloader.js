/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {

    $.ui.autocomplete.filter = function (array, term) {
        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
        return $.grep(array, function (value) {
            return matcher.test(value.label || value.value || value);
        });
    };

    $("#slider").slider({
        slide: function (event, barVal) {
            console.log("Value is - " + barVal.value);

            $("#btnDialog").css("font-size", barVal.value + "em");
        }
    });
    $("input[type=button]")
            .button()
            .click(function () {

            });

    $("#divDialog").dialog({
        autoOpen: false,
        show: {
            effect: "size",
            duration: 500
        },
        hide: {
            effect: "size",
            duration: 5000
        }
    });

    $("#btnDialog").click(function () {
        $("#divDialog").dialog("open");
    });

    $("#datePicker").datepicker({dateFormat: 'dd-mm-yy'});

    $("#btnAddClass").click(function () {
        $("#btnDialog").addClass("textBig", 500, "swing", function () {
            $("#btnDialog").removeClass("textBig");
        });
    });

    $("#btnRemoveClass").click(function () {
        $("#btnDialog").removeClass("textBig");
    });

    $("#textAutoComplete").autocomplete({
        source : [
         "android",
         "java",
         "black berry",
         "apple",
         "windows",
         "samsung",
         "htc"
         ]
    });
    
    $("#btnAjax").click(function (){
        $.ajax({
           url :"http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo",
            success: function (data) {
         
                var obj = {
                    geonames : [
                        {lat: 20, lng : 10, loc : "punr"},
                        {lat: 20, lng : 10, loc : "punr"},
                        {lat: 20, lng : 10, loc : "punr"},
                        {lat: 20, lng : 10, loc : "punr"}
                    ]
                };
                console.log(""+obj.geonames[0].lat);
                console.log(""+data.geonames[0].lng);
            }
        });
    });
    
    $("#btnPost").click(function (){
        
        $.post("",{},function(data, status){
            
            
        })
    })
});