from app import app
from flask import render_template, redirect, url_for
from app.forms import LoginForm, RegistrationForm

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # Handle the login logic here
        return redirect(url_for('home'))
    return render_template('login.html', form=form)

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        # form.validate_on_submit() will check if the form has been submitted and if the data is valid. 
        # If the form has been submitted and the data is valid, it will return True. 
        # If the form has not been submitted, or the data is invalid, it will return False.
        # Handle the registration logic here
        return redirect(url_for('login'))
    return render_template('register.html', form=form)
