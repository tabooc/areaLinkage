# 省市县数据及联动

网上拿的程序，改掉了BUG
基于`2018年8月中华人民共和国县以上行政区划代码` http://www.mca.gov.cn/article/sj/xzqh/2018/201804-12/20180810101641.html 更新了行政区域编码

html:
```
<select name="provinceNodeId"></select>
<select name="cityNodeId"></select>
<select name="areaNodeId"></select>

<script src="AreaData.js"></script>
<script src="Area.js"></script>
```

调用:

```
省份nodeId,市级nodeId,区县nodeId,省数据,市数据,区县数据,默认选中的省份序号(0),默认选中的市序号(0),默认选择的区县序号(0)
complexArea.initComplexArea('provinceNodeId', 'cityNodeId', 'areaNodeId', areaData.area_array, areaData.sub_array, areaData.sub_arr, pid, cid, aid);
```
