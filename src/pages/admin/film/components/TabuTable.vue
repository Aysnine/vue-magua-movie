<template lang="pug">
  b-container.p-0(fluid)
    .topbar.mb-3
      b-row
        b-col(cols='auto')
          fade-transition(:duration='200')
            b-input-group(v-if='!selected.length', prepend='数据搜索')
              b-form-select(v-model='searchFeild', :options='options.search')
              b-form-input(v-model='searchValue', placeholder='输入搜索内容')
        b-col
        fade-transition(:duration='200')
          b-col(v-if='selected.length', cols='auto')
            b-btn.mr-1(text='Button', variant='danger', @click='handleDelete') 删除选中 ({{ selected.length }})
            b-btn(text='Button', variant='outline-secondary', @click='handleDeselectAll') 取消
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
          field: 'title',
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
      height: 'calc(100vh - 190px)',
      layout: 'fitColumns',
      responsiveLayout: 'hide',
      selectable: true,
      placeholder: '无数据',
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
          { value: 'title', text: '影片名' },
          { value: 'subtitle', text: '副标题' }
        ]
      },
      searchFeild: 'title',
      searchValue: '',
      tabulator: null
    }
  },
  computed: {
    ...mapGetters('admin/film', {
      tableData: 'list'
    }),
    search() {
      return this.searchValue.trim().length
        ? { searchFeild: this.searchFeild, searchValue: this.searchValue }
        : {}
    }
  },
  watch: {
    tableData: {
      handler(newData) {
        this.tabulator.replaceData(newData)
      },
      deep: true
    },
    search(val) {
      this.fetchFilm(val)
    }
  },
  methods: {
    ...mapActions('admin/film', ['fetch', 'fetchFilm', 'deleteFilm']),
    handleDeselectAll() {
      this.tabulator.deselectRow()
    },
    async handleDelete() {
      try {
        await this.deleteFilm(this.selected.map(i => i.id))
      } catch (err) {
        alert(err.msg || '删除失败')
      }
    }
  }
}
</script>
