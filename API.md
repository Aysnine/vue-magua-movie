# API 后端接口规范

## 功能接口

### 【PUBLIC】会员登陆

#### POST /login/member

Body

- account
- password

#### Response

##### 成功

```json
{
    "code": 0,
    "role": "ROOT_MEMBER",
    "msg": "登录成功"
}
```

##### 失败

```json
{
    "code": 1,
    "msg": "<失败原因>"
}
```

### 【PUBLIC】管理员登陆

#### POST /login/admin

Body

- account
- password

#### Response

##### 成功

```json
{
    "code": 0,
    "role": "ROOT_ADMIN",
    "msg": "登录成功"
}
```

##### 失败

```json
{
    "code": 1,
    "msg": "<失败原因>"
}
```

### 【PUBLIC】会员注册

#### POST /regist/member

Body

- account：账户名
- nickname：昵称
- password：密码

#### Response

##### 成功

```json
{
    "code": 0,
    "msg": "注册成功，请前往登陆"
}
```

##### 失败

```json
{
    "code": 1,
    "msg": "<失败原因>"
}
```

### 【ADMIN、MEMBER】获取账号信息

#### GET /profile

#### Response

##### 账户信息（管理员）

```json
{
    "code": 0,
    "msg": "欢迎回来",
    "data": {
    	"role": "ROOT_ADMIN",
        "account": "xxx",
        "nickname": "管理员A"
	}
}
```

##### 账户信息（会员）

```json
{
    "code": 0,
    "msg": "欢迎回来",
    "data": {
    	"role": "ROOT_MEMBER",
        "account": "xxx",
        "nickname": "会员A"
	}
}
```

##### 失败

``` json
{
    "code": 1,
    "msg": "<失败原因>"
}
```

### 【PUBLIC】获取电影列表信息

#### GET /film/fetchList

#### Response

##### 成功

```json
{
    "code": 0,
    "msg": "获取成功",
    "data": [
        "..."
    ]
}
```

##### 失败

```json
{
    "code": 1,
    "msg": "<失败原因>"
}
```

### 【MEMBER】发表影评

#### POST /comment/addComment

Body

- film_id：电影ID
- content：评论内容
- rate：打分

#### Response

##### 成功

```json
{
    "code": 0,
    "msg": "评论发表成功",
    "data": {
    	"id": "xxx",
        "content": "xxx",
        "rate": 3
    }
}
```

##### 失败

```json
{
    "code": 1,
    "msg": "<失败原因>"
}
```