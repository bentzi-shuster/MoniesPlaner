from app import app, jwt
from flask import render_template, redirect, url_for, jsonify, request
from app.forms import LoginForm, RegistrationForm
from app.jwt import generate_token, verify_token

# ...

@app.route('/api/register', methods=['POST'])
def api_register():
    form = RegistrationForm()
    if form.validate_on_submit():
        # Handle the registration logic here
        # Return the token upon successful registration
        token = generate_token(form.email.data)
        return jsonify({'token': token}), 201
    return jsonify({'errors': form.errors}), 400

@app.route('/api/login', methods=['POST'])
def api_login():
    form = LoginForm()
    if form.validate_on_submit():
        # Handle the login logic here
        # Return the token upon successful login
        token = generate_token(form.email.data)
        return jsonify({'token': token}), 200
    return jsonify({'errors': form.errors}), 400

@app.route('/api/user', methods=['GET'])
@jwt.required()
def api_user():
    token = request.headers.get('Authorization').split()[1]
    email = verify_token(token)
    if email:
        return jsonify({'email': email}), 200
    return jsonify({'message': 'Invalid token'}), 401
