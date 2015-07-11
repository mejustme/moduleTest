module.exports = function(grunt){

    //加载插件
    require('load-grunt-tasks')(grunt);

    //配置插件
    grunt.initConfig({
        cafemocha: {
            all: {
                options:{ui: 'tdd'},
                src: 'qa/test-*.js'
            }
        },
        exec: {
            ssh :{
                cmd: 'eval $(ssh-agent -s)\n ssh-add ~/.ssh/github'
            }
        }
    });

    // 注册集合任务
    grunt.registerTask('ssh' ,['exec:ssh'])
};