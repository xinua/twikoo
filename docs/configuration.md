# 配置

Twikoo 的配置保存在数据库中，目前修改配置需进入控制台。

::: warning 注意
请确保 config 表的权限**不是**“所有用户可读”，以保证 SMTP 密码等信息不会泄露。<br>
不过放心，默认权限是安全的，您不需要更改。
:::

## 通用

### SITE_NAME

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: 虹墨空间站

博客、站点名称。

### SITE_URL

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: https://www.imaegoo.com

博客、站点地址。

### BLOGGER_EMAIL

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: 12345@qq.com

博主的邮箱地址，用于邮件通知、博主标识。

## 反垃圾

### AKISMET_KEY

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: 8651783ed123

反垃圾评论 API key。

## 微信通知

### SC_SENDKEY

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: SCT1364TKdsiGjGvyAZNYDVnuHW12345

[Server酱](https://sc.ftqq.com/3.version)微信推送的 `SCKEY`

## 邮件通知

### SENDER_EMAIL

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: blog@imaegoo.com

邮件通知邮箱地址。

### SENDER_NAME

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: 虹墨空间站评论提醒

邮件通知标题。

### SMTP_SERVICE

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: qiye.aliyun

邮件通知邮箱服务商。<br>
完整列表请参考：[Supported services](https://nodemailer.com/smtp/well-known/#supported-services)

### SMTP_USER

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: blog@imaegoo.com

邮件通知邮箱用户名。

### SMTP_PASS

类型: `String`<br>
默认值: `null`<br>
必要性: `false`<br>
示例: password

邮件通知邮箱密码，QQ邮箱请填写授权码。
