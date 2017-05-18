//Form validation
(function ( $ ) {
  $.fn.validateForm = function(){
    //Check for the form tag name
    if( $(this).get(0).tagName == 'FORM'){
        $(this).find("input").each(function(){
          $(this).parent().find('.errorMessage').remove();
          $(this).removeClass('error-input');
          //check for null values
          if($(this).attr('required')){
              if($(this).val() === '') {
                //Append the error message to the field
                $(this).parent().append('<p class="errorMessage" style="color:red;font-size: 10"> <strong>error</strong>: please enter value</p>');
                $(this).addClass('error-input');
                }
              else {
                $(this).parent().find('.errorMessage').remove();
                //email check
                if($(this).attr('type') == 'email'){
                  var emailEntered = $(this).val();
                  console.log(isValidEmailAddress(emailEntered));
                  if(!isValidEmailAddress(emailEntered))
                  {
                    $(this).parent().append('<p class="errorMessage" style="color:red;font-size: 10"> <strong style="font-weight:bold">error</strong>: please enter correct value</p>');
                    $(this).addClass('error-input')
                    console.log("invalid");
                  }else{
                    $(this).parent().find('.errorMessage').remove();
                    $(this).removeClass('error-input');
                    console.log("valid");
                  }
                }
                //password check
                else if ($(this).attr('type') == 'password') {
                  var pwdEntered = $(this).val();
                  console.log(isValidPassword(pwdEntered));
                  if(!isValidPassword(pwdEntered)){
                    $(this).parent().append('<p class="errorMessage" style="color:red;font-size: 10"> <strong>error</strong>: please enter password value</p>');
                    $(this).addClass('error-input');
                    console.log("invalid");
                  }else{
                    $(this).parent().find('.errorMessage').remove();
                    $(this).removeClass('error-input');
                    console.log("valid");
                  }
                }
              }
          }
        });
    }
    else{
      alert('Plugin can only be applied on "FORM" tag kindly check');
    }
  }
})( jQuery );

/**
 * To check if the email address entered is valid or not
 * @method isValidEmailAddress
 * @param  {[String]}            emailAddress [description]
 * @return {Boolean}                        [description]
 */
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};


/**
 *  To check a password between 6 to 20 characters which,
 *  contain at least one numeric digit, one uppercase,
 *  and one lowercase letter
 * @method isValidPassword
 * @param  {[String]}        password [description]
 * @return {Boolean}                [description]
 */
function isValidPassword(password) {
  var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return pattern.test(password)
};
