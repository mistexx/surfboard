$(".form").submit(e => {
    e.preventDefault();

    $.fancybox.open({
        src: "#modal",
        type: "inline"
    })

    $(".app-submit-button").click(e => {
        e.preventDefault();

        $.fancybox.close();
    })

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const isValid = validateField(form, [name, phone, comment, to]);
    
    if (isValid) {
       $.ajax({
           url: "https://webdev-api.loftschool.com/sendmail",
           method: "post",
           data: {
               name: name.val(),
               phone: phone.val(),
               comment: comment.val(),
               to: to.val(),
           },
           success: data => {
               console.log(data);
           }
       })
   }
});