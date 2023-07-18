from flask import Flask, jsonify, request
from flask_bootstrap import Bootstrap
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token, create_refresh_token,
    get_jwt_identity, set_access_cookies, set_refresh_cookies, unset_jwt_cookies
)
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.config.from_object('config.Config')

jwt = JWTManager(app)
bootstrap = Bootstrap(app)

# Import the auth blueprint after JWTManager is initialized
from app.auth import auth

# Register the blueprint with the Flask application
app.register_blueprint(auth, url_prefix='/auth')

from app import routes
