$(".form").submit(e => {
    e.preventDefault();
    $(".app-submit-button").click(e => {
        e.preventDefault();
        $.fancybox.close();
    })
    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");
    const isValid = validateForm(form[0]);
    
    const modal = $("#modal");
    const content = modal.find(".modal__title");

    modal.removeClass("error-modal"); 

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
            content.text(data.message)
            $.fancybox.open({
                src: "#modal",
                type: "inline"
            })
           },
           error: data => {
               const message = data.responseJSON.message;
               content.text(message);
               console.log(data);
               modal.addClass("error-modal"); 
               $.fancybox.open({
                src: "#modal",
                type: "inline"
            })
           }
       })
   }
});