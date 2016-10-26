import { Injectable } from '@angular/core';

import { DataNameEnum } from '../../types/data-name-enum';

@Injectable()
export class GetTileDisplayInfoService {
  getTileName(tileEnum: DataNameEnum) {
    console.log('hwewer');
    console.log(tileEnum);
    switch (tileEnum) {
      case DataNameEnum.BODY_WEIGHT:
        return 'Body Weight';
      default: 'NA'
    }
  }

  getTileIcon(tileEnum: DataNameEnum) {
    switch (tileEnum) {
      case DataNameEnum.BODY_WEIGHT:
        return 'fa fa-balance-scale fa-4';
      default: ''
    }
  }
}
