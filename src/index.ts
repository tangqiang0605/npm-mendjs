function isType(obj: object, type: string) {
  return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

function mend(target: object, handler?: MendHandler) {
  const mendPart = {
    setWith: function () {
      console.log(this);
      return "setWith";
    },
  };
  return Object.assign(sourcesHandler(target, handler), mendPart);
}

function merge(oldObj: Target, newObj: Target) {
  Object.keys(newObj).forEach((key) => {
    if (
      typeof newObj[key] === "object" &&
      oldObj[key] &&
      typeof oldObj[key] === "object"
    ) {
      merge(oldObj[key], newObj[key]);
    } else {
      oldObj[key] = newObj[key];
    }
  });
  return oldObj;
}

async function sourcesHandler(target: Target, handler?: MendHandler) {
  if (!(handler && handler.sources && handler.sources.length)) {
    return target;
  }
  if (isType(target, "Promise")) {
    target = await target;
  }
  if (!Object.keys(target).length) {
    return target;
  }

  const sources: any[] = handler.sources;
  const sourcesStore: SourcesStore = [];
  sources.forEach((obj) => {
    if (isType(obj, "Promise")) {
      sourcesStore.push({
        source: obj as Promise<any>,
        key: [],
      });
    } else {
      if (obj.source && obj.key) {
        sourcesStore.push(obj as Source);
      } else {
        sourcesStore.push({
          source: obj,
          key: [],
        });
      }
    }
  });
  const reqResult: any[] = await Promise.all(
    sourcesStore.map((values) => values.source)
  );
  const reqDataObj = reqResult.reduce(
    (oldValue, newValue) => merge(oldValue, newValue),
    {}
  );

  const mapper = handler.mapper || {};

  const finalObj: Target = {};
  Object.keys(target).forEach((key) => {
    finalObj[key] = reqDataObj[mapper[key] || key] || target[key];
  });

  return finalObj;
  // return new Proxy(target, {
  //   get(target, key, receiver) {
  //     return reqDataObj[mapper[key] || key] || Reflect.get(target, key, receiver);
  //   }
  // })
  // return mapValues(target, (values, key, object) => {
  //   return reqDataObj[mapper[key] || key] || values;
  // })
}

export default mend;
