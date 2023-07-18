from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['JWT_SECRET_KEY'] = 'your-jwt-secret-key'
jwt = JWTManager(app)
CORS(app)

from app import routes