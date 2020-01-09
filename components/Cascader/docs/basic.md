单选框

## API

适用平台：WEB

## Radio

最基本的输入框组件

| 属性           | 说明                                     | 类型     | 默认值    |
| -------------- | ---------------------------------------- | -------- | --------- |
| value          | 选中项的值                                 | Array<any>   | 无 |
| defaultValue   | 选中项初始的值                              | Array<any>  | 无 |
| visible        | 组件的公用className前序                     | boolean   | false |
| title          | 样式类名                                   | string   | '所在地区' |
| prop           | 自定义配置键名                              | object   | { label: 'label', value: 'value', children: 'children' } |
| options        | 可选项数据源，键名可通过 prop 属性配置         | Array<any>   | 必填      |
| onChange       | 选中回调                                   | Function(value, options)   | 必填      |
| onClose        | 关闭回调                                   | Function  | 必填     |


```jsx
class Demo extends Component{
    state = {
        options: [
            {
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                        value: 'yizhi',
                        label: '一致'
                    }, {
                        value: 'fankui',
                        label: '反馈'
                    }, {
                        value: 'xiaolv',
                        label: '效率'
                    }, {
                        value: 'kekong',
                        label: '可控'
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }]
                }]
            }
        ],
        // 异步加载数据
        asyncOptions: [
              {
                value: 'zhinan',
                label: '指南',
                isLeaf: false
              },
              {
                value: 'zujian',
                label: '组件',
                isLeaf: false
              }
        ],
    }

    loadData = (targetOption) => {
        Toast.loading('加载中...', 0);
        // load options lazily
        setTimeout(() => {
            Toast.hideToast();
            targetOption.children = [
                {
                    label: `${targetOption.label} Dynamic 1`,
                    value: 'dynamic1',
                },
                {
                    label: `${targetOption.label} Dynamic 2`,
                    value: 'dynamic2',
                },
            ];
            this.setState({
                asyncOptions: [ ...this.state.asyncOptions ],
            });
        }, 1000);
    }

    onChange = (value, label) => {

    }
    render() {
        return (
            // 全量加载
            <Cascader 
                visible={visible}
                options={this.state.options}
                onClose={() => this.setState({visible: false})}
                onChange={this.onChange} />  
            // 异步加载
            <Cascader 
                visible={visible}
                loadData={this.loadData}
                options={this.state.asyncOptions}
                onClose={() => this.setState({visible: false})}
                onChange={this.onChange} /> 
        )
    }
}
```

