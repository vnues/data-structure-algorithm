/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  // var reg = new RegExp("^[^0-9]*$");
  var float1 = new RegExp("^ *[+-]?[0-9]+[\.] *$");
  var float2 = new RegExp("^ *[+-]?[0-9]+[\.][0-9]+ *$");
  var float3 = new RegExp("^ *[+-]?[\.][0-9]+ *$");
  var integer = new RegExp("^ *[+-]?[0-9]+ *$");
  var numInteger = new RegExp("^ *[+-]?[0-9]+[eE][+-]?[0-9]+ *$");
  var numFloat1 = new RegExp("^ *[+-]?[0-9]+[\.][eE][+-]?[0-9]+ *$");
  var numFloat2 = new RegExp("^ *[+-]?[0-9]+[\.][0-9]+[eE][+-]?[0-9]+ *$");
  var numFloat3 = new RegExp("^ *[+-]?[\.][0-9]+[eE][+-]?[0-9]+ *$");
  
  return (float1.test(s) || float2.test(s) || float3.test(s) || integer.test(s) || numInteger.test(s) || numFloat1.test(s) || numFloat2.test(s) || numFloat3.test(s));
  
};

// 作者：ackerven
// 链接：https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/solution/zheng-ze-biao-da-shi-yyds-by-ackerven-kdph/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。