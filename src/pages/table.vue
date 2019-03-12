<template>
    <table class="table">
                <thead>
                <tr>
                    <th>header</th>
                    <th>header two</th>
                    <th>header two</th>
                    <th>header two</th>
                    <th>header two</th>
                    <th>header two</th>
                </tr>
                </thead>
                <tbody class="M_scrollBar">
                <tr>
                    <td>fuck 1</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                </tr>
                <tr>
                    <td>fuck 1</td>
                    <td>fuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>kfuc<br>k 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                </tr>
                <tr>
                    <td>fuck 1</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                </tr>
                <tr>
                    <td>fuck 1</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                    <td>fuck 2</td>
                </tr>
                </tbody>
            </table>
</template>
<script>

export default {
    data() {
        return {
            maxHeight:'100%',
            scroll: {
                scroller: null
            },
            xList: [
                [
                    {
                        field_name: "statis_date",
                        name: "第一行合并3行1列",
                        colspan: 1, //指定单元格 横向 跨越的 列数
                        rowspan: 3, //指定单元格 纵向 跨越的 行数
                    },
                    {
                        field_name: "custom_field",
                        name: "第一行合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第一行合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第一行合并3列",
                        colspan: 3,
                        rowspan: 1,
                    },
                ],
                [
                    {
                        field_name: "custom_field",
                        name: "第二行日期",
                        colspan: 1, //指定单元格 横向 跨越的 列数
                        rowspan: 1, //指定单元格 纵向 跨越的 行数
                    },
                    {
                        field_name: "custom_field",
                        name: "第二行日期合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第二行日期合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第二行日期合并3列",
                        colspan: 3,
                        rowspan: 1,
                    },
                ],
                [
                    {
                        field_name: "area_name",
                        name: "第三行当月新增",
                        colspan: 1,  //指定单元格 横向 跨越的 列数
                        rowspan: 1, //指定单元格 纵向 跨越的 行数
                    },
                    {
                        field_name: "area_name1",
                        name: "第三行当月新增1",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name2",
                        name: "第三行当月新增2",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name3",
                        name: "第三行当月新增3",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name4",
                        name: "第三行当月新增4",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name5",
                        name: "第三行当月新增5",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name6",
                        name: "第三行当月新增6",
                        colspan: 1,
                        rowspan: 1,
                    },
                ],
            ],
            xField: ['statis_date', 'area_name', "area_name1", "area_name2", "area_name3", "area_name4", "area_name5", "area_name6",],
            yList: [
                {
                    area_name: "新增数据开始",
                    area_name1: "新增数据开始1",
                    area_name2: "新增数据开始2",
                    area_name3: "新增数据开始3",
                    area_name4: "新增数据开始4",
                    area_name5: "新增数据开始5",
                    area_name6: "新增数据开始6",
                    statis_date: 100007,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据最后",
                    area_name1: "新增数据最后1",
                    area_name2: "新增数据最后2",
                    area_name3: "新增数据最后3",
                    area_name4: "新增数据最后4",
                    area_name5: "新增数据最后5",
                    area_name6: "新增数据最后6",
                    statis_date: 222222,
                }
            ]
        }
    },
    mounted() {
    }
}

</script>
<style>
.table{    
    width: 100%;    
    border-collapse:collapse;    
    border-spacing:0;
}

.table thead{
    display: block; 
    width: 100%; 
    background: #ddd;
} 
.table tbody{
    display: block; 
    height:70px; 
    overflow: auto; 
    width: 100%; 
    border: 1px solid #ddd;
} 
.table td,.table th { 
    width: 400px; 
    border-bottom: none; 
    border-left: none; 
    border-right: 1px solid #CCC; 
    border-top: 1px solid #DDD; 
    padding: 2px 3px 3px 4px 
} 
.table tr{ 
    border-bottom: 1px solid #B74; 
} 
</style>