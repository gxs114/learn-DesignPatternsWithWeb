/* 
  将一个类的接口转换成客户希望的另外一个接口
  使得原本由于接口不兼容而不能一起工作的那些类可以一起工作

  核心思想：
  我们的模块 A 想要和用户的模块 B 一起工作
  但是现在我们的模块A 升级了，但为了还能和 B 一起工作
  我们得需要向前兼容

  在对方无法为我们做出改变时，我们就需要改变自己来配合对方
  这并不是说要重写自己的逻辑，而是做一些额外的工作来配合对方
*/
