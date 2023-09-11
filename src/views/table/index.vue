<template>
  <div class="app-container">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formData.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formData.state" placeholder="请选择状态">
          <el-option label="已回复" value="0"></el-option>
          <el-option label="未回复" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="提交时间">
        <el-date-picker v-model="formData.time" type="datetimerange" range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="编号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="阅读数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="提交时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="goDetail(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="delMsg(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="paginationBox">
      <el-pagination background layout="prev, pager, next" :total="pagination.total" :page-size="pagination.pageSize"
        :page-count="pagination.pageCount" @current-change='fetchData'>
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import {
    getList,
    del
  } from '@/api/table'

  export default {
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        list: null,
        listLoading: true,
        pagination: {
          total: 0,
          pageSize: 10,
          pageCount: 1
        },
        formData: {

        }
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      onSubmit() {
        this.pagination = {
          total: 0,
          pageSize: 10,
          pageCount: 1
        }
        this.fetchData()
      },
      fetchData() {
        this.listLoading = true
        const param = {
          ...this.pagination,
          ...this.formData
        }
        getList(param).then(response => {
          this.list = response.data.items
          this.listLoading = false
          this.pagination.total = response.data.total
        })
      },
      // 删除
      delMsg(ref) {
        const param = {
          id: ref.id
        }
        this.$alert('确认删除该消息吗？', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          callback() {
            del(param).then(() => {
              this.$message({
                type: 'success',
                message: `删除成功`
              });
            })
          }
        });
      },
      goDetail(ref) {
        this.$router.push({
          path: '/headsMessage/msgDetail',
          params: {
            id: ref.id,
          },
        })
      }
    }
  }

</script>
<style lang="scss" scoped>
  .paginationBox {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

</style>
