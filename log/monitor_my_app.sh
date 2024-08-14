#!/bin/bash

# 定義應用程式的名稱（這裡用 Python 腳本名稱）
APP_NAME="log_server.py"
APP_PATH="/home/oraclelee/Desktop/logger/"

# 定義檢查間隔（秒）
CHECK_INTERVAL=1

# 定義日誌文件
LOG_FILE="/home/oraclelee/Desktop/logger/log/my_app_monitor.log"

# 獲取主機名稱和 IP 地址
HOST_NAME=$(hostname)
HOST_IP=$(hostname -I | awk '{print $1}')

# 自動檢測系統類型
OS_TYPE=$(uname -s)
case "$OS_TYPE" in
    Linux)
        SYSTEM_TYPE="Linux"
        ;;
    Darwin)
        SYSTEM_TYPE="MacOS"
        ;;
    CYGWIN*|MINGW32*|MSYS*|MINGW*)
        SYSTEM_TYPE="Windows"
        ;;
    *)
        SYSTEM_TYPE="Unknown"
        ;;
esac

# 定義其他信息
PROCESS_NAME="log_server.py"

# 確保日誌文件存在
touch "$LOG_FILE"

# 監控循環
while true; do
    # 獲取當前日期和時間，格式為 yyyy-mm-dd hh:mm:ss
    CURRENT_TIME=$(date +"%Y-%m-%d %H:%M:%S")
    LOG_TIME=$(date +"%Y%m%d%H%M%S")

    # 檢查應用程式是否正在運行
    if pgrep -f "$APP_NAME" > /dev/null
    then
        LEVEL="INFO"
        CONTENT="$APP_NAME is running"
        MESSAGE="{\"HOST_NAME\": \"$HOST_NAME\", \"HOST_IP\": \"$HOST_IP\", \"SYSTEM_TYPE\": \"$SYSTEM_TYPE\", \"LEVEL\": \"$LEVEL\", \"PROCESS_NAME\": \"$PROCESS_NAME\", \"CONTENT\": \"$CONTENT\", \"LOG_TIME\": \"$LOG_TIME\"}"
        echo "$MESSAGE" | tee -a "$LOG_FILE"
    else
        LEVEL=" WARN"
        CONTENT="$APP_NAME is not running"
        MESSAGE="{\"HOST_NAME\": \"$HOST_NAME\", \"HOST_IP\": \"$HOST_IP\", \"SYSTEM_TYPE\": \"$SYSTEM_TYPE\", \"LEVEL\": \"$LEVEL\", \"PROCESS_NAME\": \"$PROCESS_NAME\", \"CONTENT\": \"$CONTENT\", \"LOG_TIME\": \"$LOG_TIME\"}"
        echo "$MESSAGE" | tee -a "$LOG_FILE"

        # 重啟應用程式
        #CONTENT="Restarting $APP_NAME"
        #RESTART_MESSAGE="{\"HOST_NAME\": \"$HOST_NAME\", \"HOST_IP\": \"$HOST_IP\", \"SYSTEM_TYPE\": \"$SYSTEM_TYPE\", \"LEVEL\": \"$LEVEL\", \"PROCESS_NAME\": \"$PROCESS_NAME\", \"CONTENT\": \"$CONTENT\", \"LOG_TIME\": \"$LOG_TIME\"}"
        #echo "$RESTART_MESSAGE" | tee -a "$LOG_FILE"
        #python3 "$APP_PATH$APP_NAME" &

    fi

    # 等待指定的時間間隔
    sleep $CHECK_INTERVAL
done
