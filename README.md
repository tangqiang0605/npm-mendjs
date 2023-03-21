# mendjs
mendjs对外暴露一个函数，可以帮助开发者实现多接口映射。

用法：

const result=mend(target,{sources:[Promise1,Promise2]});

target是默认数据，在没有接口的情况下返回target，它可以是开发者自定义的mock数据。

请求一和请求二的结果将映射到target上。