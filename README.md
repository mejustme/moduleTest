# 单元测试

###全局 mocha
- 执行 mocha ,  默认执行 test下面的js文件
- mocha --reporter spec server-test/*.js   // 执行一定路径中的文件

###grunt-cafe-mocha 项目中
grunt cafemocha 执行配置文件中目录中的js文件， // 打印的错误太多，不知道怎么调

###grunt-exec
执行 shell命令，可惜 不能执行 eval $(ssh-agent -s)  安全？

###load-grunt-tasks
加载插件更方便