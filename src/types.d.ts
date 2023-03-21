interface Source {
  source: Promise<any>;
  key?: objPath[];
}

type SourcesStore = Source[];
type Sources = Array<Promise<any> | Source>;

interface MendHandler {
  sources: Sources;
  mapper?: Target;
  option?: object;
}

interface Target {
  [key: string | symbol]: any; // 字段扩展声明
}
