---
title: 整型和浮点
---

## 整型

在 Kotlin 当中，数字类型有 4 种不同的长度：

| 类型      | 长度 | 最大值       | 最小值          |
|---------|----|-----------|--------------|
| `Byte`  | 8  | $-128$    | $127$        |
| `Short` | 16 | $-32768$  | $32767$      |
| `Int`   | 32 | $-2^{31}$ | $2^{31} - 1$ |
| `Long`  | 64 | $-2^{63}$ | $2^{63} - 1$ |

Kotlin 编译器会自动推导类型，默认类型是 Int：

```kotlin
val num1 = 1 // Int
val num2 = 3000000000 // Long
val num3 = 1L // Long
val num4: Byte = 1 // Byte
```

### 无符号整型

| 类型       | 长度 | 最大值 | 最小值                                            |
|----------|----|-----|------------------------------------------------|
| `UByte`  | 8  | $0$ | $255$                                          |
| `UShort` | 16 | $0$ | $65535$                                        |
| `UInt`   | 32 | $0$ | $4,294,967,295\space(2^{32} - 1)$              |
| `ULong`  | 64 | $0$ | $18,446,744,073,709,551,615\space(2^{64} - 1)$ |

> [!TIP] 访问最大值和最小值
>
> 上述提到的八个类型（有符号和无符号），都可以通过访问 `.MAX_VALUE` 和 `MIN_VALUE` 获取最大值和最小值，例如：`Byte.MIN_VALUE`
> 为 `-128`、`ULong.MAX_VALUE` 为 `18,446,744,073,709,551,615`

## 浮点类型

在 Kotlin 中，有两个浮点类型：`Double` 和 `Float`，默认是双精度的 `Double` 类型

```kotlin
// Float 必须显示声明类型 (结尾加上 `F` 或 `f`)
val f1 = 14.8F // float
val f2 = 3.14f // float

val d1: Double = 1.4
val d2: Double = 4 // 不行，4 被认为是 Int
```

Kotlin 中，Int（或其他整型）、Float、Double 不允许互相隐式转换。

## 数字字面量

数字字面量有不同的表达方式、不同的进制：

- 十进制
- `0x`：十六进制
- `0b`：二进制

```kotlin
val oneMillion = 1_000_000
val creditCardNumber = 1234_5678_9012_3456L
val socialSecurityNumber = 999_99_9999L
val hexBytes = 0xFF_EC_DE_5E
val bytes = 0b11010010_01101001_10010100_10010010
val bigFractional = 1_234_567.7182818284
```

## 显式转换类型

我们可以通过 `toXXX` 来显式转换一个数字类型；

```kotlin
val num1: Float = 3.14f
val num2: Double = num1.toDouble() // 3.14
val num3: Int = num2.toInt() // 3
val string: String = num2.toString() // "3"
```

> 在 Float 和 Double 中，`toByte` 已经被废弃，例如 `(3.1f).toByte()`，你可以：`(3.1f).toInt().toByte()`

## 算数

简单的算数和其它语言一致，我们讨论一些 kotlin 特有的点：

### 除法

在 Kotlin 中，如果两个整数相除的结果产生了小数，小数会被直接抛弃：

```kotlin
fun main() {
  val v0 = 4 / 5 // 0.8 -> 0
  val v1 = 5 / 2 // 2.5 -> 2
  val v2 = 7 / 3 // 2.3 -> 2
  
  // v0=0, v1=2, v2=2
  println("v0=$v0, v1=$v1, v2=$v2")
}
```

### 按位操作

Kotlin 提供了一整组按位的操作运算符，它们直接在二进制层面上对数字的位进行操作。不过，这些操作符只能用在 `Int`
与 `Long` 上：

```kotlin
val x = 1
val xShiftedLeft = (x shl 2)
println(xShiftedLeft) // 4

val xAnd = x and 0x000FF000
println(xAnd) // 0
```

这是一些操作符：

- `shl(bits)` – signed shift left，带符号左移
- `shr(bits)` – signed shift right，带符号右移
- `ushr(bits)` – unsigned shift right，无符号右移
- `and(bits)` – bitwise AND，与
- `or(bits)` – bitwise OR，或
- `xor(bits)` – bitwise XOR，异或
- `inv()` – bitwise inversion，取反

详细细节不做讲解了，可以看我的《你真的弄懂二进制了吗？》这篇文章