import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import StepOne from '../../src/views/user/StepOne.vue'

import Vue from 'vue'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import VueResource from 'vue-resource'
Vue.use(VueResource);

import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'


describe('StepOne.vue', () => {

    const url='http://120.79.245.126:8011';
    const $store = {
        state: {
            user : {
                tokenid : 'adminadmin'
            }
        }
    };
    let $route = {
        path: '/stepone',
        hash: '',
        params: { rId: '1523513842049' },
    };

    let $router = {
        name: 'Stepone',
        path: '/stepone',
        params: { rId: '1523513842049' },
        push(p){
            this.path=p.path;
            this.name=p.name;
            this.params=p.params;
        }
    };

    const localVue = createLocalVue();
    localVue.use(VueRouter);

    const wrapper = mount(StepOne, {
        mocks: {
            $route,
            $store,
            $router,
            localVue
        }
    });

    beforeEach(function () {
        $router = {
            name: 'Stepone',
            path: '/stepone',
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
        it('模块名字：StepOne', () => {
            expect(StepOne.name).to.eql('StepOne')
        });

        it('存在 mounted()', () => {
            expect(typeof StepOne.mounted).to.eql('function')
        });

        it('存在 toManagerStepTwo()', () => {
            expect(typeof StepOne.methods.checkToken).to.eql('function')
        });

        it('存在 Next()', () => {
            expect(typeof StepOne.methods.toStepTwo).to.eql('function')
        });

        it('存在 Next()', () => {
            expect(typeof StepOne.methods.toReport).to.eql('function')
        });

    });

    describe('单元测试',function(){
        describe('Test checkToken()',function(){

            describe('输入任意参数为空',function (){

                it('UT_FE_01_FUN_01_01_001', () => {
                    sessionStorage.tokenid='';
                    let $store = {
                        state: {
                            user : {
                                tokenid : ''
                            }
                        }
                    };
                    const wrapper = shallowMount(StepOne, {
                        mocks: {
                            $route,
                            $store,
                            $router,
                            localVue
                        }
                    });
                    wrapper.vm.checkToken();
                    expect(wrapper.vm.isLogin).to.eql(false);
                });
                it('UT_FE_01_FUN_01_01_002', () => {
                    let $store = {
                        state: {
                            user : {
                                tokenid : ''
                            }
                        }
                    };
                    const wrapper = shallowMount(StepOne, {
                        mocks: {
                            $route,
                            $store,
                            $router,
                            localVue
                        }
                    });
                    sessionStorage.tokenid='admin';
                    wrapper.vm.checkToken();
                    expect(wrapper.vm.isLogin).to.eql(false);
                });

                it('UT_FE_01_FUN_01_01_003', () => {
                    sessionStorage.tokenid='';
                    const wrapper = shallowMount(StepOne, {
                        mocks: {
                            $route,
                            $store,
                            $router,
                            localVue
                        }
                    });
                    wrapper.vm.checkToken();
                    expect(wrapper.vm.isLogin).to.eql(false);
                });

            });

            describe('输入任意参数非空',function (){
                it('UT_FE_01_FUN_01_02_001', () => {
                    const wrapper = shallowMount(StepOne, {
                        mocks: {
                            $route,
                            $store,
                            $router,
                            localVue
                        }
                    });
                    sessionStorage.tokenid='admin';
                    wrapper.vm.checkToken();
                    expect(wrapper.vm.isLogin).to.eql(true);
                });
            });
        });
        describe('Test Validate',function () {

            sessionStorage.tokenid='adminadmin';
            const wrapper = mount(StepOne, {
                mocks: {
                    $route,
                    $store,
                    $router,
                    localVue
                }
            });

            describe('输入参数为空',function () {
                it('UT_FE_01_FUN_02_01_001', () => {
                    wrapper.vm.form.projectName= '';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });
                it('UT_FE_01_FUN_02_01_002', () => {
                    wrapper.vm.form.projectName= '软件估算平台';
                    wrapper.vm.form.projectDescription='';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });

                it('UT_FE_01_FUN_02_01_003', () => {
                    wrapper.vm.form.projectName= '软件估算平台';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });

                it('UT_FE_01_FUN_02_01_004', () => {
                    wrapper.vm.form.projectName= '软件估算平台';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss qu';
                    wrapper.vm.form.projectContact='';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });
            });

            describe('输入参数不合法',function () {
                it('UT_FE_01_FUN_02_02_001', () => {
                    wrapper.vm.form.projectName= '这是个项目的名称刚刚好超过二十个字的项目';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });

                it('UT_FE_01_FUN_02_02_002', () => {
                    wrapper.vm.form.projectName= '软件估算平台';
                    wrapper.vm.form.projectDescription='四字介绍';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });
                it('UT_FE_01_FUN_02_02_003', () => {
                    wrapper.vm.form.projectName= '软件估算平台';
                    wrapper.vm.form.projectDescription='101字项目介绍：首先、介绍项目的背景。第二步、介绍项目平台' +
                        '及面向的用户群。第三步、介绍项目用到的技术尤其是技术的优势。第四步、可以介绍下自己的团队。第五' +
                        '步、介绍自己产品标语。第六步、介绍自己产品的亮点';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });

                it('UT_FE_01_FUN_02_02_004', () => {
                    wrapper.vm.form.projectName= '软件估算平台';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='我';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });
                it('UT_FE_01_FUN_02_02_005', () => {
                    wrapper.vm.form.projectName= '软件估算平台';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='NNicolas Cage、Mariah Carey、Jean Leo、黄强辉、章汉夫、范长江、林君雄';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });

                it('UT_FE_01_FUN_02_02_006', () => {
                    wrapper.vm.form.projectName= '软件估算平台';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss qu';
                    wrapper.vm.form.projectContact='1222';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });
                it('UT_FE_01_FUN_02_02_007', () => {
                    wrapper.vm.form.projectName= '软件估算平台';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss qu';
                    wrapper.vm.form.projectContact='tel:13948567701;qq:18394852954;mail:13948567701@163.com;';
                    wrapper.vm.form.estimationMethod='IFPUG';
                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(false);
                });
            });

            describe('输入参数合法',function () {
                it('UT_FE_01_FUN_02_03_001', () => {
                    wrapper.vm.form.projectName= '2000';
                    wrapper.vm.form.projectDescription='一个简单信息管理系统';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });

                it('UT_FE_01_FUN_02_03_002', () => {
                    wrapper.vm.form.projectName= 'aaa';
                    wrapper.vm.form.projectDescription='五个字介绍';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
                it('UT_FE_01_FUN_02_03_003', () => {
                    wrapper.vm.form.projectName= '一个项目';
                    wrapper.vm.form.projectDescription='一百字项目介绍：首先、介绍项目的背景。第二步、介绍项目平台' +
                        '及面向的用户群。第三步、介绍项目用到的技术尤其是技术的优势。第四步、可以介绍下自己的团队。第五' +
                        '步、介绍自己产品标语。第六步、介绍自己产品的亮点';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
                it('UT_FE_01_FUN_02_03_004', () => {
                    wrapper.vm.form.projectName= 'My-项目-1';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss zhang';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
                it('UT_FE_01_FUN_02_03_005', () => {
                    wrapper.vm.form.projectName= '1';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='成成';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
                it('UT_FE_01_FUN_02_03_006', () => {
                    wrapper.vm.form.projectName= 'a';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='Nicolas Cage、Mariah Carey、Jean Leo、黄强辉、章汉夫、范长江、林君雄';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
                it('UT_FE_01_FUN_02_03_007', () => {
                    wrapper.vm.form.projectName= '一';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='22@163.com';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
                it('UT_FE_01_FUN_02_03_008', () => {
                    wrapper.vm.form.projectName= '20000200002000020000';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='17072';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
                it('UT_FE_01_FUN_02_03_009', () => {
                    wrapper.vm.form.projectName= 'aaaaaaaaaaaaaaaaaaaa';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='tel:13948567701;qq:18394852954;mail:13948567701@163.com';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
                it('UT_FE_01_FUN_02_03_010', () => {
                    wrapper.vm.form.projectName= '这是一个项目的名称刚刚正好是二十个字项目';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
                it('UT_FE_01_FUN_02_03_011', () => {
                    wrapper.vm.form.projectName= '20000aaaaa这里有大概十个字项目';
                    wrapper.vm.form.projectDescription='a vue project';
                    wrapper.vm.form.projectLeader='miss chen';
                    wrapper.vm.form.projectContact='122@tongji.edu.cn';
                    wrapper.vm.form.estimationMethod='IFPUG';

                    wrapper.vm.toStepTwo('form');
                    expect(wrapper.vm.formValid).to.eql(true);
                });
            });
        });
        describe('Test toReport()',function () {

            sessionStorage.tokenid='adminadmin';
            const wrapper = mount(StepOne, {
                mocks: {
                    $route,
                    $store,
                    $router,
                    localVue
                }
            });
            it('all \'\'', () => {
                wrapper.vm.form.projectName= '';
                wrapper.vm.form.projectDescription='';
                wrapper.vm.form.projectLeader='';
                wrapper.vm.form.projectContact='';
                wrapper.vm.form.estimationMethod='';

                wrapper.vm.toReport('form');
                // expect(wrapper.vm.formValid).to.eql(true);
            });

            it('all valid', () => {
                wrapper.vm.form.projectName= 'a project';
                wrapper.vm.form.projectDescription='a vue project';
                wrapper.vm.form.projectLeader='miss chen';
                wrapper.vm.form.projectContact='122@tongji.edu.cn';
                wrapper.vm.form.estimationMethod='IFPUG';

                wrapper.vm.toReport('form');
                // expect(wrapper.vm.formValid).to.eql(true);
            });

        });
    });






    describe('集成测试',function () {

        it('API接口', () => {
            expect(wrapper.vm.form.projectName).to.equal('软件估算平台');
            expect(wrapper.vm.form.projectDescription).to.equal('这是一个用于辅助软件估算的平台。');
            expect(wrapper.vm.form.projectLeader).to.equal('Sixaps');
            expect(wrapper.vm.form.projectContact).to.equal('123456789');
            expect(wrapper.vm.form.estimationMethod).to.equal('IFPUG');
        });

    })


});


