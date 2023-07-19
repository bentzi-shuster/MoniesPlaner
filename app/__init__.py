from flask import Flask, Blueprint, render_template
from flask_bootstrap import Bootstrap4
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
from app.authentication import authentication
from app.home import home

def create_app():
    """Construct the core application."""
    app = Flask(__name__)
    app.config.from_object('config.Config')
    load_dotenv()
    bootstrap = Bootstrap4(app)
    jwt = JWTManager(app)

    with app.app_context():
        app.register_blueprint(authentication)
        app.register_blueprint(home)

    return app
