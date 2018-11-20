<template lang="pug">
  .wrap
    .topbar.mb-3
      b-row
        b-col(cols='auto')
          fade-transition(:duration='200')
            b-input-group(v-if='!selected.length', prepend='数据搜索')
              b-form-select(v-model='searchProp', :options='options.search')
              b-form-input(placeholder='输入搜索内容')
              b-btn(slot='append', text='Button', variant='success') 搜索
        b-col
        fade-transition(:duration='200')
          b-col(v-if='selected.length', cols='auto')
            b-btn.mr-1(text='Button', variant='danger') 删除选中 ({{ selected.length }})
            b-btn(text='Button', variant='outline-secondary', @click='handleDeselectAll') 取消全选
    .table.mb-0(ref='table')
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Tabulator from 'tabulator-tables'
import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap4.min.css'

export default {
  mounted() {
    this.fetch()
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData,
      columns: [
        {
          title: 'ID',
          field: 'id',
          width: 80,
          responsive: 0,
          headerSort: false
        },
        {
          title: '影片名',
          field: 'name',
          width: 200,
          responsive: 0,
          headerSort: false
        },
        {
          title: '副标题',
          field: 'subtitle',
          width: 200,
          headerSort: false
        },
        {
          title: '观看地址',
          field: 'href',
          headerSort: false
        }
      ],
      // pagination: 'local',
      // paginationSize: 6,
      height: 'calc(100vh - 190px)',
      layout: 'fitColumns',
      selectable: true,
      responsiveLayout: 'collapse',
      rowSelectionChanged: data => {
        this.selected = data
      }
    })
  },
  data() {
    return {
      selected: [],
      options: {
        search: [
          { value: 'name', text: '影片名' },
          { value: 'subtitle', text: '副标题' }
        ]
      },
      searchProp: 'name',
      tabulator: null
    }
  },
  computed: {
    ...mapGetters('admin/film', {
      tableData: 'list'
    })
  },
  watch: {
    tableData: {
      handler(newData) {
        this.tabulator.replaceData(newData)
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('admin/film', ['fetch']),
    handleDeselectAll() {
      this.tabulator.deselectRow()
    }
  }
}
</script>
