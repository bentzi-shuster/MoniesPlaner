from flask import Blueprint, render_template, redirect, url_for, jsonify, make_response
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from passlib.hash import bcrypt
from app.authentication.forms import LoginForm, RegistrationForm
from datetime import timedelta

# Temporary database
users = {}

authentication = Blueprint('authentication', __name__,
                           template_folder='templates')


@authentication.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data

        if email in users:
            return jsonify({"msg": "Email already exists"}), 400

        # Hash the password and store it in the database
        users[email] = bcrypt.hash(password)

        # return jsonify({"msg": "User created successfully"}), 201
        return redirect(url_for('authentication.login'))
    return render_template('register.html', form=form)


@authentication.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data

        # Check if the user exists in the database and if the password matches
        if email in users and bcrypt.verify(password, users[email]):
            # Create the access token
            access_token = create_access_token(
                identity=email, expires_delta=timedelta(minutes=30))
            response = jsonify({'login': True})
            # Set the access token in the cookies
            response.set_cookie('access_token', access_token)
            return response, 200
        else:
            print("Invalid email or password")
            response = jsonify({'login': False})
            return response, 401

    return render_template('login.html', form=form)


@authentication.route('/token/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    access_token = create_access_token(
        identity=current_user, expires_delta=timedelta(minutes=30))

    response = make_response(jsonify({'refresh': True}))
    # Set the access token in the cookies
    response.set_cookie('access_token', access_token)
    return response, 200
