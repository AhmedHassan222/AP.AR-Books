
// change background color in navbar when scroll
$(window).scroll(function () {
    let wscroll = $(window).scrollTop()
    if (wscroll >= 10) {
        $('nav').css('backgroundColor', 'rgba(255,255,255,0.9)')
        $('nav').css('boxShadow', '0px 0px 5px rgb(209, 209, 209)')
    } else {
        $('nav').css('backgroundColor', 'transparent')
        $('nav').css('boxShadow', 'none')
    }
});

//changes when click in small screen 
let isOpen = false;
document.querySelector('.btnToggle').addEventListener('click', function () {
    if (isOpen == false) {
        document.querySelector('nav').classList.add('backgroundNav')
        document.querySelector('#open').classList.replace('d-block','d-none')
        document.querySelector('#close').classList.replace('d-none','d-block')
        isOpen = true;
    }else 
    {
        document.querySelector('nav').classList.remove('backgroundNav')
        document.querySelector('#open').classList.replace('d-none','d-block')
        document.querySelector('#close').classList.replace('d-block','d-none')
        isOpen = false;
    }
})

// video one
$('.boxImage').click(function () {
    $('.boxImage').attr('class', 'd-none');
    document.querySelector('.video').classList.remove('d-none')
    document.querySelector('.video').play()
});
// video two 
$('.boxImage2').click(function () {
    console.log('hello')
    $('.boxImage2').attr('class', 'd-none');
    document.querySelector('.video2').classList.remove('d-none')
    document.querySelector('.video2').play()
});


//FAQ section in index

let qustionList = document.querySelectorAll('.qustion')
for (let i = 0; i < qustionList.length; i++) {
    qustionList[i].addEventListener('click', function () {
        if (document.querySelector(`#small${i}`).getAttribute('class') === 'small text-muted d-none') {
            document.getElementById(`icon${i}`).style.cssText = ' transform: rotateZ(45deg)'
            document.querySelector(`#small${i}`).classList.remove('d-none')
        } else {
            document.getElementById(`icon${i}`).style.cssText = ' transform: rotateZ(0deg)'
            document.querySelector(`#small${i}`).classList.add('d-none')
        }
    })
}
//FAC section in for project owner

let qustionList2 = document.querySelectorAll('.faq2')
for (let i = 0; i < qustionList2.length; i++) {
    qustionList2[i].addEventListener('click', function () {
        if (document.querySelector(`#item${i}`).getAttribute('class') === 'small text-muted d-none') {
            document.getElementById(`icon${i}`).style.cssText = ' transform: rotateZ(45deg)'
            document.querySelector(`#item${i}`).classList.remove('d-none')
        } else {
            document.getElementById(`icon${i}`).style.cssText = ' transform: rotateZ(0deg)'
            document.querySelector(`#item${i}`).classList.add('d-none')
        }
    })
}








