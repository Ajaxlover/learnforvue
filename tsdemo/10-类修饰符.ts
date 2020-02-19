//类修饰符
class Person {
 private name = '张三'
 protected age = 18
  say() {
    console.log('我的名字:'+ this.name,'我的年龄:'+ this.age)
  }
  
}

var p = new Person();
//1. private属性只能在类中访问
//2. p.name  报错  name为私有属性,只能在Person中访问
//3.父类protected属性:只能在父类或子类中被访问

class Child extends Person {
  
  callParent() {
    // console.log(super.name) 报错
    //4. super.age 报错  Only public and protected methods of the base class are accessible via the 'super' keyword.
    console.log(this.age) 
    super.say();
  }
  //5. 静态方法: 可通过类直接调用 如 Child.test()  static关键字修饰  静态方法中不能使用this
  // Child.callParent() 报错
  static test() {
    console.log('我是test')
  }

}

var c = new Child();
c.callParent()
// c.name 报错 不允许在外访问父类私有属性
// c.age 报错 age是受保护属性,不允许在外访问父类受保护属性
Child.test()
