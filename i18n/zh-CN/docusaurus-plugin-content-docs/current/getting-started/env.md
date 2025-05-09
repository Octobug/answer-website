---
slug: /env
---

# 环境变量

## 安装

- `INSTALL_PORT`: 指定安装时启动的端口，默认为 `80`。
- `AUTO_INSTALL`: 如果设置为 `true`，将通过环境变量自动完成安装。

### 自动安装相关配置

- `DB_TYPE`: 数据库类型，支持 [`sqlite3`  `mysql`  `postgres`]
- `DB_USERNAME`: 数据库用户名
- `DB_PASSWORD`: 数据库密码
- `DB_HOST`: 数据库主机，例如 `127.0.0.1:3306`
- `DB_NAME`: 数据库名称
- `DB_FILE`: 数据库文件路径，仅适用于 sqlite3
- `LANGUAGE`: 语言设置，例如 `en-US`
- `SITE_NAME`: 网站名称，`Apache Answer`
- `SITE_URL`: 网站网址，`https://answer.apache.org`
- `CONTACT_EMAIL`: 联系邮箱
- `ADMIN_NAME`: 管理员姓名
- `ADMIN_PASSWORD`: 管理员密码
- `ADMIN_EMAIL`: 管理员邮箱
- `EXTERNAL_CONTENT_DISPLAY`: 内容包括图片、视频和从外部网站嵌入的媒体。 支持 [`always_display` `ask_before_display`] 

### 用于覆盖配置文件

- `SWAGGER_HOST` - swagger 显示的地址, 比如 `192.168.12.12` 或者 `answer.apache.org`
- `SWAGGER_ADDRESS_PORT` - swagger 显示的端口, 比如 `:3000`
- `SITE_ADDR` - 网站运行的地址, 比如 `0.0.0.0:3000`

## Log

- `LOG_LEVEL`: 日志级别，支持 [`DEBUG`  `INFO`  `WARN`  `ERROR`]
- `LOG_PATH`: 日志存储位置
