##  Logger Service
這是一個模擬client發送請求到server，並可以在資料庫新增data的一套log程式

### client運行指引
#### Database
需額外創建db_config.txt，在裡面輸入資訊後才能連接至自己的資料庫。以下是db_config.txt的範例檔
```
[DEFAULT]  
user=username
password=yourpassword  
host=localhost  
database=yourdb  
```
在自行指定的Database內建立table，並將此table命名為'log_data'.

#### Python
執行
``python client.py``  

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

