import AreaButton from './AreaButton.js';
import MainArea from './Areas/MainArea.js';
import SpringArea from './Areas/SpringArea.js';
import SummerArea from './Areas/SummerArea.js';
import WinterArea from './Areas/WinterArea.js';
import AutumnArea from './Areas/AutumnArea.js';
import LostInTheForest from './LostInTheForest.js';

export default class MapButtonFactory {

  public static createAllButtons(player: any, map: any) {

    const baseX = map.getPosX();
    const baseY = map.getPosY();
    const w = LostInTheForest.canvas.width;

    return [
      new AreaButton(new MainArea(player), baseX + w * 0.04, baseY + w * 0.05),
      new AreaButton(new SpringArea(player), baseX + w * 0.09, baseY + w * 0.12),
      new AreaButton(new SummerArea(player), baseX + w * 0.08, baseY + w * 0.06),
      new AreaButton(new WinterArea(player), baseX + w * 0.11, baseY + w * 0.09),
      new AreaButton(new AutumnArea(player), baseX + w * 0.06, baseY + w * 0.10),
    ];
  }
}
