from flask_jwt_extended import jwt_required, create_access_token
from app import app

@app.route('/api/register', methods=['POST'])
def register():
    # Handle the registration logic here
    # Generate the JWT token and return it in the response
    access_token = create_access_token(identity='username')
    return {'access_token': access_token}, 200
