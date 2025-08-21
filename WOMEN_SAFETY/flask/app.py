from flask import Flask, jsonify
from flask_cors import CORS
import subprocess


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5174"}})  # Correct syntax

@app.route('/start-camera', methods=['GET'])
def start_camera():
    try:
        # Try with 'python' instead of 'python3'
        subprocess.run(["python", "safety_detection.py"], check=True)
        return jsonify({"message": "Camera started successfully"})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": str(e)}), 500

 
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
