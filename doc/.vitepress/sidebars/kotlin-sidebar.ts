import type { Sidebars } from "./index";

export const base = "/docs/backend/kotlin";

export const kotlinSidebar: Sidebars = [
	{
		text: '介绍',
		collapsable: true,
		items: [
			{ text: '序言', link: `${base}/primary/` },
			{
				text: "基础",
				link: `${base}/primary/basic`,
			},
			{
				text: "数据类型",
				link: `${base}/primary/data-type`,
				collapsed: true,
				items: [
					{ text: "整型和浮点", link: `${base}/primary/data-type/number` },
					{ text: "布尔值", link: `${base}/primary/data-type/boolean` },
					{ text: "字符和字符串", link: `${base}/primary/data-type/string` },
					{ text: "数组", link: `${base}/primary/data-type/array` },
					{ text: "其它类型", link: `${base}/primary/data-type/other` },
					{ text: "可空类型和非空断言", link: `${base}/primary/data-type/null` },
					{ text: "类型判断和类型转换", link: `${base}/primary/data-type/typecasts` },
					{ text: "类型别名", link: `${base}/primary/data-type/typealias` },
				]
			},
			{
				text: "控制流",
				collapsed: true,
				items: [
					{ text: "区间语法", link: `${base}/primary/control-flow/range` },
					{ text: "条件和循环", link: `${base}/primary/control-flow/if-and-while` },
					{ text: "标签", link: `${base}/primary/control-flow/label` },
				]
			},
			{ text: "简单认识异常", link: `${base}/primary/exceptions` },
			{ text: "泛型", link: `${base}/primary/generics` },
			{
				text: "函数",
				link: `${base}/primary/functions/`,
				collapsed: true,
				items: [
					{ text: "lambda 表达式", link: `${base}/primary/functions/lambda` },
					{ text: "this", link: `${base}/primary/functions/this` },
					{ text: "Builders", link: `${base}/primary/functions/builders` },
					{ text: "内联函数", link: `${base}/primary/functions/inline-functions` },
					{ text: "操作符重载", link: `${base}/primary/functions/operator-overriding` },
					{ text: "抽象类和继承", link: `${base}/primary/functions/abstract-and-inheritance` },
				]
			},
			{
				text: "类",
				link: `${base}/primary/class/`,
				collapsed: true,
				items: [
					{ text: "数据类", link: `${base}/primary/class/data-class` },
					{ text: "接口", link: `${base}/primary/class/interfaces` },
					{ text: "抽象类和继承", link: `${base}/primary/class/abstract-and-inheritance` },
					{ text: "object", link: `${base}/primary/class/object` },
					{ text: "密封类和密封接口", link: `${base}/primary/class/sealed` },
					{ text: "枚举类", link: `${base}/primary/class/enum-class` },
					{ text: "内联值类", link: `${base}/primary/class/inline-value-class` },
					{ text: "嵌套类和内部类", link: `${base}/primary/class/nested-class` },
					{ text: "函数式接口", link: `${base}/primary/class/fun-interfaces` },
					{ text: "属性", link: `${base}/primary/class/properties` },
					{ text: "委托属性", link: `${base}/primary/class/delegation-properties` },
				]
			},
		]
	}
]