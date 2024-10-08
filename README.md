##  Logger Service
這是一套可模擬client發送請求到server，並可以在資料庫新增data的一套log程式。
還有附上Web UI，提供使用者查詢特定條件的log

### Client 運行指引

#### Database
需額外創建db_config.txt，在裡面輸入資訊後才能連接至自己的資料庫(預設是MySQL)。
以下是db_config.txt的範例檔：
```
[DEFAULT]
user=username
password=yourpassword
host=localhost
database=yourdb
```
> 需在自行指定的Database內建立table，並將此table命名為'log_data'.

#### Python
執行
```
python client.py
```


#### C

安裝環境
```
sudo dnf install libcurl-devel #安裝所需函式庫
```
執行
```
gcc -o client2 client2.c -lcurl
./client2
```

#### Java
安裝編譯器
```
dnf install java-1.8.0-openjdk-devel
```
執行
```
javac client3.java
java client3
```

### 前端查詢介面
打開瀏覽器輸入`localhost:5000`可看到查詢log的輸入欄位。
透過輸入關鍵字進行搜尋，如下圖。若未輸入任何欄位就按下Search，則會返回所有logs.

![image](https://github.com/user-attachments/assets/9ad03580-7d90-483c-bd34-ddded169aec4)

![image](https://github.com/user-attachments/assets/fcc4a9e8-eabc-48d0-bbf4-5c387773d7d3)


