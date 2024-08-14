#!/bin/bash

# 定義日誌文件路徑
LOG_FILE="/home/oraclelee/Desktop/logger/log/my_app_monitor.log"
# 定義 POST 請求的 URL
URL="http://localhost:5000/log"

# 讀取每一行日誌
while IFS= read -r line
do
    # 使用 curl 發送 POST 請求
    curl -X POST "$URL" \
         -H "Content-Type: application/json" \
         -d "$line"
done < "$LOG_FILE"

