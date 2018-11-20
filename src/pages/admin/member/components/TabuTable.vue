<template lang="pug">
  .wrap
    .topbar.mb-3
      b-row
        b-col(cols='auto')
          fade-transition(:duration='200')
            b-input-group(prepend='数据搜索')
              b-form-select(v-model='searchFeild', :options='options.search')
              b-form-input(v-model='searchValue', placeholder='输入搜索内容')
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
          title: '账号',
          field: 'account',
          width: 200,
          responsive: 0,
          headerSort: false
        },
        {
          title: '昵称',
          field: 'nickname',
          headerSort: false
        }
      ],
      placeholder: '无数据',
      height: 'calc(100vh - 190px)',
      layout: 'fitColumns',
      responsiveLayout: 'hide'
    })
  },
  data() {
    return {
      options: {
        search: [
          { value: 'account', text: '账号' },
          { value: 'nickname', text: '昵称' }
        ]
      },
      searchFeild: 'account',
      searchValue: '',
      tabulator: null
    }
  },
  computed: {
    ...mapGetters('admin/member', {
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
      this.fetchMember(val)
    }
  },
  methods: {
    ...mapActions('admin/member', ['fetch', 'fetchMember'])
  }
}
</script>
