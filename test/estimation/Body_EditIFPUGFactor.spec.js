import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Body_EditIFPUGFactor from '../../src/components/estimation/Body_EditIFPUGFactor.vue'

import Vue from 'vue'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import VueResource from 'vue-resource'
Vue.use(VueResource);

describe('Body_EditIFPUGFactor.vue', () => {

    const url='http://120.79.245.126:8011';
    const $store = {
        state: {
            user : {
                tokenid : 'adminadmin'
            }
        }
    };
    let $route = {
        path: '/managerstepthree',
        hash: '',
        params: { rId: '1523513842049' },
    };

    let $router = {
        name: 'ManagerStepThree',
        path: '/managerstepthree',
        params: { rId: '1523513842049' },
        push(p){
            this.path=p.path;
            this.name=p.name;
            this.params=p.params;
        }
    };

    const wrapper = mount(Body_EditIFPUGFactor, {
        mocks: {
            $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
            $store,
            $router
        }
    });

    beforeEach(function () {
        $router = {
            name: 'ManagerStepThree',
            path: '/managerstepthree',
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
        it('模块名字：Body_EditIFPUGFactor', () => {
            expect(Body_EditIFPUGFactor.name).to.eql('Body_EditIFPUGFactor')
        });

        it('存在 mounted()', () => {
            expect(typeof Body_EditIFPUGFactor.mounted).to.eql('function')
        });

        it('存在 toManagerStepTwo()', () => {
            expect(typeof Body_EditIFPUGFactor.methods.toManagerStepTwo).to.eql('function')
        });

        it('存在 Next()', () => {
            expect(typeof Body_EditIFPUGFactor.methods.Next).to.eql('function')
        });

    });


    describe('单元测试',function () {

        const wrapper = mount(Body_EditIFPUGFactor, {
            mocks: {
                $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                $store,
                $router
            }
        });
        describe('输入任意参数为空',function (){
            it('UT_FE_02_FUN_01_01_001', () => {
                wrapper.vm.inputs[0].val='' ;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it(' UT_FE_02_FUN_01_01_002', () => {
                wrapper.vm.inputs[0].val=50 ;
                wrapper.vm.inputs[1].val='';
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
        });
        describe('输入参数不合法',function () {
            it('UT_FE_02_FUN_01_02_001', () => {
                wrapper.vm.inputs[0].val=-50 ;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_002', () => {
                wrapper.vm.inputs[0].val='G' ;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_003', () => {
                wrapper.vm.inputs[0].val='h' ;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_004', () => {
                wrapper.vm.inputs[0].val='*' ;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_005', () => {
                wrapper.vm.inputs[0].val='￥' ;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_006', () => {
                wrapper.vm.inputs[0].val='钓' ;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_007', () => {
                wrapper.vm.inputs[0].val=-1 ;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_008', () => {
                wrapper.vm.inputs[0].val=1001 ;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_009', () => {
                wrapper.vm.inputs[0].val=50 ;
                wrapper.vm.inputs[1].val=-1;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_010', () => {
                wrapper.vm.inputs[0].val=50 ;
                wrapper.vm.inputs[1].val='aa';
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
            it('UT_FE_02_FUN_01_02_011', () => {
                wrapper.vm.inputs[0].val=50 ;
                wrapper.vm.inputs[1].val=10000001;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(false);
            });
        });
        describe('输入参数合法',function (){
            it('UT_FE_02_FUN_01_03_001', () => {
                wrapper.vm.inputs[0].val=30;
                wrapper.vm.inputs[1].val=2000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(true);
            });
            it('UT_FE_02_FUN_01_03_002', () => {
                wrapper.vm.inputs[0].val=0;
                wrapper.vm.inputs[1].val=0;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(true);
            });
            it('UT_FE_02_FUN_01_03_003', () => {
                wrapper.vm.inputs[0].val=1000;
                wrapper.vm.inputs[1].val=10000000;
                wrapper.vm.Next();
                expect(wrapper.vm.valid).to.equal(true);
            });
        });
    });


    describe('系统测试',function () {

        describe('测试按钮', function(){

            it("编辑按钮",function () {
                const wrapper = mount(Body_EditIFPUGFactor, {
                    mocks: {
                        $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                        $store,
                        $router
                    }
                });
                //编辑按钮
                let btn=wrapper.findAll('.el-button').at(0);
                expect(btn).to.exist;
                expect(btn.text()).to.contain('编辑');
            });

            describe('返回按钮',function () {

                it("存在返回按钮",function () {
                    const wrapper = mount(Body_EditIFPUGFactor, {
                        mocks: {
                            $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                            $store,
                            $router
                        }
                    });
                    //返回按钮
                    let btn=wrapper.findAll('.el-button').at(1);
                    expect(btn).to.exist;
                    expect(btn.text()).to.contain('返回');
                });

                describe("点击返回按钮",function () {

                    const wrapper = mount(Body_EditIFPUGFactor, {
                        mocks: {
                            $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                            $store,
                            $router
                        }
                    });
                    //返回按钮
                    const btn = wrapper.findAll('.el-button').at(1);
                    expect(btn.text()).to.contain('返回');
                    btn.trigger('click');

                    it('点击返回按钮，弹出消息窗口', function () {


                        //弹出消息窗口
                        //todo:依靠顺序
                        return Vue.nextTick()
                            .then(function () {
                                let box=document.querySelectorAll('.el-message-box__wrapper')[0];
                                expect(box).to.exist;
                                // expect(box.textContent).to.contain('是否返回前页?');
                            });
                    });

                    describe('消息窗口的按钮', function () {

                        it('存在确定按钮', function () {
                            //确定按钮
                            //todo:依靠顺序
                            return Vue.nextTick()
                                .then(function () {
                                    let btn=document.querySelectorAll('.el-message-box__wrapper')[0].querySelectorAll('.el-button')[1];
                                    expect(btn).to.exist;
                                    expect(btn.textContent).to.contain('确定');
                                    btn.click();
                                });
                        });

                        it('存在取消按钮', function () {
                            //取消按钮
                            //todo:依靠顺序
                            return Vue.nextTick()
                                .then(function () {
                                    let btn=document.querySelectorAll('.el-message-box__wrapper')[0].querySelectorAll('.el-button')[0];
                                    expect(btn).to.exist;
                                    expect(btn.textContent).to.contain('取消');
                                    btn.click();
                                });
                        });
                    });
                });

            });

            it("保存按钮",function () {
                const wrapper = mount(Body_EditIFPUGFactor, {
                    mocks: {
                        $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                        $store,
                        $router
                    }
                });
                //编辑按钮
                let btn=wrapper.findAll('.el-button').at(2);
                expect(btn).to.exist;
                expect(btn.text()).to.contain('保存');
            });

        });

        describe('模拟用户点击，修改估算因子', () =>{

            const wrapper = mount(Body_EditIFPUGFactor, {
                mocks: {
                    $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
                    $store,
                    $router
                }
            });

            function triggerEvent(elm, name, ...opts) {
                let eventName;

                if (/^mouse|click/.test(name)) {
                    eventName = 'MouseEvents';
                } else if (/^key/.test(name)) {
                    eventName = 'KeyboardEvent';
                } else {
                    eventName = 'HTMLEvents';
                }
                const evt = document.createEvent(eventName);

                evt.initEvent(name, ...opts);
                elm.dispatchEvent
                    ? elm.dispatchEvent(evt)
                    : elm.fireEvent('on' + name, evt);
                return elm;
            }

            function triggerClick(elm, ...opts) {
                triggerEvent(elm, 'mousedown', ...opts);
                triggerEvent(elm, 'mouseup', ...opts);
                return elm;
            }

            const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
            const radios=wrapper.vm.$el.querySelectorAll('.el-radio');
            const inputs=wrapper.vm.$el.querySelectorAll('.el-input');


            it('修改软件可靠性成Normal', function () {
                //0-4
                triggerEvent(options[2], 'mouseenter');
                options[2].click();
                expect(wrapper.vm.selections[0].val).to.equal('Normal');
            });

            it('产品复杂度成Very Low', function () {
                //5-10
                triggerEvent(options[5], 'mouseenter');
                options[5].click();
                expect(wrapper.vm.selections[1].val).to.equal('Very Low');
            });

            it('执行时间约束成Extra High', function () {
                //11-14
                triggerEvent(options[14], 'mouseenter');
                options[14].click();
                expect(wrapper.vm.selections[2].val).to.equal('Extra High');
            });

            it('要求的开发进度成High', function () {
                //15-19
                triggerEvent(options[18], 'mouseenter');
                options[18].click();
                expect(wrapper.vm.selections[3].val).to.equal('High');
            });


            // it('开发类型 Enhencement', function () {
            //
            //     //开发类型 Enhencement
            //     let str_1=wrapper.vm.radios[0].vals[1].value;
            //     //开发平台 Mid-range
            //     let str_2=wrapper.vm.radios[1].vals[2].value;
            //     //开发语言 3GL
            //     let str_3=wrapper.vm.radios[2].vals[0].value;
            //     //是否使用数据库 No
            //     let str_4=wrapper.vm.radios[3].vals[1].value;
            //
            //     wrapper.setData({radios:[
            //         {
            //             name:"开发类型",
            //             val:str_1,
            //             vals:[
            //                 {value:"New Development"},
            //                 {value:"Enhencement"},
            //                 {value:"Re-development"}
            //             ]
            //         },{
            //             name:"开发平台",
            //             val:str_2,
            //             vals:[
            //                 {value:"Personal computer"},
            //                 {value:"Mainframe"},
            //                 {value:"Mid-range"}
            //             ]
            //         },{
            //             name:"开发语言",
            //             val:str_3,
            //             vals:[
            //                 {value:"3GL"},
            //                 {value:"4GL"},
            //                 {value:"ApG"}
            //             ]
            //         },{
            //             name:"是否使用数据库",
            //             val:str_4,
            //             vals:[
            //                 {value:"Yes"},
            //                 {value:"No"}
            //             ]
            //         }
            //     ],});
            //
            //     // wrapper.vm.radios[0].val='Enhencement';
            //     expect(wrapper.vm.radios[0].val).to.equal('Enhencement');
            //
            // });

            // it('开发平台 Mid-range', function () {
            //     //3-5
            //     radios[4].click();
            //     wrapper.vm.$nextTick(() => {
            //         expect(wrapper.vm.radios[1].val).to.equal('Mid-range');
            //         done();
            //     })
            // });
            //
            // it('开发语言 3GL', function () {
            //     //6-8
            //     radios[6].click();
            //     wrapper.vm.$nextTick(() => {
            //         expect(wrapper.vm.radios[2].val).to.equal('3GL');
            //         done();
            //     })
            // });
            //
            // it('是否使用数据库 No', function () {
            //     //9-10
            //     radios[10].click();
            //     wrapper.vm.$nextTick(() => {
            //         expect(wrapper.vm.radios[3].val).to.equal('No');
            //         done();
            //     })
            // });
            //
            // it('生产率 27', function () {
            //
            //     inputs[0].value=27;
            //     wrapper.vm.$nextTick(() => {
            //         expect(wrapper.vm.inputs[0].val).to.equal(27);
            //         done();
            //     })
            // });
            //
            // it('人力成本 1000', function () {
            //
            //     console.log(inputs[1].value);
            //     inputs[1].value=1000;
            //     wrapper.vm.$nextTick(() => {
            //         console.log(wrapper.vm.inputs[1].val)
            //         expect(wrapper.vm.inputs[1].val).to.equal(0);
            //         done();
            //     })
            // });



        });

    });



    // describe('测试函数', function(){
    //
    //     describe("Next()函数",function () {
    //
    //         describe("如果生产率和人力成本是数字",function () {
    //
    //             const wrapper = mount(Body_EditIFPUGFactor, {
    //                 mocks: {
    //                     $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
    //                     $store,
    //                     $router
    //                 }
    //             });
    //
    //             wrapper.vm.inputs[0].val=10;
    //             wrapper.vm.inputs[1].val=3000;
    //             wrapper.vm.Next();
    //
    //             it('有消息框弹出', function () {
    //                 let box=document.querySelector('.el-message-box__wrapper');
    //                 expect(box).to.exist;
    //             });
    //             it('消息框中有确定按钮', function () {
    //                 //确定按钮
    //                 return Vue.nextTick()
    //                     .then(function () {
    //                         let btn=document.querySelector('.el-message-box__wrapper').querySelectorAll('.el-button')[1];
    //                         expect(btn).to.exist;
    //                         expect(btn.textContent).to.contain('确定');
    //                         btn.click();
    //                     });
    //             });
    //             it('消息框中有取消按钮', function () {
    //                 //确定按钮
    //                 return Vue.nextTick()
    //                     .then(function () {
    //                         let btn=document.querySelector('.el-message-box__wrapper').querySelectorAll('.el-button')[0];
    //                         expect(btn).to.exist;
    //                         expect(btn.textContent).to.contain('取消');
    //                         btn.click();
    //                     });
    //             });
    //         });
    //
    //
    //         describe('如果生产率和人力成本不是数字', function () {
    //             const wrapper = mount(Body_EditIFPUGFactor, {
    //                 mocks: {
    //                     $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
    //                     $store,
    //                     $router
    //                 }
    //             });
    //             wrapper.vm.inputs[0].val='e';
    //             wrapper.vm.inputs[1].val=3000;
    //
    //             it('出现message：请输入数字', function () {
    //                 wrapper.vm.Next();
    //                 return Vue.nextTick()
    //                     .then(function () {
    //                         //todo:依靠所有文件
    //                         let message=document.querySelectorAll('.el-message__content')[4];
    //                         // expect(message).to.exist;
    //                         // expect(message.textContent).to.contain('请输入数字');
    //                     });
    //             });
    //         });
    //     });
    // });




    describe('集成测试',function () {
        it('API接口', function () {
            return Vue.nextTick()
                .then(function () {
                    expect(wrapper.vm.radios[0].val).to.equal('New Development');
                    expect(wrapper.vm.selections[0].val).to.equal('Normal');
                    expect(wrapper.vm.radios[1].val).to.equal('Personal computer');
                    expect(wrapper.vm.selections[1].val).to.equal('Normal');
                    expect(wrapper.vm.radios[2].val).to.equal('3GL');
                    expect(wrapper.vm.selections[2].val).to.equal('Normal');
                    expect(wrapper.vm.radios[3].val).to.equal('Yes');
                    expect(wrapper.vm.selections[3].val).to.equal('Normal');
                    expect(wrapper.vm.inputs[0].val).to.equal('8');
                    expect(wrapper.vm.inputs[1].val).to.equal('10000');
                });
        });
    });
});


