let strs = `<h4 id="Szzgu" data-lake-id="37fc5c35f5499aac0809594a5593fc00" data-wording="true">1）state</h4>
<h1 clas="213"></h1>
<p class="q2" id="66">state是存储的单一状态，是存储的基本数据。</p >
<p class="q3">state</p >
<i class="q3">state</i>
<p>132</p>
<p></p>
<h4 id="wyZ6L" data-lake-id="7b9a34f208c402c202442039c3c488d4" data-wording="true">2）Getters</h4>
<p data-lake-id="c92097f131976671477e4714d34277b9" data-wording="true">getters是store的计算属性，对state的加工，是派生出来的数据。就像computed计算属性一样，getter返回的值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算。</p >
<h4 id="8U044" data-lake-id="7af8411ae7442152fd0047676e825aa2" data-wording="true">3）Mutations</h4>
<p data-lake-id="4982bc9ef8cbff143f15e285a28d9cd6" data-wording="true">mutations提交更改数据，使用store.commit方法更改state存储的状态。（mutations同步函数）</p >
<h4 id="DH874" data-lake-id="0f69457aec805bde313e11429520b15b" data-wording="true">4）Actions</h4>
<p class="q3" data-lake-id="cbe3d5b5ed16e6976d28845e06c05cdf" data-wording="true">actions像一个装饰器，提交mutation，而不是直接变更状态。（actions可以包含任何异步操作）</p >
<p data-lake-id="cbe3d5b5ed16e6976d28845e06c05cdf" data-wording="true">546456456456456</p >
<h4 id="U0M2T" data-lake-id="616456a807a9804b184a4ed748d427fa" data-wording="true">5）Module</h4>
<p data-lake-id="705a120649245e1435a26f79f750b577" data-wording="true">Module是store分割的模块，每个模块拥有自己的state、getters、mutations、actions。</p >`

let reg=/<\w+\s*((?!data-lake-id=.*>).)*>/g

console.log( strs.match(reg))