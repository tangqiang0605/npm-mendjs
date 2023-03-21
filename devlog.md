object.assign


Reflect.get(target,key,receiver)


  var users = {
            'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
          };
         
          var ages = {
            'data': [{ 'age': 36 }, { 'age': 40 }]
          };
         
          _.merge(users, ages);


返回的proxy除了直接读的话是代理对象，其他的都是原来的对象