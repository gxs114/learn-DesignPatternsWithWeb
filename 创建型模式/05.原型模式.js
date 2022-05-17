/* 
  解决的问题：
  原型模式是用来解决，创建比较耗时的对象时
  通过一些方法，比如”复制“一份新的出来，而不是从头创建
  并且这个原型是允许修改的

  上边是 java 的做法，对于js来说，原型链就是原型模式的一个体现
  基于同样构造函数创建出来的对象，原型都是一样的

  对于前端来说，原型模式强调的是，共享、复用
  我们可以把要共用的属性和方法挂载到，所有对象都需要的原型上来共享
  也可以创建一个每个地方都可以使用到的，一致的模块
*/
