import requests
import json
import random
from datetime import datetime
'''
# 日誌數據格式
log_entry = {
    "HOST_NAME": "Test1 Python",
    "HOST_IP": "172.17.34.31",
    "SYSTEM_TYPE": "EBTS",
    "LEVEL": "ERRO",
    "PROCESS_NAME": "Ex",
    "CONTENT": "This is a log entry content.",
    "LOG_TIME": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
}
'''
# 伺服器 URL
#url = "http://172.17.16.83:22/log"
url = "http://localhost:5000/log"


# 發送 POST 請求
for i in range(100):
    # 定義 log_entry
    log_entry = {
        "HOST_NAME": "Test1 Python",
        "HOST_IP": f"172.17.34.{i}",
        "SYSTEM_TYPE": "EBTS",
        "LEVEL": random.choice(["INFO", "WARN", "ERRO"]),  # 隨機選擇 LEVEL
        "PROCESS_NAME": "Ex",
        "CONTENT": "This is a log entry content.",
        "LOG_TIME": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

    # 發送 POST 請求
    response = requests.post(url, json=log_entry)


#response = requests.post(url, json=log_entry)
#print(f"message: {response.json().get('message'),'NULL'}")
if response.status_code == 201:
    print("Log entry sent successfully.")
else:
    print(f"Failed to send log entry. Status code: {response.status_code}")
    print(f"Error : {response.json().get('message')}")
