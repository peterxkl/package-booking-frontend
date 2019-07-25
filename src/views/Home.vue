<template>
  <div class="home">
   <div>
      <div>
        <span>菜鸟驿站</span>&nbsp;&nbsp;
        <Button type="primary" >All</Button>&nbsp;&nbsp;
        <Button type="primary">已经预约</Button>&nbsp;&nbsp;
        <Button type="primary">已取件</Button>&nbsp;&nbsp;
        <Button type="primary">未预约</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="success" @click="add">添加</Button>
      </div>
      <div>
         <Table :columns="columns1" :data="data1"></Table>
      </div>
    
   </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted:function(){
      this.$store.dispatch('getPackageList')
  },
  methods: {
      add(){
                
           this.$router.push({name:'add'},);
               
      }
  },
  data () {
            return {
                columns1: [
                    {
                        title: '运单号',
                        key: 'id'
                    },
                    {
                        title: '收件人',
                        key: 'name'
                    },
                    {
                        title: '电话',
                        key: 'phone'
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
                        title: '确认',
                        key: 'confirm'
                    }
                ],
                data1: this.$store.state.list
            }
        }

}
</script>
