/*
 * @Description: main description
 * @Author: zhang zhen
 * @Date: 2023-04-26 09:12:16
 * @LastEditors: zhang zhen
 * @LastEditTime: 2023-04-26 09:12:19
 * @FilePath: /ESLint/eslintExplore/demo1/add.js
 */
/*
 * @Description: 测试代码
 * @Author: zhang zhen
 * @Date: 2023-04-25 15:03:44
 * @LastEditors: zhang zhen
 * @LastEditTime: 2023-04-25 15:08:00
 * @FilePath: /ESLint/demo1/add.js
 */
// demo1
function add(x, y) {
  return Number(x) + Number(y);
}

// error code
add('2' + '3');
