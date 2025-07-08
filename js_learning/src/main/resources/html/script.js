// 無名関数をデフォルトエクスポート
// export default function(){}

// アロー関数をデフォルトエクスポート
//export default ()=>{}

// 名前を付けても import の際には任意の名前で使うことが可能
// export default function exportedFunction(){}

// クラスのエクスポート
// export default class{}

// 名前を付けても import の際には任意の名前で使うことが可能
// export default class ExportedClass{}

// default という名前を付けるとデフォルトエクスポートとしてエクスポートされる
function normalFunction(){}
export {normalFunction as default};