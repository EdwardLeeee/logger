##  Logger Service
這是一個模擬client發送請求到server，並可以在資料庫新增data的一套log程式

### client運行指引
需額外創建db_config.txt，在裡面輸入資訊後才能連接至自己的資料庫。以下是db_config.txt的範例檔
```
[DEFAULT]  
user=username
password=yourpassword  
host=localhost  
database=yourdb  
```

Python  
``python client.py``  

C 
``` 
gcc -o client2 client2.c -lcurl  
./client2
```

Java  
```
javac client3.java  
java client3  
```


