module.exports = function(grunt){

    //���ز��
    require('load-grunt-tasks')(grunt);

    //���ò��
    grunt.initConfig({
        cafemocha: {
            all: {
                options:{ui: 'tdd'},
                src: 'qa/test-*.js'
            }
        },
        exec: {
            ssh :{
                cmd: 'ssh-add ~/.ssh/github'  //eval $(ssh-agent -s) ����ִ��

            }
        }
    });

    // ע�Ἧ������
    grunt.registerTask('ssh' ,['exec:ssh'])
};