//imge slider in for project owner
document.querySelector('#img0').addEventListener('click', function () {
    document.querySelector('#theMainImage').classList.replace('imgNone', 'imgAnimation')
    document.querySelector('#img0').classList.remove('active')
    //animation main image
    //style image when click
    document.querySelector('#img0').classList.replace('imgShow', 'imgWhenClick')
    document.querySelector('#img1').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img2').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img3').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img4').classList.replace('imgWhenClick', 'imgShow')
    //show item
    document.querySelector('#box0').classList.replace('d-none', 'd-block')
    document.querySelector('#box1').classList.replace('d-block', 'd-none')
    document.querySelector('#box2').classList.replace('d-block', 'd-none')
    document.querySelector('#box3').classList.replace('d-block', 'd-none')
    document.querySelector('#box4').classList.replace('d-block', 'd-none')
})
document.querySelector('#img1').addEventListener('click', function () {
    document.querySelector('#img0').classList.remove('active')

    //animation main image
    document.querySelector('#theMainImage').classList.replace('imgNone', 'imgAnimation')
    document.querySelector('#img0').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img1').classList.replace('imgShow', 'imgWhenClick')
    document.querySelector('#img2').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img3').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img4').classList.replace('imgWhenClick', 'imgShow')

    document.querySelector('#box0').classList.replace('d-block', 'd-none')
    document.querySelector('#box1').classList.replace('d-none', 'd-block')
    document.querySelector('#box2').classList.replace('d-block', 'd-none')
    document.querySelector('#box3').classList.replace('d-block', 'd-none')
    document.querySelector('#box4').classList.replace('d-block', 'd-none')
})
document.querySelector('#img2').addEventListener('click', function () {
    document.querySelector('#img0').classList.remove('active')

    //animation main image
    document.querySelector('#theMainImage').classList.replace('imgNone', 'imgAnimation')
    document.querySelector('#img0').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img1').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img2').classList.replace('imgShow', 'imgWhenClick')
    document.querySelector('#img3').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img4').classList.replace('imgWhenClick', 'imgShow')


    document.querySelector('#box0').classList.replace('d-block', 'd-none')
    document.querySelector('#box1').classList.replace('d-block', 'd-none')
    document.querySelector('#box2').classList.replace('d-none', 'd-block')
    document.querySelector('#box3').classList.replace('d-block', 'd-none')
    document.querySelector('#box4').classList.replace('d-block', 'd-none')
})
document.querySelector('#img3').addEventListener('click', function () {
    document.querySelector('#img0').classList.remove('active')

    //animation main image
    document.querySelector('#theMainImage').classList.replace('imgNone', 'imgAnimation')
    document.querySelector('#img0').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img1').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img2').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img3').classList.replace('imgShow', 'imgWhenClick')
    document.querySelector('#img4').classList.replace('imgWhenClick', 'imgShow')


    document.querySelector('#box0').classList.replace('d-block', 'd-none')
    document.querySelector('#box1').classList.replace('d-block', 'd-none')
    document.querySelector('#box2').classList.replace('d-block', 'd-none')
    document.querySelector('#box3').classList.replace('d-none', 'd-block')
    document.querySelector('#box4').classList.replace('d-block', 'd-none')
})
document.querySelector('#img4').addEventListener('click', function () {
    document.querySelector('#img0').classList.remove('active')

    //animation main image
    document.querySelector('#theMainImage').classList.replace('imgNone', 'imgAnimation')
    document.querySelector('#img0').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img1').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img2').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img3').classList.replace('imgWhenClick', 'imgShow')
    document.querySelector('#img4').classList.replace('imgShow', 'imgWhenClick')


    document.querySelector('#box0').classList.replace('d-block', 'd-none')
    document.querySelector('#box1').classList.replace('d-block', 'd-none')
    document.querySelector('#box2').classList.replace('d-block', 'd-none')
    document.querySelector('#box3').classList.replace('d-block', 'd-none')
    document.querySelector('#box4').classList.replace('d-none', 'd-block')
})

setInterval(() => {
    if (document.querySelector('#theMainImage').getAttribute('class') == 'imgAnimation') {
        document.querySelector('#theMainImage').classList.replace('imgAnimation', 'imgNone')
    }
}, 400);








function month (){
    document.querySelector('#annulay').classList.remove('buttonClick')
    document.querySelector('#month').classList.add('buttonClick')
    document.querySelector('#priceOne').innerHTML='159'
    document.querySelector('#priceTwo').innerHTML='249'
    document.querySelector('#priceThree').innerHTML='359'
}
function annualy(){
    document.querySelector('#month').classList.remove('buttonClick')
    document.querySelector('#annulay').classList.add('buttonClick')    
    document.querySelector('#priceOne').innerHTML='127'
    document.querySelector('#priceTwo').innerHTML='207'
    document.querySelector('#priceThree').innerHTML='287'
}


//Register 





