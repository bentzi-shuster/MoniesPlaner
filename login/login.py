from flask import Flask, request, jsonify
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

@app.route('/login', methods=['POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # Handle the login logic here
        # Return a success response upon successful login
        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'errors': form.errors}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
