// import { expect } from 'chai'
// import { mount } from '@vue/test-utils'
// import Body_EditIFPUGFactor from '../../src/components/estimation/Body_EditIFPUGFactor.vue'
//
// import Vue from 'vue'
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);
// import VueResource from 'vue-resource'
// Vue.use(VueResource);
//
// describe('Body_EditIFPUGFactor.vue', () => {
//
//     function triggerEvent(elm, name, ...opts) {
//         let eventName;
//
//         if (/^mouse|click/.test(name)) {
//             eventName = 'MouseEvents';
//         } else if (/^key/.test(name)) {
//             eventName = 'KeyboardEvent';
//         } else {
//             eventName = 'HTMLEvents';
//         }
//         const evt = document.createEvent(eventName);
//
//         evt.initEvent(name, ...opts);
//         elm.dispatchEvent
//             ? elm.dispatchEvent(evt)
//             : elm.fireEvent('on' + name, evt);
//         return elm;
//     }
//
//     function triggerClick(elm, ...opts) {
//         triggerEvent(elm, 'mousedown', ...opts);
//         triggerEvent(elm, 'mouseup', ...opts);
//         return elm;
//     }
//
//     describe('数据初始化', () => {
//
//         it('从后端读取数据', function () {
//
//             const url='http://120.79.245.126:8011';
//             const $route = {
//                 path: '/managerstepthree',
//                 params: { rId: '1524723913928' }
//             };
//
//             const wrapper = mount(Body_EditIFPUGFactor, {
//                 mocks: {
//                     $route // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
//                 }
//             });
//             console.log(wrapper.vm.radios[0].val);
//
//             wrapper.vm.$nextTick(() => {
//                 expect(wrapper.vm.radios[0].val).to.equal('New Development');
//                 expect(wrapper.vm.selections[0].val).to.equal('Very Low');
//                 expect(wrapper.vm.radios[1].val).to.equal('Personal computer');
//                 expect(wrapper.vm.selections[1].val).to.equal('Very Low');
//                 expect(wrapper.vm.radios[2].val).to.equal('3GL');
//                 expect(wrapper.vm.selections[2].val).to.equal('Very Low');
//                 expect(wrapper.vm.radios[3].val).to.equal('Yes');
//                 expect(wrapper.vm.selections[3].val).to.equal('Very Low');
//                 expect(wrapper.vm.inputs[0].val).to.equal('8');
//                 expect(wrapper.vm.inputs[1].val).to.equal('20000');
//             })
//         });
//
//         it('数据初始化,默认值正确', function () {
//             const url='http://120.79.245.126:8011';
//             const $route = {
//                 path: '/managerstepthree',
//                 params: { rId: '1524723913928' }
//             };
//
//             const wrapper = mount(Body_EditIFPUGFactor, {
//                 mocks: {
//                     $route // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
//                 }
//             });
//
//             expect(wrapper.vm.editDialogVisible).to.equal(false);
//             expect(wrapper.vm.url).to.equal(url+ '/estimation');
//
//         })
//     });
//
//     describe('修改估算因子', () =>{
//         const url='http://120.79.245.126:8011';
//         const $route = {
//             path: '/managerstepthree',
//             params: { rId: '1524723913928' }
//         };
//
//         const wrapper = mount(Body_EditIFPUGFactor, {
//             mocks: {
//                 $route // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
//             }
//         });
//
//         const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
//         const radios=wrapper.vm.$el.querySelectorAll('.el-radio');
//         const inputs=wrapper.vm.$el.querySelectorAll('.el-input');
//
//         it('修改软件可靠性成Normal', function () {
//             //0-4
//             triggerEvent(options[2], 'mouseenter');
//             options[2].click();
//             expect(wrapper.vm.selections[0].val).to.equal('Normal');
//         });
//
//         it('产品复杂度成Very Low', function () {
//             //5-10
//             triggerEvent(options[5], 'mouseenter');
//             options[5].click();
//             expect(wrapper.vm.selections[1].val).to.equal('Very Low');
//         });
//
//         it('执行时间约束成Extra High', function () {
//             //11-14
//             triggerEvent(options[14], 'mouseenter');
//             options[14].click();
//             expect(wrapper.vm.selections[2].val).to.equal('Extra High');
//         });
//
//         it('要求的开发进度成High', function () {
//             //15-19
//             triggerEvent(options[18], 'mouseenter');
//             options[18].click();
//             expect(wrapper.vm.selections[3].val).to.equal('High');
//         });
//
//
//         it('开发类型 Enhencement', function () {
//             //0-2
//             console.log(typeof radios[1]);
//             triggerEvent(radios[1], 'mouseenter');
//             radios[1].click();
//             expect(wrapper.vm.radios[0].val).to.equal('Enhencement');
//             wrapper.vm.$nextTick(() => {
//                 expect(wrapper.vm.radios[0].val).to.equal('Enhencement');
//                 done();
//             })
//         });
//
//         it('开发平台 Mid-range', function () {
//             //3-5
//             radios[4].click();
//             wrapper.vm.$nextTick(() => {
//                 expect(wrapper.vm.radios[1].val).to.equal('Mid-range');
//                 done();
//             })
//         });
//
//         it('开发语言 3GL', function () {
//             //6-8
//             radios[6].click();
//             wrapper.vm.$nextTick(() => {
//                 expect(wrapper.vm.radios[2].val).to.equal('3GL');
//                 done();
//             })
//         });
//
//         it('是否使用数据库 No', function () {
//             //9-10
//             radios[10].click();
//             wrapper.vm.$nextTick(() => {
//                 expect(wrapper.vm.radios[3].val).to.equal('No');
//                 done();
//             })
//         });
//
//         it('生产率 27', function () {
//
//             inputs[0].value=27;
//             wrapper.vm.$nextTick(() => {
//                 expect(wrapper.vm.inputs[0].val).to.equal(27);
//                 done();
//             })
//         });
//
//         it('人力成本 1000', function () {
//
//             console.log(inputs[1].value);
//             inputs[1].value=1000;
//             wrapper.vm.$nextTick(() => {
//                 console.log(wrapper.vm.inputs[1].val)
//                 expect(wrapper.vm.inputs[1].val).to.equal(0);
//                 done();
//             })
//         });
//
//
//
//     })
//
//
// });
//
//