// owners contractors subcontractors
$(document).ready(function(){
    // Determine if it is an edg browser and remove the custom password display button
    var ua = window.navigator.userAgent;
    var edge = ua.indexOf('Edg') || ua.indexOf('Edge');

    if (edge > 0) {
        $("#password-addon").remove();
    }

    document.getElementById("password-addon").addEventListener("click", function (event) {

        var passwordInput = document.getElementById('password');
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });


    var html = `<div class="password-tips">
                    <div class="title mb-1" >The password must contain:</div>
                    <ul class="mb-0">
                        <li class="text-danger">Upper Case</li>
                        <li class="text-danger">Lower Case</li>
                        <li class="text-danger">Special Characters</li>
                        <li class="text-danger">Number</li>
                        <li class="text-danger">Between 8-24 letters</li>
                    </ul>
                </div>`

    $('#password').popover({
        'trigger':'focus',
        'placement': 'right',
        'html': true,
        'title': html,
    });

    $('#password').on('keyup', function(e) {
        var $curValue = $(e.currentTarget).val();
        if ( $curValue.length >= 8 && $curValue.length <= 24 ) {
            var $el = $(".password-tips li").eq(4)
            $el.addClass("text-success")
            $el.removeClass("text-danger")
        }else{
            var $el = $(".password-tips li").eq(4)
            $el.removeClass("text-success")
            $el.addClass("text-danger")
        }
        // Determine number
        var pwdRegex = new RegExp('[0-9]');
        if(pwdRegex.test($curValue)) {
            var $el = $(".password-tips li").eq(3)
            $el.addClass("text-success")
            $el.removeClass("text-danger")
        }else{
            var $el = $(".password-tips li").eq(3)
            $el.removeClass("text-success")
            $el.addClass("text-danger")
        }
        // Determine Upper Case
        var pwdRegex = new RegExp('[A-Z]');
        if(pwdRegex.test($curValue)) {
            var $el = $(".password-tips li").eq(0)
            $el.addClass("text-success")
            $el.removeClass("text-danger")
        }else{
            var $el = $(".password-tips li").eq(0)
            $el.removeClass("text-success")
            $el.addClass("text-danger")
        }
        // Determine Low Case
        var pwdRegex = new RegExp('[a-z]');
        if(pwdRegex.test($curValue)) {
            var $el = $(".password-tips li").eq(1)
            $el.addClass("text-success")
            $el.removeClass("text-danger")
        }else{
            var $el = $(".password-tips li").eq(1)
            $el.removeClass("text-success")
            $el.addClass("text-danger")
        }
        // Determine Special
        var pwdRegex = new RegExp('[^a-zA-Z0-9]');
        if(pwdRegex.test($curValue)) {
            var $el = $(".password-tips li").eq(2)
            $el.addClass("text-success")
            $el.removeClass("text-danger")
        }else{
            var $el = $(".password-tips li").eq(2)
            $el.removeClass("text-success")
            $el.addClass("text-danger")
        }
        // Overall judgment regularity
        var pwdRegex = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,24}');
        if(pwdRegex.test($curValue)) {
            var $el = $(".password-tips .tips-item").eq(0).find("i")
            $el.addClass("ri-checkbox-circle-fill text-success")
            $el.removeClass("ri-close-circle-fill text-danger")
        }else{
            var $el = $(".password-tips .tips-item").eq(0).find("i")
            $el.removeClass("ri-checkbox-circle-fill text-success")
            $el.addClass("ri-close-circle-fill text-danger")
        }
    })
});


if (document.querySelector("input#phone")) {
    var cleavePhone = new Cleave('#phone', {
        phone: true,
        phoneRegionCode: 'US',
        delimiter: '-',
        blocks: [3, 3, 4]
    });
}

function remove_invalid(id) {

    const $input = $("input#" + id);

    if ($input.hasClass('is-invalid')) {
        $input.removeClass('is-invalid');
        $("#" + id + "-alert").remove();
    }
}

