// ��ʼ��
var status = 0;
$.backstretch("images/landingpage.jpg");
$(".form").fadeOut(1);

function buttonclick() {

    if (status == 0) {
        status = 1;
        $.backstretch("images/form.jpg");
        $(".form").fadeIn(3000);
    } else if (status == 1) {

        if ($("#input_name").val() == "" || $("#input_contact").val() == "") {
            alert("�ף���������д�����ݣ�");
            return;
        }

        $.ajax({
            type: "POST",
            url: 'http://papicbus.applinzi.com/submit',
            data: $('#form').serialize(),
            error: function() {
                alert("����ʧ�ܣ�����ϵ�ڴ�������Ա��");
            },
            success: function(data) {
                if (data == 1) {
                    $(".form").fadeOut(1);
                    $.backstretch("images/suc.jpg");
                } else {
                    alert("����ʧ�ܣ�����ϵ�ڴ�������Ա��");
                }
            }
        });

    }

}