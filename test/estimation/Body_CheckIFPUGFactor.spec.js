import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Body_CheckIFPUGFactor from '../../src/components/estimation/Body_CheckIFPUGFactor.vue'

import Vue from 'vue'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import VueResource from 'vue-resource'
Vue.use(VueResource)

describe('Body_CheckIFPUGFactor.vue', () => {

  const url='http://120.79.245.126:8011';
  const $route = {
    path: '/managersteptwo',
    hash: '',
    params: { rId: '1521203368033' }
  };

  const wrapper = mount(Body_CheckIFPUGFactor, {
    mocks: {
      $route // 在挂载组件之前添加仿造的 `$route` 对象到 Vue 实例中
    }
  });

  describe('数据初始化', () => {
    it('从后端读取数据', function () {
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
    })

    it('数据初始化,默认值正确', function () {
      expect(wrapper.vm.editDialogVisible).to.equal(false);
      expect(wrapper.vm.formDialogVisible).to.equal(false);
      expect(wrapper.vm.form.state).to.equal('');
      expect(wrapper.vm.form.desc).to.equal('');
      expect(wrapper.vm.formLabelWidth).to.equal('120px');
      expect(wrapper.vm.url).to.equal(url+ '/estimation');

    })
  });


  describe('提交弹出框', () =>{

    it('点击提交按钮，出现框', function () {
      const btn = wrapper.findAll('.el-button').at(4);

      btn.trigger('click');
      expect(wrapper.vm.formDialogVisible).to.equal(true);
    });

    //todo:模拟用户点击
    it('添加状态，form.state值变为相应状态', function () {
      // wrapper.vm.form.state='待修改'
      wrapper.vm.form.state='待修改';
      expect(wrapper.vm.form.state).to.equal('待修改');
    });

    //todo:模拟用户点击
    it('添加描述，form.desc值变为相应描述', function () {
      // wrapper.vm.form.state='待修改'
      wrapper.vm.form.desc='有待修改';
      expect(wrapper.vm.form.desc).to.equal('有待修改');
    });

    it('点击取消按钮，框消失', function () {
      wrapper.setData({formDialogVisible:true});
      const btn = wrapper.findAll('.el-button').at(1);
      //触发点击事件
      btn.trigger('click');
      expect(wrapper.vm.formDialogVisible).to.equal(false);
    });


    it('点击确定按钮，如果未填写form.state，弹出框不会关闭', function () {
      wrapper.setData({formDialogVisible:true});
      wrapper.vm.form.state='';
      const btn = wrapper.findAll('.el-button').at(2);
      //触发点击事件
      btn.trigger('click');
      expect(wrapper.vm.formDialogVisible).to.equal(true);
    })
  })
  //todo:点击编辑，前往编辑页面
  //todo:点击返回，返回上一步
});

