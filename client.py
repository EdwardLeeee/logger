import requests
import json
from datetime import datetime

# 日誌數據格式
log_entry = {
    "HOST_NAME": "Test1",
    "HOST_IP": "172.17.34.31",
    "SYSTEM_TYPE": "EBTS.P",
    "LEVEL": "INFO",
    #"PROCESS_NAME": "ExampleProcess",
    "PROCESS_NAME": "E",
    "CONTENT": "This is a log entry content.",
    "LOG_TIME": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
}
# 伺服器 URL
url = "http://localhost:5000/log"

# 發送 POST 請求
response = requests.post(url, json=log_entry)

print(f"message: {response.json().get('message')}")
if response.status_code == 201:
    print("Log entry sent successfully.")
else:
    print(f"Failed to send log entry. Status code: {response.status_code}")

