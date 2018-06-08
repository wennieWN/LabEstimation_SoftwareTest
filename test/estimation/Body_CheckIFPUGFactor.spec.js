import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Body_CheckIFPUGFactor from '../../src/components/estimation/Body_CheckIFPUGFactor.vue'

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
import VueResource from 'vue-resource'
Vue.use(VueResource);

describe('Body_CheckIFPUGFactor.vue', function (){

    const url='http://120.79.245.126:8011';
    const $store = {
        state: {
            user : {
                tokenid : 'adminadmin'
            }
        }
    };
    let $route = {
        path: '/managersteptwo',
        hash: '',
        params: { rId: '1523513842049' },
    };

    let $router = {
        name: 'ManagerStepTwo',
        path: '/managersteptwo',
        params: { rId: '1523513842049' },
        push(p){
            this.path=p.path;
            this.name=p.name;
            this.params=p.params;
        }
    };

    const wrapper = mount(Body_CheckIFPUGFactor, {
        mocks: {
            $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
            $store,
            $router
        }
    });

    beforeEach(function () {
        $router = {
            name: 'ManagerStepTwo',
            path: '/managersteptwo',
            params: { rId: '1523513842049' },
            push(p){
                this.path=p.path;
                this.name=p.name;
                this.params=p.params;
            }
        };
    });

    afterEach(function () {
        wrapper.destroy();
    });

    describe('测试静态组件',function(){
        it('模块名字：Body_CheckIFPUGFactor', () => {
            expect(Body_CheckIFPUGFactor.name).to.eql('Body_CheckIFPUGFactor')
        });

        it('存在 mounted()', () => {
            expect(typeof Body_CheckIFPUGFactor.mounted).to.eql('function')
        });

        it('存在 init()', () => {
            expect(typeof Body_CheckIFPUGFactor.methods.init).to.eql('function')
        });

        it('存在 toMVER()', () => {
            expect(typeof Body_CheckIFPUGFactor.methods.toMVER).to.eql('function')
        });

        it('存在 toManagerStepThree()', () => {
            expect(typeof Body_CheckIFPUGFactor.methods.toManagerStepThree).to.eql('function')
        });

        it('存在 Submit()', () => {
            expect(typeof Body_CheckIFPUGFactor.methods.Submit).to.eql('function')
        });

    });

    describe('测试函数', function(){

        describe("Submit()函数",function () {

            it('未填写修改状态，当前路径不会改变', function () {
                const wrapper = mount(Body_CheckIFPUGFactor, {
                    mocks: {
                        $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                        $store,
                        $router
                    }
                });
                wrapper.vm.form.state='';
                wrapper.vm.Submit();
                expect(wrapper.vm.$router.path).to.equal('/managersteptwo');
            });

            it('填写修改状态，当前路径改变', function () {
                const wrapper = mount(Body_CheckIFPUGFactor, {
                    mocks: {
                        $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                        $store,
                        $router
                    }
                });
                wrapper.vm.form.state='完成';
                wrapper.vm.Submit();
                expect(wrapper.vm.$router.path).to.equal('/mver');
            })
        });

        describe("toManagerStepThree()函数",function () {

            it('前往编辑界面，当前路径改变', function () {
                const wrapper = mount(Body_CheckIFPUGFactor, {
                    mocks: {
                        $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                        $store,
                        $router
                    }
                });
                wrapper.vm.toManagerStepThree();
                expect(wrapper.vm.$router.name).to.equal('ManagerStepThree');
                expect(wrapper.vm.$router.params.rId).to.equal($route.params.rId);
            });
        })

    });

    describe('测试按钮', function(){

        it('点击编辑按钮，跳转页面', function () {
            const wrapper = mount(Body_CheckIFPUGFactor, {
                mocks: {
                    $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                    $store,
                    $router
                }
            });
            //编辑按钮
            const btn = wrapper.findAll('.el-button').at(0);
            btn.trigger('click');
            expect(wrapper.vm.$router.name).to.equal('ManagerStepThree');
        });

        it('点击提交按钮，出现框', function () {
            const wrapper = mount(Body_CheckIFPUGFactor, {
                mocks: {
                    $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                    $store,
                    $router
                }
            });
            //提交按钮
            const btn = wrapper.findAll('.el-button').at(4);
            btn.trigger('click');
            expect(wrapper.vm.formDialogVisible).to.equal(true);
        });

        describe("点击提交框中的确定按钮",function () {

            it('未填写修改状态，当前路径不会改变', function () {
                const wrapper = mount(Body_CheckIFPUGFactor, {
                    mocks: {
                        $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                        $store,
                        $router
                    }
                });
                wrapper.vm.form.state='';
                //确定按钮
                const btn = wrapper.findAll('.el-button').at(2);
                expect(btn.text()).to.contain('确 定');
                btn.trigger('click');
                expect(wrapper.vm.$router.path).to.equal('/managersteptwo');
            });

            it('填写修改状态，当前路径改变', function () {
                const wrapper = mount(Body_CheckIFPUGFactor, {
                    mocks: {
                        $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                        $store,
                        $router
                    }
                });
                wrapper.vm.form.state='完成';
                //确定按钮
                const btn = wrapper.findAll('.el-button').at(2);
                expect(btn.text()).to.contain('确 定');
                btn.trigger('click');
                expect(wrapper.vm.$router.path).to.equal('/mver');
            })
        });

        it('点击提交框中的取消按钮，框消失', function () {
            const wrapper = mount(Body_CheckIFPUGFactor, {
                mocks: {
                    $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                    $store,
                    $router
                }
            });
            //取消按钮
            const btn = wrapper.findAll('.el-button').at(1);
            btn.trigger('click');
            expect(wrapper.vm.formDialogVisible).to.equal(false);
        });

        describe("点击返回按钮",function () {

            it('点击返回按钮，弹出消息窗口', function () {
                const wrapper = mount(Body_CheckIFPUGFactor, {
                    mocks: {
                        $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                        $store,
                        $router
                    }
                });
                //返回按钮
                const btn = wrapper.findAll('.el-button').at(3);
                expect(btn.text()).to.contain('返回');
                btn.trigger('click');
                expect(document.querySelector('.el-message-box__wrapper')).to.exist;
            });

            describe('消息窗口的按钮', function () {
                const wrapper = mount(Body_CheckIFPUGFactor, {
                    mocks: {
                        $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                        $store,
                        $router
                    }
                });
                //返回按钮
                const btn = wrapper.findAll('.el-button').at(3);
                expect(btn.text()).to.contain('返回');
                btn.trigger('click');

                it('存在确定按钮', function () {

                    //确定按钮
                    return Vue.nextTick()
                        .then(function () {
                            let btn=document.querySelector('.el-message-box__wrapper').querySelectorAll('.el-button')[1];
                            expect(btn).to.exist;
                            expect(btn.textContent).to.contain('确定')
                            btn.click();
                        });
                });

                it('点击确定按钮，改变路径', function () {
                    return Vue.nextTick()
                        .then(function () {
                            expect(wrapper.vm.$router.path).to.equal('/mver');
                        });
                });

                it('存在取消按钮', function () {

                    //取消按钮
                    return Vue.nextTick()
                        .then(function () {
                            let btn=document.querySelector('.el-message-box__wrapper').querySelectorAll('.el-button')[0];
                            expect(btn).to.exist;
                            expect(btn.textContent).to.contain('取消');
                            btn.click();
                        });
                });
            });
        });
    });
    describe('数据初始化', function(){

        it('数据初始化,默认值正确', function () {
            expect(wrapper.vm.editDialogVisible).to.equal(false);
            expect(wrapper.vm.formDialogVisible).to.equal(false);
            expect(wrapper.vm.form.state).to.equal('');
            expect(wrapper.vm.form.desc).to.equal('');
            expect(wrapper.vm.formLabelWidth).to.equal('120px');
            expect(wrapper.vm.url).to.equal(url+ '/estimation');

        });

        it('从后端读取数据，成功', function (){
            expect(wrapper.vm.displays[0].items[0].value).to.equal('New Development');
            expect(wrapper.vm.displays[0].items[1].value).to.equal('Normal');
            expect(wrapper.vm.displays[1].items[0].value).to.equal('Personal computer');
            expect(wrapper.vm.displays[1].items[1].value).to.equal('Normal');
            expect(wrapper.vm.displays[2].items[0].value).to.equal('3GL');
            expect(wrapper.vm.displays[2].items[1].value).to.equal('Normal');
            expect(wrapper.vm.displays[3].items[0].value).to.equal('Yes');
            expect(wrapper.vm.displays[3].items[1].value).to.equal('Normal');
            expect(wrapper.vm.displays[4].items[0].value).to.equal('8');
            expect(wrapper.vm.displays[4].items[1].value).to.equal('10000');
        });

    });
});

