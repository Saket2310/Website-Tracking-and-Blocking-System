# routes/student_activity.py

from flask import Blueprint, request, jsonify
from db import get_connection
from utils.model_utils import classify_url
from datetime import datetime

student_activity_bp = Blueprint('student_activity', __name__)

@student_activity_bp.route('/log', methods=['POST'])
def log_activity():
    data = request.json
    student_id = data['student_id']
    url = data['url']
    visit_time = datetime.now()

    category = classify_url(url)

    conn = get_connection()
    cursor = conn.cursor()

    # Insert log
    cursor.execute("INSERT INTO logs (student_id, url, visit_time) VALUES (%s, %s, %s)",
                   (student_id, url, visit_time))

    # Insert alert if non-academic
    if category == "non-academic":
        message = f"Restricted website accessed: {url}"
        cursor.execute("INSERT INTO alerts (student_id, url, timestamp, message) VALUES (%s, %s, %s, %s)",
                       (student_id, url, visit_time, message))

    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"status": "logged", "category": category})
