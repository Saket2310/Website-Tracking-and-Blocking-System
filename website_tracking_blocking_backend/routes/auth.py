# routes/auth.py

from flask import Blueprint, request, jsonify, session
from db import get_connection

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']
    role = data['role']

    table = 'students' if role == 'student' else 'admins'

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM {table} WHERE email=%s AND password=%s", (email, password))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if user:
        session['user_id'] = user['id']
        session['role'] = role
        return jsonify({"status": "success", "id": user['id']})
    else:
        return jsonify({"status": "fail"}), 401
