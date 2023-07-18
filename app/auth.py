from flask import Blueprint, render_template, redirect, url_for, flash
from app.forms import LoginForm, RegistrationForm

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash('Account created successfully. You can now log in.', 'success')
        return redirect(url_for('auth.login'))
    return render_template('register.html', title='Register', form=form)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Logged in successfully!', 'success')
        return redirect(url_for('main.home'))
    return render_template('login.html', title='Login', form=form)
