from flask import Blueprint, render_template, redirect, url_for, flash, jsonify
from app.forms import LoginForm, RegistrationForm
from passlib.hash import bcrypt
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt_identity, jwt_required
from datetime import timedelta

# temporary database
users = {}

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data
        
        if email in users:
            return jsonify({"msg": "Email already exists"}), 400

        # hash the password and store it in the database
        users[email] = bcrypt.hash(password)
        
        return jsonify({"msg": "User created successfully"}), 201
        # return redirect(url_for('auth.login'))
    return render_template('register.html', title='Register', form=form)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data

        # check if the user exists in the database and if the password matches
        if email in users and bcrypt.verify(password, users[email]):
            
            # create the access token
            access_token = create_access_token(identity=email, expires_delta=timedelta(minutes=30))
            # Set the access token in the cookies
            response = jsonify({'login': True})
            set_access_cookies(access_token) 
            return response, 200
            # return redirect(url_for('main.home'))
        else:
            print("Invalid email or password")
            response = jsonify({'login': False})
            return response, 401

    return render_template('login.html', title='Login', form=form)

@auth.route('/token/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user, expires_delta=timedelta(minutes=30))

    response = jsonify({'refresh': True})
    set_access_cookies(response, access_token)
    return response, 200