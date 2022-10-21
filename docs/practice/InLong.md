---
sidebar_position: 2
---

# Apache InLong

> [Apache InLong（应龙）](https://inlong.apache.org/) 是一个一站式海量数据集成框架，提供自动、安全、可靠和高性能的数据传输能力，同时支持批和流，方便业务构建基于流式的数据分析、建模和应用。

**通过 Docker Compose 部署 InLong：需提前安装Docker与Flink**

## 在 Windows 下部署

### 安装Docker

```
https://docs.docker.com/engine/install/
```

#### 可能存在的问题

- 在确认Hyper-V功能与CPU虚拟化均已开启的情况下，Docker启动时仍报错，信息如下

    ```
    Check that hardware-assisted virtualization (either Intel VMX or AMD SVM) and Data Execution Prevention (sometimes labeled XD or Execute Disable or NX) are enabled in your BIOS.

    Check your bootloader is configured to launch Hyper-V.

    See https://docs.docker.com/desktop/windows/troubleshoot/#virtualization
    ```
    
    **解决建议**
    
    1. 在确认Hyper-V功能与CPU虚拟化均已开启的情况下， 在管理员模式下的命令提示符中输入
    ```
    bcdedit /set hypervisorlaunchtype Auto
    ```
    
    2. 重启电脑 

 

### 安装Flink

```
https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/
```

#### 可能存在的问题
- 如何在JAVA1.8与其他的JAVA版本中自由切换

  **解决建议**
  ```
  https://blog.csdn.net/YaoChung/article/details/126193635
  ```

- 在确认Java版本为JDK8/11后，仍无法正常运行start-cluster.sh文件

  **解决建议**
  ```
  https://blog.csdn.net/guandongsheng110/article/details/118578189
  ```



### 安装 InLong

```
https://inlong.apache.org/zh-CN/docs/introduction
```

#### 操作步骤（仅供参考）

1. 下载&解压

   ![](/img/practice/Inlong/0.png)

2. 开启Docker

   ![](/img/practice/Inlong/Docker.png)

3. 开启Flink

   ![](/img/practice/Inlong/Flink.png)

4. 部署

   ![](/img/practice/Inlong/1.png)

5. 使用

   ![](/img/practice/Inlong/2.png)

   ![](/img/practice/Inlong/3.png)


## 在 Ubuntu 下部署

### 安装 Docker

```
安装步骤：https://docs.docker.com/engine/install/ubuntu/

参考1: https://blog.csdn.net/u012590718/article/details/125632482
参考2: https://blog.csdn.net/u012590718/article/details/125702606
```

#### 可能存在的问题

- 下载速度过慢
  
  **解决建议**

  ```
  https://www.cnblogs.com/unixcs/p/13114531.html
  ```



### 安装 Flink

1. JDK 安装（以JDK8为例）

```
sudo apt install openjdk-8-jdk
```

2. Flink 安装

```
https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/
```


### 安装 InLong

```
https://inlong.apache.org/zh-CN/docs/introduction
```


#### 操作步骤（仅供参考）

1. 下载&解压

   ![](/img/practice/Inlong/0.png)

2. 开启Docker

   ```
   service docker start
   ```

3. 开启Flink

   ```
   ./start-cluster.sh
   ```


4. 部署

   ![](/img/practice/Inlong/1.png)


5. 使用

   ![](/img/practice/Inlong/2.png)

   ![](/img/practice/Inlong/3.png)