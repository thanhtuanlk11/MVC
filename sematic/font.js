$('.ui.form')
        .form({
            fields: {
                username: {
                    identifier: 'username',
                    rules: [{
                        type: 'empty',
                        prompt: 'Please enter a username'
                    }]
                },
                password: {
                    identifier: 'password',
                    rules: [{
                            type: 'empty',
                            prompt: 'Please enter a password'
                        },
                        {
                            type: 'minLength[6]',
                            prompt: 'Your password must be at least {ruleValue} characters'
                        }
                    ]
                },
            }
        });
    var hi = document.getElementById('btn-submit');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    hi.addEventListener('click', function(e) {
        e.preventDefault(); //ngắn chặn hành vi mặc định
        var mess = document.getElementById('ui_error_message');
        var check = document.getElementById('checkbox');
        mess.innerHTML = '';
        CheckDangNhap();
        CheckPass();
        Checkemail();
        // Check();
        if (username.value == 'admin@gmail.com' && check.checked && password.value == '123456') 
            window.location.assign("index2.html");
    });

    function CheckDangNhap() {
        var mess = document.getElementById('ui_error_message');
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        if (username.value == '' && password.value == '') {
            mess.innerHTML +=
                `
                <div class='insert'>
                    <ul class ='errorr'>
                        <li>Please enter your e-mail</li>
                        <li>Please enter a valid e-mail</li>
                        <li>Please enter your password</li>
                        <li>Your password must be at least 6 characters</li>
                    </ul>
                </div>
            `
        }
        else if(username.value != 'admin@gmail.com' && password.value !='123456'){
            mess.innerHTML +=
                `
                <div class='insert'>
                    <ul class ='errorr'>
                        <li>Login with wrong username or password</li>
                    </ul>
                </div>
            `
        }
    }

    function CheckPass() {
        var mess = document.getElementById('ui_error_message');
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        if (password.value.length < 6 && username.value.length > 1) {
            mess.innerHTML +=
                `
    <div class='insert'>
        <ul class='errorr'>
            <li>Your password must be at least 6 characters</li>
        </ul>
    </div>
    `
        }
    }
    function Check(){
        var mess = document.getElementById('ui_error_message');
        var check = document.getElementById('check');
        if (username.value == 'admin@gmail.com' && check.checked && password.value == '123456') 
            window.location.assign("index2.html"); 
        else{
            mess.innerHTML +=
                `
                <div class='insert'>
                    <ul class ='errorr'>
                        <li>Please check</li>
                    </ul>
                </div>
            `
        }         
    }

    function Checkemail() {
        var letter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var mess = document.getElementById('ui_error_message');
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        if (username.value == '' && password.value.length > 1) {
            mess.innerHTML +=
                `
            <div class='insert'>
                <ul class ='errorr'>
                    <li>Please enter your e-mail</li>
                    <li>Plese enter a valid e-mail</li>
                </ul>
            </div>
        `
        } else if (!username.value.match(letter) && password.value > 0) {
            mess.innerHTML +=
                `
                <div class='insert'>
                    <ul class ='errorr'>
                        <li>Please enter a valid e-mail</li>
                    </ul>
                </div>       
          `
        }
    }