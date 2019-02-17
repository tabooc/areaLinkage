# 省市县数据及联动

网上拿的程序，改掉了BUG
基于`2018年8月中华人民共和国县以上行政区划代码` http://www.mca.gov.cn/article/sj/xzqh/2018/201804-12/20180810101641.html 更新了行政区域编码

html:
```
<select name="province" class="space-mr20 select-common select-small" id="J_Province" onChange="changeComplexProvince(this.value, sub_array, 'J_City', 'J_Area');"></select>
<select name="city" class="space-mr20 select-common select-small" id="J_City" onChange="changeCity(this.value,'J_Area','J_Area');"></select>
<select name="area" class="select-common select-small" id="J_Area"></select>

<script src="AreaData.js"></script>
<script src="Area.js"></script>

```

调用:

```
pid:省份id(0表示默认)
cid:城市id(sub_array对应的后两位,0表示默认)
aid:地区id(sub_arr对应的后两位,0表示默认)

initComplexArea('J_Province', 'J_City', 'J_Area', area_array, sub_array, sub_arr, pid, cid, aid);
```
