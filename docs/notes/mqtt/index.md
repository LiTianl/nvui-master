# 搭建MQTT服务器

## 准备
  * 购买云服务器或虚拟机（Linux）安装 CentOs 或 Ubuntu 。
  * 安装 `EMQX` 根据[官方](https://www.emqx.io/zh/downloads?os=CentOS) 提示进行下载并安装相应版本。
  * 启动EMQX后开放响应端口，访问后台。 
  * 下载官网[测试软件](https://www.emqx.com/zh/products/mqttx)进行检测。

## 安装EMQX
  使用管理员账号登陆Linux服务器，负责会出现权限问题。

  进入 usr/local/ 目录 并创建 emqx 文件夹。并在emqx文件夹下进行下载安装。
  这里以 CentOS7 为案例，更多相应的系统版本在[官网](https://www.emqx.io/zh/downloads)查看
  ```sh
  // 进入并创建文件夹
  cd /usr/local && mkdir emqx
  cd emqx
  // 下载对应版本的emqx
  wget https://www.emqx.com/zh/downloads/broker/5.0.11/emqx-5.0.11-el7-amd64.rpm
  // 安装emqx
  sudo yum install emqx-5.0.11-el7-amd64.rpm
  // 启动
  sudo systemctl start emqx
  ```
## 端口
对应端口号及其作用，开放端口后即可使用。
```
1883 MQTT/TCP 
8883 MQTT/TCP SSL 
8083 MQTT/WebSocket
8084 MQTT/WebSocket with SSL 
8080 HTTP API 
18083 EMQX Dashboard 管理控制台
```

## 测试
 * 下载官方提供的[测试软件](https://www.emqx.com/zh/products/mqttx)进行测试。
 * 通过代码进行对接，[案例](https://docs.emqx.com/zh/enterprise/v4.4/development/client.html)。