$("input#first_name").on('input', function(){
    remove_invalid("first_name");
})

$("input#last_name").on('input', function(){
    remove_invalid("last_name");
})

$("input#company").on('input', function(){
    remove_invalid("company");
})

$("input#email").on('input', function(){
    remove_invalid("email");
})

$("input#phone").on('input', function(){
    remove_invalid("phone");
})

$("input#password").on('input', function(){
    remove_invalid("password");
})

$("#signUpBtn").on('click', function() {

    var product = $('#product').val();

    if (document.getElementById('phone')) {
        $("input[name='phone']").val(cleavePhone.getRawValue());
    }


    let $this = $(this);
    let loader = $("#" + $this.attr('id') + "_loader");

    $this.hide();
    loader.show();

    $("#regFrm").submit();
});


if (document.getElementById('timezone')) {
    //-- 初始化select
    $("#timezone").selectize({
        delimiter: ",",
        persist: true,
        maxItems: 1,
        create: false,
    }).on('change', function(val){
        let itemName = $(val.currentTarget).val();
        let real_options = $(val.currentTarget)[0].selectize.options
        let tmp = [];

        for (let i in real_options) {
            tmp.push(real_options[i])
        }

        tmp.find(function(cur, index) {
            // console.log(itemName, cur.value)
            if(itemName === cur.value) {
                $("#timezone-label").text(cur.time);
                // return;
            }
        })
    });
}


/**************************Loading Show and Hide*******************************/
var load_to_show = function() {
$('#preloader').removeClass('d-none');
}

var load_to_hide = function() {
$('#preloader').addClass('d-none');
}
//
/********************* Add loading button ************************/
//
$("button.button-loader, a.button-loader").each(function(index, element) {
let $element = $(element);

// console.log(element);
let id = $element.attr('id');

$element.after(`<button class="btn btn-primary btn-load" id="${id}_loader" style="display: none" disabled>
        <span class="d-flex align-items-center">
            <span class="spinner-border flex-shrink-0" role="status">
                <span class="visually-hidden">Loading...</span>
            </span>
            <span class="flex-grow-1 ms-2">Loading...</span>
        </span></button>`);
});

//-- Ajax Handler for API Notification
var handle_ajax_notification = function(response) {

if (typeof response == 'object') {
//show notification
if (response.message.hasOwnProperty('content')) {
    let title = response.message.hasOwnProperty('title') ? response.message.title : '';
    notify(response.message.type, title, response.message.content);
}
}
}

//-- Ajax Handler for Error
var handle_ajax_error = function(x, status, error) {
if (x.status == 401) {
alert("Wrong Bearer Token");
window.location.href = "/login";
} else if (x.status == 403) {
alert("Unverified email");
window.location.href = "/";
} else if (x.status == 404) {
alert("404");
window.location.href = "/";
} else if (x.status == 429) {
alert("Too many times attempt");
} else if (x.status == 498) {
alert("No permission to this domain");
window.location.href = "/";
}
//---Form validation Fail---
else if (x.status == 422) {
//handeld by ajax caller
} else if (x.status == 500) {
alert("system error");
} else {
alert("An error occurred: " + status + "nError: " + error);
}
};

//-- Parse form validation errors from Ajax Call
var ajax_parse_form_errors = function(frm, errors) {
$(frm).find('.is-invalid').removeClass('is-invalid');
$(frm).find('.invalid-feedback').html('');
for (var input in errors) {
// skip loop if the property is from prototype
if (!errors.hasOwnProperty(input)) continue;

let element = $(frm).find("[name='" + input + "']");
if (element.length > 1) {
    element = element.last().parent('div');
}
element.addClass('is-invalid');
element.next('.invalid-feedback').length > 0 ? element.next('.invalid-feedback').html(errors[input]
    .join(", ")) : element.after('<div class="invalid-feedback"> ' + errors[input].join(", ") +
    ' </div>');
}
$(frm).find('.is-invalid:first').focus();
};
