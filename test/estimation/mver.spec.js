import { expect } from 'chai'

import { shallowMount,createLocalVue} from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import ManagerReportTable from '../../src/components/estimation/Mtable.vue'



import Vue from 'vue'

// 这里需要引入Element-UI

import ElementUI from 'element-ui';

Vue.use(ElementUI);
import Element from 'element-ui'

Vue.use(Element)



import Vuex from 'Vuex'


/*引入资源请求插件*/

import VueResource from 'vue-resource'


/*使用VueResource插件*/
Vue.use(VueResource)


const localVue = createLocalVue();

localVue.use(Vuex);



function triggerEvent(elm, name, ...opts){
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
};



describe('test Mver', () => {

    //模拟登录
    let store;
    store = new Vuex.Store({
        state: {
            user: {
                tokenid: '00223xiaoyan'
            }
        }
    });

    const wrapper = shallowMount(ManagerReportTable,{store, localVue });

    //测试选择器默认显示
    it('select测试选择器默认显示', () => {
        expect(wrapper.vm.$el.querySelector('.el-input__inner').placeholder).to.equal('请选择');
    });

    //测试选项是否正确显示
    it('测试选项是否正确显示 options rendered correctly', () => {
        const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
        const result = [].every.call(options, (option, index) => {
            let text = option.querySelector('span').textContent;
            return text === options[index].textContent;
        });
        expect(result).to.true;
    });


    it('搜索方式选择是否能随点击实现不同的函数', () => {
        const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
        console.log(options[0]);
        triggerEvent(options[0], 'mouseenter');
        options[0].click();
        expect(wrapper.vm.search_select).to.equal('1');
        triggerEvent(options[1], 'mouseenter');
        options[1].click();
        expect(wrapper.vm.search_select).to.equal('2');
        triggerEvent(options[2], 'mouseenter');
        options[2].click();
        expect(wrapper.vm.search_select).to.equal('3');
    });

    it('input框是否正常显示默认值', () => {
        let inputElm = wrapper.vm.$el.querySelectorAll('input');
        console.log(inputElm[1].getAttribute('placeholder'))
        expect(inputElm[1].getAttribute('placeholder')).to.equal('请输入搜索内容');
    });

    it('状态选择器是否正常显示默认值', () => {
        const input = wrapper.vm.$el.querySelectorAll('input');
        expect(input[2].getAttribute('placeholder')).to.equal('请选择状态');
    });

    it('状态搜索选择器是否是否能随点击显示不同选项', () => {
        const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
        //console.log(options[3]);
        triggerEvent(options[3], 'mouseenter');
        options[3].click();
        expect(wrapper.vm.stateValue).to.equal('待审核');
        triggerEvent(options[4], 'mouseenter');
        options[4].click();
        expect(wrapper.vm.stateValue).to.equal('估算中');
        triggerEvent(options[5], 'mouseenter');
        options[5].click();
        expect(wrapper.vm.stateValue).to.equal('待修改');
        triggerEvent(options[6], 'mouseenter');
        options[6].click();
        expect(wrapper.vm.stateValue).to.equal('完成');
    });

    it('时间选择器是否正常显示默认值', () => {
        const input = wrapper.vm.$el.querySelectorAll('input');
        console.log(input)
        expect(input[3].getAttribute('placeholder')).to.equal('请选择日期');
    });


});

