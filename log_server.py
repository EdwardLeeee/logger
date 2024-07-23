from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# MySQL database configuration
db_config = {
    'user': 'intern2',
    'password': '0000',
    'host': '127.0.0.1', # localhost
    'database': 'logger', # logdb
}

def create_connection():
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            print("Connected to MySQL database")
            return connection
    except Error as e:
        print("Error while connecting to MySQL", e)
    return None

@app.route('/log', methods=['POST'])
def log():
    data = request.get_json()

    # Basic input validation
    required_fields = ['HOST_NAME', 'HOST_IP', 'SYSTEM_TYPE', 'LEVEL', 'PROCESS_NAME', 'CONTENT', 'LOG_TIME']
    for field in required_fields:
        if field not in data:
            return jsonify({'status': 'error', 'message': f'Missing field: {field}'}), 400

    try:
        connection = create_connection()
        if connection:
            cursor = connection.cursor()
            insert_query = """
            INSERT INTO log_data (HOST_NAME, HOST_IP, SYSTEM_TYPE, LEVEL, PROCESS_NAME, CONTENT, LOG_TIME)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_query, (
                data['HOST_NAME'], data['HOST_IP'], data['SYSTEM_TYPE'], data['LEVEL'],
                data['PROCESS_NAME'], data['CONTENT'], data['LOG_TIME']
            ))
            connection.commit()
            cursor.close()
            connection.close()
            return jsonify({'status': 'success', 'message': 'Log entry added successfully'}), 201
        else:
            return jsonify({'status': 'error', 'message': 'Database connection failed'}), 500
    except Error as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
