---
title: 函数
---

函数是 Rust 中概念的其中一个，现代编程语言都支持函数，目前，你已经见到了 Rust 程序的核心函数之一：`main` 函数，它是 Rust 可执行程序的主入口，我们通过 `fn` 关键字声明它：

```rust
fn main() {
  // 代码写在这里
}
```

这是一个最基本的函数，函数的命名需要使用 `snake_case`:

```rust
fn main() {
  println!("Hello from main!");
  
  another_function();
}

fn another_function() {
  println!("Hello from another function!");
}
```

我们运行看看：

```text
~\learn_rust\functions> cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.04s
     Running `target\debug\functions.exe`
Hello from main!
Hello from another function!
```

## 参数

函数运行可以提供参数，参数会带来[所有权](/docs/backend/rust/primary/ownership/)的转移，我们在后面讲解：

```rust
fn main() {
  let name = "Alex";
  
  greet(name);
}

fn greet(name: &str) {
  println!("Hello! {}", name);
}
```

```text
~\learn_rust\functions> cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.01s
     Running `target\debug\functions.exe`
Hello! Alex
```

当然你也可以自己输入名字，大家可以自己动手改一改，使用 `stdin`，输入一个名字，最后调用 `greet` 函数，输出 `Hello! <your_name>`

我们的 `greet` 函数中，写了 `name: &str`，这代表，`greet` 函数**签名**的参数中有一个名为 `name` 的变量，它的类型是 `&str`。注意，签名的参数必须每一个都填写名称和类型。
当然这里面有一个例外，我们会在[《结构体和枚举——结构体与方法》](/docs/backend/rust/primary/struct-and-enums/)中讲解他。

在定义多个参数的时候，参数与参数之间使用英文逗号 `,` 隔开：

```rust
fn main() {
  print_labeled_measurement(5, 'h');
}

fn print_labeled_measurement(value: i32, unit_label: char) {
  println!("The measurement is: {value}{unit_label}");
}
```

## 函数返回值

在 Rust 中，在 `(...arguments)` 的后面使用 `->` 来定义函数的返回值，例如下面这个例子：

```rust
fn main() {
  let a = 5;
  let b = 20;
  
  let result = add(a, b);
  
  println!("a + b = {}", result);
}

fn add(x: i32, y: i32) -> i32 {
  x + y
}
```

使用 `->` 定义返回值的时候必须显式声明返回类型。

### 空返回值

Rust 可以通过一个特殊的类型来表示空返回值，它叫做 `Unit`，表示没有（返回）值，例如：

```rust
fn main() {
  my_func();
}

fn my_func() -> () {
  println!("Hello, World!");
}
```

### return 关键字

Rust 的函数并不是一定需要 return 关键字的，例如我们刚刚写的一行代码：

```rust
fn add(x: i32, y: i32) -> i32 {
  x + y // [!code focus]
}
```

按照正常的写法应该是：

```rust /return/ /;/
fn add(x: i32, y: i32) -> i32 {
  return x + y; // [!code focus]
}
```

我们可以通过**省略 `return` 和结尾的 `;`** 来简写返回值。

> 并不是所有场景都可以简写返回值，我们在后面的课程中会遇到一些情况必须写 `return`。