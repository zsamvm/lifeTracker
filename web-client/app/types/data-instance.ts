import { DataNameEnum } from './data-name-enum';

interface DataInstance {
  name: DataNameEnum;
}

class BodyWeightInstance implements DataInstance {
  weight: number;
  comment: string;
  measuredTime: Date;
  name: DataNameEnum;

  constructor() {
    this.name = DataNameEnum.BODY_WEIGHT;
  }
}

export {
  DataInstance,
  BodyWeightInstance
}
