// import { expect } from 'chai'
// import { mount } from '@vue/test-utils'
// import Body_CheckIFPUGFactor from '../../src/components/estimation/Body_CheckIFPUGFactor.vue'
//
// import Vue from 'vue'
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);
// import VueResource from 'vue-resource'
// Vue.use(VueResource);
//
// // Vue.http.interceptors.push(function(request, next) {
// //     console.log('this.$route:',this.$route);
// //     // modify headers
// //     if(this.$store.state.user.tokenid){
// //         request.headers.set('Authorization', this.$store.state.user.tokenid);
// //     }
// //     console.log('request.headers: ',request.headers.map);
// //     // continue to next interceptor
// //     next();
// // });
//
//
//
// describe('Body_CheckIFPUGFactor.vue', function (){
//
//     const url='http://120.79.245.126:8011';
//     const $route = {
//         path: '/managersteptwo',
//         hash: '',
//         params: { rId: '1521203368033' }
//     };
//     const $store = {
//         state: {
//             user : {
//                 tokenid : "adminadmin"
//             }
//         }
//     };
//     const wrapper = mount(Body_CheckIFPUGFactor, {
//         mocks: {
//             $route, // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
//             $store
//         }
//     });
//
//     describe('测试静态组件',function(){
//         it('模块名字：Body_CheckIFPUGFactor', () => {
//             expect(Body_CheckIFPUGFactor.name).to.eql('Body_CheckIFPUGFactor')
//         });
//
//         it('存在 mounted()', () => {
//             expect(typeof Body_CheckIFPUGFactor.mounted).to.eql('function')
//         });
//
//         it('存在 init()', () => {
//             expect(typeof Body_CheckIFPUGFactor.methods.init).to.eql('function')
//         });
//
//         it('存在 toMVER()', () => {
//             expect(typeof Body_CheckIFPUGFactor.methods.toMVER).to.eql('function')
//         });
//
//         it('存在 toManagerStepThree()', () => {
//             expect(typeof Body_CheckIFPUGFactor.methods.toManagerStepThree).to.eql('function')
//         });
//
//         it('存在 Submit()', () => {
//             expect(typeof Body_CheckIFPUGFactor.methods.Submit).to.eql('function')
//         });
//
//     });
//
//     describe('数据初始化', function(){
//         // 测试 init()
//         it('test init()', function () {
//             // console.log(wrapper.vm.displays[0].items[0].value);
//             console.log(wrapper.vm.$route);
//             expect(wrapper.vm.displays[0].items[0].value).to.equal('New Development');
//             expect(wrapper.vm.displays[0].items[1].value).to.equal('Very Low');
//             expect(wrapper.vm.displays[1].items[0].value).to.equal('Personal computer');
//             expect(wrapper.vm.displays[1].items[1].value).to.equal('Very Low');
//             expect(wrapper.vm.displays[2].items[0].value).to.equal('3GL');
//             expect(wrapper.vm.displays[2].items[1].value).to.equal('Very Low');
//             expect(wrapper.vm.displays[3].items[0].value).to.equal('Yes');
//             expect(wrapper.vm.displays[3].items[1].value).to.equal('Very Low');
//             expect(wrapper.vm.displays[4].items[0].value).to.equal('8');
//             expect(wrapper.vm.displays[4].items[1].value).to.equal('20000');
//         })
//
//         // it('从后端读取数据', function (){
//         //     Vue.config.errorHandler = done;
//         //     Vue.nextTick(() => {
//         //         expect(wrapper.vm.displays[0].items[0].value).to.equal('New Development');
//         //         expect(wrapper.vm.displays[0].items[1].value).to.equal('Very Low');
//         //         expect(wrapper.vm.displays[1].items[0].value).to.equal('Personal computer');
//         //         expect(wrapper.vm.displays[1].items[1].value).to.equal('Very Low');
//         //         expect(wrapper.vm.displays[2].items[0].value).to.equal('3GL');
//         //         expect(wrapper.vm.displays[2].items[1].value).to.equal('Very Low');
//         //         expect(wrapper.vm.displays[3].items[0].value).to.equal('Yes');
//         //         expect(wrapper.vm.displays[3].items[1].value).to.equal('Very Low');
//         //         expect(wrapper.vm.displays[4].items[0].value).to.equal('8');
//         //         expect(wrapper.vm.displays[4].items[1].value).to.equal('20000');
//         //         done();
//         //     })
//         // });
//         //
//         // it('数据初始化,默认值正确', function () {
//         //     expect(wrapper.vm.editDialogVisible).to.equal(false);
//         //     expect(wrapper.vm.formDialogVisible).to.equal(false);
//         //     expect(wrapper.vm.form.state).to.equal('');
//         //     expect(wrapper.vm.form.desc).to.equal('');
//         //     expect(wrapper.vm.formLabelWidth).to.equal('120px');
//         //     expect(wrapper.vm.url).to.equal(url+ '/estimation');
//         //
//         // })
//     });
//
//
//     // describe('提交弹出框', () =>{
//     //
//     //     function triggerEvent(elm, name, ...opts) {
//     //         let eventName;
//     //
//     //         if (/^mouse|click/.test(name)) {
//     //             eventName = 'MouseEvents';
//     //         } else if (/^key/.test(name)) {
//     //             eventName = 'KeyboardEvent';
//     //         } else {
//     //             eventName = 'HTMLEvents';
//     //         }
//     //         const evt = document.createEvent(eventName);
//     //
//     //         evt.initEvent(name, ...opts);
//     //         elm.dispatchEvent
//     //             ? elm.dispatchEvent(evt)
//     //             : elm.fireEvent('on' + name, evt);
//     //         return elm;
//     //     }
//     //
//     //     function triggerClick(elm, ...opts) {
//     //         triggerEvent(elm, 'mousedown', ...opts);
//     //         triggerEvent(elm, 'mouseup', ...opts);
//     //         return elm;
//     //     }
//     //
//     //     //提交按钮
//     //     const btn = wrapper.findAll('.el-button').at(4);
//     //
//     //     it('点击提交按钮，出现框', function () {
//     //         btn.trigger('click');
//     //         expect(wrapper.vm.formDialogVisible).to.equal(true);
//     //     });
//     //
//     //     it('添加状态，form.state值变为相应状态', function () {
//     //         btn.trigger('click');
//     //         wrapper.vm.$nextTick(() => {
//     //             const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
//     //             triggerEvent(options[0], 'mouseenter');
//     //             options[0].click();
//     //             wrapper.vm.$nextTick(() => {
//     //                 expect(wrapper.vm.form.state).to.equal('待修改');
//     //             })
//     //         })
//     //     });
//     //
//     //     it('添加描述，form.desc值变为相应描述', function () {
//     //         btn.trigger('click');
//     //         wrapper.vm.$nextTick(() => {
//     //             const input = wrapper.vm.$el.querySelectorAll('.el-textarea');
//     //             input.value='有待修改';
//     //             wrapper.vm.$nextTick(() => {
//     //                 expect(wrapper.vm.form.desc).to.equal('有待修改');
//     //             })
//     //         })
//     //     });
//     //
//     //     it('点击取消按钮，框消失', function () {
//     //         wrapper.setData({formDialogVisible:true});
//     //         const btn = wrapper.findAll('.el-button').at(1);
//     //         //触发点击事件
//     //         btn.trigger('click');
//     //         expect(wrapper.vm.formDialogVisible).to.equal(false);
//     //     });
//     //
//     //
//     //     it('点击确定按钮，如果未填写form.state，弹出框不会关闭', function () {
//     //         wrapper.setData({formDialogVisible:true});
//     //         wrapper.vm.form.state='';
//     //         const btn = wrapper.findAll('.el-button').at(2);
//     //         //触发点击事件
//     //         btn.trigger('click');
//     //         expect(wrapper.vm.formDialogVisible).to.equal(true);
//     //     })
//     // })
//     //todo:点击编辑，前往编辑页面
//     //todo:点击返回，返回上一步
// });
//
