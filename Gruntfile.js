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
                cmd: 'eval $(ssh-agent -s)\n ssh-add ~/.ssh/github'
            }
        }
    });

    // ע�Ἧ������
    grunt.registerTask('ssh' ,['exec:ssh'])
};