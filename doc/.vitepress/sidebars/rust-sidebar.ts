export const rustSidebar = [
	{
		text: '初级',
		collapsable: true,
		items: [
			{ text: '序言', link: '/docs/backend/rust/primary/' },
			{ text: 'Hello, World!', link: '/docs/backend/rust/primary/hello-world' },
			{ text: 'Rust 的基本语法', link: '/docs/backend/rust/primary/basic-syntax' },
			{
				text: '基础概念',
				collapsable: true,
				collapsed: true,
				items: [
					{ text: '变量和可变性', link: '/docs/backend/rust/primary/concepts/variables-and-mutable' },
					{ text: '数据类型', link: '/docs/backend/rust/primary/concepts/data-type' },
					{ text: '函数', link: '/docs/backend/rust/primary/concepts/functions' },
					{ text: '控制流', link: '/docs/backend/rust/primary/concepts/control-flow' },
					{ text: '范围表达式', link: '/docs/backend/rust/primary/concepts/range-expressions' },
				]
			},
			{
				text: '所有权',
				collapsable: true,
				collapsed: true,
				items: [
					{ text: '所有权基础', link: '/docs/backend/rust/primary/ownership/' },
					{ text: '栈、堆和静态内存', link: '/docs/backend/rust/primary/ownership/stack-heap-and-static-memory' },
					{ text: '引用与借用', link: '/docs/backend/rust/primary/ownership/references-and-borrowing' },
					{ text: '切片类型', link: '/docs/backend/rust/primary/ownership/slice' },
				]
			},
			{
				text: '结构体和枚举',
				collapsable: true,
				collapsed: true,
				items: [
					{ text: '结构体', link: '/docs/backend/rust/primary/struct-and-enums/' },
					{ text: '简单使用 trait', link: '/docs/backend/rust/primary/struct-and-enums/trait' },
					{ text: 'impl 块', link: '/docs/backend/rust/primary/struct-and-enums/impl' },
					{
						text: "枚举",
						collapsable: true,
						collapsed: true,
						items: [
							{ text: '定义枚举', link: '/docs/backend/rust/primary/struct-and-enums/enums/' },
							{ text: '模式匹配', link: '/docs/backend/rust/primary/struct-and-enums/enums/match' },
							{ text: 'Option 和 Result', link: '/docs/backend/rust/primary/struct-and-enums/enums/option-and-result' },
							{ text: 'if let', link: '/docs/backend/rust/primary/struct-and-enums/enums/if-let' },
						]
					},
				]
			}
		]
	},
	{
		text: '中级',
		collapsable: true,
		items: [
			{
				text: '项目工程化',
				collapsable: true,
				collapsed: true,
				items: [
					{ text: '包和 crate', link: '/docs/backend/rust/senior/project/package-and-crate' },
					{ text: 'mod 和访问修饰符', link: '/docs/backend/rust/senior/project/mod-and-access-modifier' },
					{ text: '使用 use 引入作用域', link: '/docs/backend/rust/senior/project/use' },
					{ text: '将模块分割进行解耦', link: '/docs/backend/rust/senior/project/decoupling-mods' },
				]
			},
			{
				text: '集合',
				collapsable: true,
				collapsed: true,
				items: [
					{ text: 'Vector', link: '/docs/backend/rust/senior/collections/vector' },
					{ text: 'String', link: '/docs/backend/rust/senior/collections/string' },
					{ text: 'Hashmap', link: '/docs/backend/rust/senior/collections/hashmap' },
				]
			},
			{
				text: '处理异常',
				collapsable: true,
				collapsed: true,
				items: [
					{ text: '使用 panic!', link: '/docs/backend/rust/senior/handling-errors/using-panic' },
					{ text: '使用 Result', link: '/docs/backend/rust/senior/handling-errors/using-result' },
					{ text: '在何时使用 panic!', link: '/docs/backend/rust/senior/handling-errors/when-we-use-panic' },
				]
			},
			{
				text: '泛型、Trait和生命周期',
				collapsable: true,
				collapsed: true,
				items: [
					{ text: '泛型的定义', link: '/docs/backend/rust/senior/generics-trait-and-lifecycle/generics-concepts' },
					{ text: '用 Trait 定义通用行为', link: '/docs/backend/rust/senior/generics-trait-and-lifecycle/using-trait' },
					{ text: '生命周期', link: '/docs/backend/rust/senior/generics-trait-and-lifecycle/lifecycle' },
				]
			},
			{
				text: '自动化测试',
				collapsable: true,
				collapsed: true,
				items: [
					{ text: '', link: '/docs/backend/rust/senior/generics-trait-and-lifecycle/generics-concepts' },
					{ text: '用 Trait 定义通用行为', link: '/docs/backend/rust/senior/generics-trait-and-lifecycle/using-trait' },
					{ text: '生命周期', link: '/docs/backend/rust/senior/generics-trait-and-lifecycle/lifecycle' },
				]
			},
		]
	}
];