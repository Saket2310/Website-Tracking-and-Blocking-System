# routes/admin.py

from flask import Blueprint, jsonify
from db import get_connection

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/dashboard')
def dashboard():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    # Logs
    cursor.execute("""
        SELECT s.name, l.url, l.visit_time 
        FROM logs l
        JOIN students s ON l.student_id = s.id
        ORDER BY l.visit_time DESC
    """)
    logs = cursor.fetchall()

    # Alerts
    cursor.execute("""
        SELECT s.name, a.url, a.timestamp, a.message 
        FROM alerts a
        JOIN students s ON a.student_id = s.id
        ORDER BY a.timestamp DESC
    """)
    alerts = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify({"logs": logs, "alerts": alerts})
