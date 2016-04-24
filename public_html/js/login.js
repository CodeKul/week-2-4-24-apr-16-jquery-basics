/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $("#btnLogin").click(function () {

        console.log("Login Clicked");
        var userName = $("#textUserName").val();
        var password = $("#textPassword").val();

        if (userName === "android" && password === "android") {

            console.log("If block");

            $("#divLogin").css("display", "none");
            $("#divAdmin").css("display", "block");
        }
    });
}); 