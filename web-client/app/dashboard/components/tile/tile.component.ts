import { Component, Input } from '@angular/core';

import { GetTileDisplayInfoService } from '../../services/get-tile-display-info.service';

import { DataNameEnum } from '../../../types/data-name-enum';

@Component({
  moduleId: module.id,
  selector: 'tile-component',
  templateUrl: 'tile.component.html',
  styleUrls: ['tile.component.scss'],
  providers: [GetTileDisplayInfoService]
})

export class TileComponent {
  @Input() dataName: DataNameEnum;

  constructor(private getTileDisplayInfoService: GetTileDisplayInfoService) { }

  tileName: string = this.getTileDisplayInfoService.getTileName(this.dataName);
}
