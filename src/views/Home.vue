<template>
  <div class="home">
   <div>
      <div>
        <br>
        <span>菜鸟驿站</span>&nbsp;&nbsp;
        <Button type="primary" @click="all" >All</Button>&nbsp;&nbsp;
        <Button type="primary" @click="appointmented">已经预约</Button>&nbsp;&nbsp;
        <Button type="primary" @click="finished">已取件</Button>&nbsp;&nbsp;
        <Button type="primary" @click="appointment">未预约</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="success" @click="add">添加</Button>
      </div>
      <br>
      <br>
      <div>
         <Table border :columns="columns7" :data="data6"></Table>
      </div>
    
   </div>
  </div>
  
</template>

<script>

export default {
  data () {
            return {
                columns7: [
                    {
                        title: '运单号',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '收件人',
                        key: 'age'
                    },
                    {
                        title: '电话',
                        key: 'address'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '预约时间',
                        key: 'time'
                    },
                    {
                        title: '',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '201927040001',
                        age: "谢坤龙",
                        address: '18711345569',
                        status: '已预约',
                        time: '2019-03-14 18:00:00'
                    },
                    {
                        name: '201927040001',
                        age: "谢坤龙",
                        address: '18711345569',
                        status: '已预约',
                        time: '2019-03-14 18:00:00'
                    },
                    {
                        name: '201927040001',
                        age: "谢坤龙",
                        address: '18711345569',
                        status: '已预约',
                        time: '2019-03-14 18:00:00'
                    },
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
        }

}
</script>
