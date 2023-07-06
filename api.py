from flask import Flask, render_template, request, jsonify
from make_image import make_image
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import insert, select

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db = SQLAlchemy()
db.init_app(app)


class Prompt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    prompt = db.Column(db.String(1000), nullable=False)
    image_url = db.Column(db.String(1000), nullable=False)


with app.app_context():
    db.create_all()


@app.route('/')
def hello_world():
    return 'Hello, World!'
# venv/Scripts/activate
# flask --app api run

@app.route('/test/')
@app.route('/test/<name>')
def hello(name=None):
    return render_template('test.html', name=name)

@app.route('/view/')
@app.route('/view/<name>')
def view(name=None):
    return render_template('view.html', name=name)


@app.route('/image/', methods=['POST'])
@app.route('/image/<name>', methods=['POST'])
def image(name=None):
    json = request.get_json()
    prompt = json['prompt']
    image_url  = make_image(prompt)
    db.session.execute(insert(Prompt), {'prompt': prompt, 'image_url': image_url})
    db.session.commit()
    return jsonify(image_url=image_url)

@app.route('/prompthistory/', methods=['GET'])
def prompthistory():
    prompts = db.session.execute(select(Prompt)).scalars().all()
    promptjson = [{'prompt': prompt.prompt, 'image_url': prompt.image_url} for prompt in prompts]
    return jsonify(prompts=promptjson)