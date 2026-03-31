from flask import Flask, jsonify
from flask_cors import CORS
import subprocess
import os


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})  # Correct syntax

@app.route('/start-camera', methods=['GET'])
def start_camera():
    try:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        subprocess.Popen(["python", "safety_detection.py"], cwd=script_dir)
        return jsonify({"message": "Camera started successfully"})
    except Exception as e:
        import traceback
        return jsonify({"error": str(e), "details": traceback.format_exc()}), 500

 
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
