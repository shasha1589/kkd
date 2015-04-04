"use strict";
$(function() {
	var overlay = $([
			'<!--LOGIN REGISTER RESET FORMS-->',
			'<section class="form-box-overlay"></section>'
			].join("\n")),
		loginForm = $([
			'<!--LOGIN FORM-->',
			'<article class="form-box login">',
				'<a href="#" class="form-close">',
					'<img src="images/form-close.png" alt="close">',
				'</a>',
				'<img src="images/form-logo.png" alt="logo">',
				'<form id="login-form">',
					'<!--ERROR MSGS-->',
					'<label for="login_user" class="error">Wrong username or password...</label>',
					'<!--/ERROR MSGS-->',
					'<input type="text" name="login_user" id="login_user" placeholder="Username...">',
					'<input type="password" name="login_pwd" id="login_pwd" placeholder="Password...">',
					'<input type="checkbox" name="login_remember" id="login_remember">',
					'<label for="login_remember">Remember me</label>',
				'</form>',
				'<a href="#" class="popup reset">Did you forget your password?</a>',
				'<input type="submit" form="login-form" value="Login">',
				'<p>You don’t have a Kha ke Dekho account?<br><a href="#" class="popup register">Register now!</a></p>',
			'</article>',
			'<!--/LOGIN FORM-->'
			].join("\n")),
		registerForm = $([
			'<!--REGISTER FORM-->',
			'<article class="form-box register">',
				'<a href="#" class="form-close">',
					'<img src="images/form-close.png" alt="close">',
				'</a><img src="images/form-logo.png" alt="logo">',
				'<form id="register-form">',
					'<!--ERROR MSGS-->',
					'<label for="register_user" class="error">That username is already in use...</label>',
					'<!--/ERROR MSGS-->',
					'<!--OK MSGS-->',
					'<label for="register_email" class="ok">Check your email to confirm your account</label>',
					'<!--/OK MSGS-->',
					'<input type="text" name="register_email" id="register_email" placeholder="Email...">',
					'<input type="text" name="register_user" id="register_user" placeholder="Username...">',
					'<input type="password" name="register_pwd" id="register_pwd" placeholder="Password...">',
					'<input type="password" name="register_repeat_pwd" id="register_pwd" placeholder="Retype Password...">',
					'<input type="checkbox" name="register_terms" id="register_terms">',
					'<label for="register_terms">I agree with the</label>',
				'</form>',
				'<a href="#">Terms of Service</a>',
				'<input type="submit" form="register-form" value="Register Now">',
				'<p>Already have a Kha ke Dekho account?<br><a href="#" class="popup login">Login now!</a></p>',
			'</article>',
			'<!--/REGISTER FORM-->'
			].join("\n")),
		resetForm = $([
			'<!--RESET FORM-->',
			'<article class="form-box reset">',
				'<a href="#" class="form-close">',
					'<img src="images/form-close.png" alt="close">',
				'</a>',
				'<img src="images/form-logo.png" alt="logo">',
				'<form id="reset-form">',
					'<!--OK MSGS-->',
					'<label for="reset_email" class="ok">The new password was sent to your email</label>',
					'<!--/OK MSGS-->',
					'<input type="text" name="reset_email" id="reset_email" placeholder="Email...">',
					'<input type="checkbox" name="reset_generate" id="reset_generate">',
					'<label for="reset_generate">Generate new password</label>',
				'</form>',
				'<input type="submit" form="reset-form" value="Reset Password">',
			'</article>',
			'<!--/RESET FORM-->',
			'<!--/LOGIN REGISTER RESET FORMS-->'
			].join("\n"));

	// insert forms
	$('body')
		.append(overlay)
		.append(loginForm)
		.append(registerForm)
		.append(resetForm);

	// vertically center form boxes
	$('.form-box').each(function() {
		var form = $(this),
			formBoxHeight = form.outerHeight();
		form.css('marginTop', -formBoxHeight/2);
	});

	// popup open
	$('.popup').click(function(e) {
		e.preventDefault();
		var button = $(this);

		// show form overlay
		$('.form-box-overlay').fadeIn(600);
		
		// hide previous form
		button.parents('.form-box').fadeOut(600);

		// show login form and focus
		if(button.hasClass('login')) {
			$('.form-box.login').fadeIn(600);
			$('#login_user').focus();
		}
		// show register form and focus
		if(button.hasClass('register')) {
			$('.form-box.register').fadeIn(600);
			$('#register_email').focus();
		}
		// show reset form and focus
		if(button.hasClass('reset')) {
			$('.form-box.reset').fadeIn(600);
			$('#reset_email').focus();
		}

		// disable scroll
		$('body').addClass('noscroll');
	});

	// popup close
	$('.form-close').click(function(e) {
		e.preventDefault();
		// close active form
		$(this).parent().fadeOut(600);

		// close form overlay
		$('.form-box-overlay').fadeOut(600);
		
		// enable scroll
		$('body').removeClass('noscroll');
	});
});