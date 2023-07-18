from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config.from_object('config.Config')

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

from app import routes
