/* 
  工厂模式的升级版，就是用来创建工厂的工厂
  
  举个例子，小米公司一开始只卖手机，因为手机型号各不相同
  我们可以抽象出个工厂类，根据参数来创建不同型号的手机（类）
  但后来公司做大做强，除了手机也开始有了电脑
  这时候得新增个电脑的工厂类
  而抽象工厂就是用于管理这些工厂类的同时，快速创建不同型号的产品（手机，电脑）

  对于前端来说：
  意义同简单工厂一样，都是对于得到结果之前的，这些过程的封装
*/
