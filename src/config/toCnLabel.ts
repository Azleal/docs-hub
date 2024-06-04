const labelMap = {
  about: '关于',
  //intro
  'what is fuel': '什么是Fuel',
  quickstart: '快速开始',
  glossary: '术语表',
  //指南
  guides: '指南',
  'contract quickstart': '智能合约快速入门',
  'frontend quickstart': '前端快速入门',
  'counter dapp': '计数器dapp',
  'running a node': '运行节点',
  'migration guide': '迁移指引',
  'intro to sway': '面向JS开发者的Sway语言简介',

  //sway
  introduction: '介绍',
  'getting started': '入门',
  'fuel toolchain': 'Fuel工具链',
  'forc project': 'forc工程',
  'standard library': '标准库',
  'sway standards': 'Sway标准',

  examples: '示例',
  'wallet smart contract': '钱包智能合约',
  'liquidity pool': '流动性池',
  'sway applications': 'Sway 应用',

  'sway program types': 'Sway 程序类型',
  'smart contracts': '智能合约',
  libraries: '库(Libraries)',
  scripts: '脚本(Scripts)',
  predicates: '断言(Predicates)',

  basics: '基础',
  variables: '变量',
  'built in types': '内置类型',
  'commonly used library types': '常用的库类型',
  'blockchain types': '区块链类型',
  'converting types': '类型转换',
  functions: '函数',
  'structs tuples and enums': '结构体、元组和枚举',
  'methods and associated functions': '方法和关联函数',
  constants: '常量',
  'comments and logging': '注释和日志',
  'control flow': '控制流',

  'blockchain development': '区块链开发',
  'hashing and cryptography': '哈希和加密',
  storage: '存储',
  purity: '纯度',
  identifiers: '标识符',
  'native assets': '原生资产',
  'access control': '访问控制',
  'calling contracts': '调用合约',
  'external code': '外部代码执行',

  advanced: '高级概念',
  'advanced types': '高级类型',
  'advanced storage': '高级存储',
  'generic types': '泛型类型',
  traits: '特性(traits)',
  'associated types': '关联类型',
  'generics and trait constraints': '泛型和特质约束',
  assembly: '内联汇编',
  'never type': 'Never 类型',

  'common collections': '常见集合',
  vec: '向量',
  'storage vec': '存储向量',
  'storage map': '存储映射',

  testing: '测试',
  'unit testing': '单元测试',
  'testing with rust': '使用rust测试',

  debugging: '调试',
  'debugging with cli': '使用CLI调试',
  'debugging with ide': '使用ide调试',

  installation: '安装',
  features: '功能特性',
  troubleshooting: '故障排除',

  reference: '参考',
  'sway libs': 'Sway 库',
  'compiler intrinsics': '编译器内联函数',
  attributes: '属性',
  'style guide': '风格指南',
  'known issues and workarounds': '已知问题和解决方法',
  'solidity differences': '与 Solidity 的差异',
  'rust differences': '与 Rust 的不同之处',
  'contributing to sway': 'Sway 贡献指南',
  keywords: 'keywords关键字',

  //sway-libs
  'running tests': '运行测试',
  asset: '资产库',
  base: '基本功能',
  supply: '供应功能',
  metadata: '元数据功能',

  admin: 'Admin库',
  ownership: 'Ownership库',
  pausable: 'Pausable库',
  reentrancy: '重入保护库',
  bytecode: '字节码库',
  merkle: 'Merkle 库',
  'fixed point': '固定小数点数库',
  'signed integers': '有符号整数库',
  queue: '队列库',
};

export function toCnLabel(label: string) {
  return labelMap[label.toLowerCase()] || label;
}
