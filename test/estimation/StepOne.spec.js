// import { expect } from 'chai'
// // import { mount } from '@vue/test-utils'
// import StepOne from '../../src/views/user/StepOne.vue'
//
// import Vue from 'vue'
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);
// import VueResource from 'vue-resource'
// Vue.use(VueResource);
//
// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import VueRouter from 'vue-router'
//
//
//
// describe('StepOne.vue', () => {
//
//     const url='http://120.79.245.126:8011';
//     const $store = {
//         state: {
//             user : {
//                 tokenid : 'adminadmin'
//             }
//         }
//     };
//     let $route = {
//         path: '/stepone',
//         hash: '',
//         params: { rId: '1523513842049' },
//     };
//
//     let $router = {
//         name: 'Stepone',
//         path: '/stepone',
//         params: { rId: '1523513842049' },
//         push(p){
//             this.path=p.path;
//             this.name=p.name;
//             this.params=p.params;
//         }
//     };
//
//     const localVue = createLocalVue();
//     localVue.use(VueRouter);
//
//     const wrapper = shallowMount(StepOne, {
//         mocks: {
//             $route,
//             $store,
//             $router
//         }
//     });
//
//     beforeEach(function () {
//         $router = {
//             name: 'Stepone',
//             path: '/stepone',
//             params: { rId: '1523513842049' },
//             push(p){
//                 this.path=p.path;
//                 this.name=p.name;
//                 this.params=p.params;
//             }
//         };
//     });
//
//     afterEach(function () {
//         wrapper.destroy();
//     });
//
//     describe('测试静态组件',function(){
//         it('模块名字：StepOne', () => {
//             expect(StepOne.name).to.eql('StepOne')
//         });
//
//         it('存在 mounted()', () => {
//             expect(typeof StepOne.mounted).to.eql('function')
//         });
//
//         it('存在 toManagerStepTwo()', () => {
//             expect(typeof StepOne.methods.checkToken).to.eql('function')
//         });
//
//         it('存在 Next()', () => {
//             expect(typeof StepOne.methods.toStepTwo).to.eql('function')
//         });
//
//         it('存在 Next()', () => {
//             expect(typeof StepOne.methods.toReport).to.eql('function')
//         });
//
//     });
//
//     describe('测试用户输入',function(){
//
//         const wrapper = shallowMount(StepOne, {
//             mocks: {
//                 $route,
//                 $store,
//                 $router
//             }
//         });
//
//         it('用户输入projectName', () => {
//             wrapper.vm.form.projectName='2';
//             expect(wrapper.vm.form.projectName).to.eql('2');
//         });
//
//     });
//
//
// });
//
//
