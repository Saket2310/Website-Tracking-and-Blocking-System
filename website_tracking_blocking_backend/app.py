# app.py

from flask import Flask
from config import Config
from routes.auth import auth_bp
from routes.student_activity import student_activity_bp
from routes.admin import admin_bp

app = Flask(__name__)
app.secret_key = Config.SECRET_KEY

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(student_activity_bp, url_prefix='/student')
app.register_blueprint(admin_bp, url_prefix='/admin')

if __name__ == '__main__':
    app.run(debug=True)
