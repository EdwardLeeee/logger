##  Logger Service
這是一個模擬python client打到server，並可以在資料庫新增data的一套程式

### client運行指引
#### Python
執行
``python client1.py``  

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
