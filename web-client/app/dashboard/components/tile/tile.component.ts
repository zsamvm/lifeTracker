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
  tileName: string;
  tileIcon: string;

  @Input()
  set dataName(dataName: DataNameEnum) {
    this.tileName = this.getTileDisplayInfoService.getTileName(dataName);
    this.tileIcon = this.getTileDisplayInfoService.getTileIcon(dataName);
  }

  constructor(private getTileDisplayInfoService: GetTileDisplayInfoService) { }
}
