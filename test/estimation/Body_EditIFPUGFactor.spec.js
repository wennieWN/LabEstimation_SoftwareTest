import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Body_EditIFPUGFactor from '../../src/components/estimation/Body_EditIFPUGFactor.vue'

import Vue from 'vue'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import VueResource from 'vue-resource'
Vue.use(VueResource);

describe('Body_EditIFPUGFactor.vue', () => {


  describe('数据初始化', () => {

    it('从后端读取数据', function () {

      const url='http://120.79.245.126:8011';
      const $route = {
        path: '/managerstepthree',
        params: { rId: '1524723913928' }
      };

      const wrapper = mount(Body_EditIFPUGFactor, {
        mocks: {
          $route // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
        }
      });
      console.log(wrapper.vm.radios[0].val);

      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.radios[0].val).to.equal('New Development');
        expect(wrapper.vm.selections[0].val).to.equal('Very Low');
        expect(wrapper.vm.radios[1].val).to.equal('Personal computer');
        expect(wrapper.vm.selections[1].val).to.equal('Very Low');
        expect(wrapper.vm.radios[2].val).to.equal('3GL');
        expect(wrapper.vm.selections[2].val).to.equal('Very Low');
        expect(wrapper.vm.radios[3].val).to.equal('Yes');
        expect(wrapper.vm.selections[3].val).to.equal('Very Low');
        expect(wrapper.vm.inputs[0].val).to.equal('8');
        expect(wrapper.vm.inputs[1].val).to.equal('20000');
      })
    });

    it('数据初始化,默认值正确', function () {
      const url='http://120.79.245.126:8011';
      const $route = {
        path: '/managerstepthree',
        params: { rId: '1524723913928' }
      };

      const wrapper = mount(Body_EditIFPUGFactor, {
        mocks: {
          $route // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
        }
      });

      expect(wrapper.vm.editDialogVisible).to.equal(false);
      expect(wrapper.vm.url).to.equal(url+ '/estimation');

    })
  });
});


