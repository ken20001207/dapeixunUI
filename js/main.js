// 初始化
var status = 0;
$.backstretch("images/landingpage.jpg");
$(".form").fadeOut(1);

function buttonclick() {

    if (status == 0) {
        status = 1;
        $.backstretch("images/form.jpg");
        $(".form").fadeIn(3000);
    } else if (status == 1) {

        $.ajax({
            type: "POST",
            url: '', // todo : fill in the url
            data: $('#form').serialize(),
            success: function (data) {
                if (data == 1) {
                    $(".form").fadeOut(1);
                    $.backstretch("images/suc.jpg");
                } else {
                    alert("报名失败，请联系勤创工作人员。");
                }
            }
        });

    }

}