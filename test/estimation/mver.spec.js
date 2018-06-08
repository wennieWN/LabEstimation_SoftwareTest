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

const DELAY = 10;
const testDataArr = [];
const toArray = function(obj) {
    return [].slice.call(obj);
};

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

    const wrapper = shallowMount(ManagerReportTable,{store, localVue});
    beforeEach(function() {
        wrapper.vm.tableData4=
            [{
                rId:'1528113442061',
                userId: 'admin',
                proName: '软件估算平台',
                proIntro:'软件估算平台',
                createTime:'2018-06-04',
                state:'待审核',
                method:'IFPUG',
                remark:''
            },
                {
                    rId:'1528114444342',
                    userId: 'admin',
                    proName: 'shallow',
                    proIntro:'shallow',
                    createTime:'2018-05-29',
                    state:'待审核',
                    method:'COSMIC',
                    remark:''
                }
            ];
        wrapper.vm.allData= [{
            rId:'1528113442061',
                userId: 'admin',
                proName: '软件估算平台',
                proIntro:'软件估算平台',
                createTime:'2018-06-04',
                state:'待审核',
                method:'IFPUG',
                remark:''
        },
        {
            rId:'1528114444342',
            userId: 'admin',
            proName: 'shallow',
            proIntro:'shallow',
            createTime:'2018-05-29',
            state:'待审核',
            method:'COSMIC',
            remark:''
        }
         ];
           });

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

    it('inputSearch()', function() {
       // const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
        //console.log(options[0]);
        //triggerEvent(options[0], 'mouseenter');
       // options[0].click();
        //console.log(wrapper.vm.$refs.selectInput.style.display)
       // wrapper.vm.inputSearch();
            wrapper.vm.inputSearch();
            expect(wrapper.vm.$refs.selectInput.style.display).to.equal('block');
            expect(wrapper.vm.$refs.selectState.style.display).to.equal('none');
            expect(wrapper.vm.$refs.selectDate.style.display).to.equal('none');

    });
    it('stateSearch()', function() {
       // const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
        //console.log(options[0]);
        //triggerEvent(options[1], 'mouseenter');
        //options[1].click();
        //console.log(wrapper.vm.$refs.selectInput.style.display)
        wrapper.vm.stateSearch();
        expect(wrapper.vm.$refs.selectInput.style.display).to.equal('none');
        expect(wrapper.vm.$refs.selectState.style.display).to.equal('block');
        expect(wrapper.vm.$refs.selectDate.style.display).to.equal('none');
    });
    it('dateSearch()', function() {
        // const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
        //console.log(options[0]);
        //triggerEvent(options[1], 'mouseenter');
        //options[1].click();
        //console.log(wrapper.vm.$refs.selectInput.style.display)
        wrapper.vm.dateSearch();
        expect(wrapper.vm.$refs.selectInput.style.display).to.equal('none');
        expect(wrapper.vm.$refs.selectState.style.display).to.equal('none');
        expect(wrapper.vm.$refs.selectDate.style.display).to.equal('block');
    });
    it('getSTime("2018-06-04")', () => {

        console.log(wrapper.vm.tableData4)
        wrapper.vm.getSTime("2018-06-04");

        expect(wrapper.vm.onChangeValue).to.equal('2018-06-04');
        expect(wrapper.vm.sTime).to.equal('2018-06-04');
        expect(wrapper.vm.tableData4.length).to.equal(1);
        console.log(wrapper.vm.tableData4)
    });
    it('SSearch()', function() {
        // const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
        //console.log(options[0]);
        //triggerEvent(options[1], 'mouseenter');
        //options[1].click();
        //console.log(wrapper.vm.$refs.selectInput.style.display)
        console.log(wrapper.vm.tableData4)
        wrapper.vm.stateValue = "待审核";
        wrapper.vm.SSearch();
        expect(wrapper.vm.tableData4.length).to.equal(2);
        console.log(wrapper.vm.tableData4)
    });
    it('search(e)', function() {
        // const options = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item');
        //console.log(options[0]);
        //triggerEvent(options[1], 'mouseenter');
        //options[1].click();
        //console.log(wrapper.vm.$refs.selectInput.style.display)
        wrapper.vm.search("IF");
        expect(wrapper.vm.tableData4.length).to.equal(1);
        console.log(wrapper.vm.tableData4)
    });

    it('table head', done => {
        setTimeout(_ => {
            const ths = toArray(wrapper.vm.$el.querySelectorAll('thead th'));
            console.log(ths.map(node => node.textContent).filter(o => o))
            expect(ths.map(node => node.textContent).filter(o => o))
                .to.eql(['#','用户名', '项目名称', '项目简介', '创建时间','状态','估算方法','操作','备注']);
            done();
        }, DELAY);
    });
  it('table row length', () => {
     // console.log(wrapper.vm.tableData4)
      expect(wrapper.vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')).to.length(wrapper.vm.tableData4.length);
  });
    it('table height', () => {
       console.log(wrapper.vm.$refs.mtable.height)
       expect(wrapper.vm.$refs.mtable.height).to.eql('400')
    });
    it('table column attributes:width', done => {
        setTimeout(_ => {
            const ths = toArray(wrapper.vm.$el.querySelectorAll('.el-table__header-wrapper col'))
                .map(node => node.width).filter(o => o);
            console.log(ths)
            expect(ths).to.include('80').include('100').include('100').include('130').include('120').include('80').include('80').include('180').include('150');
            done();
        }, DELAY);
    });
    it('table column', () => {
       // console.log(wrapper.vm.$el.querySelectorAll('.el-table_1_column_1'))
        /*column 1*/
        const col1 = wrapper.vm.$el.querySelectorAll('.el-table_1_column_1');
        expect(col1[1].textContent).to.eql('1');
        expect(col1[2].textContent).to.eql('2');
        console.log(wrapper.vm.$el.querySelectorAll('.el-table_1_column_2'))

        const col2 = wrapper.vm.$el.querySelectorAll('.el-table_1_column_2');
        expect(col2[1].textContent).to.eql('admin');
        expect(col2[2].textContent).to.eql('admin');
        // console.log(wrapper.vm.$el.querySelectorAll('.el-table_1_column_1'))

       const col3 = wrapper.vm.$el.querySelectorAll('.el-table_1_column_3');
        expect(col3[1].textContent).to.eql('软件估算平台');
        expect(col3[2].textContent).to.eql('shallow');
        // console.log(wrapper.vm.$el.querySelectorAll('.el-table_1_column_1'))

        const col4 = wrapper.vm.$el.querySelectorAll('.el-table_1_column_4');
        expect(col4[1].textContent).to.eql('软件估算平台');
        expect(col4[2].textContent).to.eql('shallow');
        // console.log(wrapper.vm.$el.querySelectorAll('.el-table_1_column_1'))

        const col5 = wrapper.vm.$el.querySelectorAll('.el-table_1_column_5');
        expect(col5[1].textContent).to.eql('2018-06-04');
        expect(col5[2].textContent).to.eql('2018-05-29');
        // console.log(wrapper.vm.$el.querySelectorAll('.el-table_1_column_1'))

        const col6 = wrapper.vm.$el.querySelectorAll('.el-table_1_column_6');
        expect(col6[1].textContent).to.eql('待审核');
        expect(col6[2].textContent).to.eql('待审核');
        // console.log(wrapper.vm.$el.querySelectorAll('.el-table_1_column_1'))

        const col7 = wrapper.vm.$el.querySelectorAll('.el-table_1_column_7');
        expect(col7[1].textContent).to.eql('IFPUG');
        expect(col7[2].textContent).to.eql('COSMIC');


        //console.log(wrapper.vm.$el.querySelectorAll('.el-table_1_column_8'))

        const col8 = wrapper.vm.$el.querySelectorAll('.el-table_1_column_8');
        console.log(col8[1].textContent)

        expect(col8[1].textContent).to.eql('查看报告 估算')
        expect(col8[2].textContent).to.eql('查看报告 估算')

        const col9 = wrapper.vm.$el.querySelectorAll('.el-table_1_column_9');
        expect(col9[2].textContent).to.eql('');
    });
    it('size: small button', () => {

        let buttonElm = wrapper.vm.$el;
        expect(buttonElm.querySelectorAll('.el-button--small').length).to.eql(4);
    });


});

