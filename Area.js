/**
 *  省,市,县 3级联动js
 * @author  
 * @date    2019-06-12
 * @version Ver 1.1.0
 */

//  依赖AreaData.js
var complexArea = {};

/**
 *
 * 省市县联动初始化
 * @param {String} a 省份nodeId
 * @param {String} k 市级nodeId
 * @param {String} h 区县nodeId
 * @param {Array} p 省数据
 * @param {Array} q 市数据
 * @param {Array} z 区县数据
 * @param {String} d 默认选中的省份序号 0
 * @param {String} b 默认选中的市序号 0
 * @param {String} l 默认选择的区县序号 0
 */
complexArea.initComplexArea = function(a, k, h, p, q, z, d, b, l) {
    var f = arguments;
    var m = document.getElementById(a); //省
    var o = document.getElementById(k); //市下拉框
    var n = document.getElementById(h); //区县
    var e = 0;
    var c = 0;
    //
    var arr = d + '' + b; //代表市的数组编号
    var dbl = d + '' + b + '' + l; //代表区的数组编号

    if (p != undefined) {
        if (d != undefined) {
            d = parseInt(d);
        } else {
            d = 0;
        }
        if (b != undefined) {
            b = parseInt(b);
        } else {
            b = 0;
        }
        if (l != undefined) {
            l = parseInt(l);
        } else {
            l = 0;
        }
        n[0] = new Option('请选择', 0);
        for (e = 0; e < p.length; e++) {
            if (p[e] == undefined) {
                continue;
            }
            if (f[7]) {
                if (f[7] == true) {
                    if (e == 0) {
                        continue;
                    }
                }
            }
            m[c] = new Option(p[e], e);
            if (d == e) {
                m[c].selected = true; //为省一级赋默认值
            }
            c++;
        }
        o[0] = new Option('请选择', 0); //为市一级赋“请选择”初始值
        if (q[d] != undefined) {
            //o[0] = new Option("请选择 ", 0);
            c = 0;
            for (e = 0; e < q[d].length; e++) {
                if (q[d][e] == undefined) {
                    continue;
                }
                if (f[7]) {
                    if (f[7] == true && d != 71 && d != 81 && d != 82) {
                        if (e % 100 == 0) {
                            continue;
                        }
                    }
                }
                o[c] = new Option(q[d][e], e); //alert(q[d][e])为市一级赋默认值
                if (arr == e) {
                    o[c].selected = true;
                }
                c++;
            }
        }

        /*为第三级列表赋默认值 */
        if (z[arr] != undefined) {
            c = 0;
            for (e = 0; e < z[arr].length; e++) {
                if (z[arr][e] == undefined) {
                    continue;
                }
                if (f[7]) {
                    if (f[7] == true && d != 71 && d != 81 && d != 82) {
                        if (e % 100 == 0) {
                            continue;
                        }
                    }
                }
                n[c] = new Option(z[arr][e], e);
                if (dbl == e) {
                    n[c].selected = true;
                }
                c++;
            }
        }
        //编辑时如果两级把第三级隐藏
        if (d == 11 || d == 12 || d == 31 || d == 71 || d == 50 || d == 81 || d == 82) {
            if ($('#' + h + '_div')) {
                $('#' + h + '_div').hide();
            }
        }
    }

    m.addEventListener(
        'change',
        function() {
            complexArea.changeComplexProvince(this.value, areaData.sub_array, k, h);
        },
        false
    );

    o.addEventListener(
        'change',
        function() {
            complexArea.changeCity(this.value, h, h);
        },
        false
    );
};

//改变省下拉框事件
complexArea.changeComplexProvince = function(f, k, e, d) {
    var c = arguments;
    var h = document.getElementById(e);
    var g = document.getElementById(d);
    var b = 0;
    var a = 0;
    complexArea.removeOptions(h);
    f = parseInt(f);

    h[0] = new Option('请选择', 0); //改变时第2 个下拉框显示"请选择"

    if (k[f] != undefined) {
        for (b = 0; b < k[f].length; b++) {
            if (k[f][b] == undefined) {
                continue;
            }
            if (c[3]) {
                if (c[3] == true && f != 71 && f != 81 && f != 82) {
                    if (b % 100 == 0) {
                        continue;
                    }
                }
            }
            h[a] = new Option(k[f][b], b);
            a++;
        }
    }
    complexArea.removeOptions(g);
    g[0] = new Option('请选择', 0);
    if (f == 11 || f == 12 || f == 31 || f == 71 || f == 50 || f == 81 || f == 82) {
        if ($('#' + d + '_div')) {
            $('#' + d + '_div').hide();
        }
    } else {
        if ($('#' + d + '_div')) {
            $('#' + d + '_div').show();
        }
    }
};

//改变市下拉框事件
complexArea.changeCity = function(c, a, t) {
    var ProvincenNum = $('#seachprov').val();
    if (ProvincenNum == 11 || ProvincenNum == 12 || ProvincenNum == 31 || ProvincenNum == 71 || ProvincenNum == 50 || ProvincenNum == 81 || ProvincenNum == 82) {
        return;
    }

    $('#' + a).html('<option value="0" >请选择</option>');
    $('#' + a).unbind('change');
    c = parseInt(c);
    var _d = areaData.sub_arr[c] || [];
    var str = '';
    str += "<option value='0' >请选择</option>";
    for (var i = c * 100; i < _d.length; i++) {
        if (_d[i] == undefined) continue;
        str += "<option value='" + i + "' >" + _d[i] + '</option>';
    }
    $('#' + a).html(str);
};

//移除option选项
complexArea.removeOptions = function(c) {
    if (c != undefined && c.options != undefined) {
        var a = c.options.length;
        for (var b = 0; b < a; b++) {
            c.options[0] = null;
        }
    }
};
