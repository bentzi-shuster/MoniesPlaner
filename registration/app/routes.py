from app import app
from app.forms import RegistrationForm

@app.route('/register', methods=['POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        # Handle the registration logic here
        # Return a success response upon successful registration
        return {'message': 'Registration successful'}, 200
    return {'errors': form.errors}, 400
