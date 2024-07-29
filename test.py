from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 啟用 CORS

@app.route('/log', methods=['POST'])
def receive_log():
    log_entry = request.json
    print("Received log entry:", log_entry)
   # return jsonify({"message": "Log entry received successfully",}), 201
    return jsonify({"message": f"{log_entry}",}), 201

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

