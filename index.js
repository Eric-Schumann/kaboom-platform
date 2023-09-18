import kaboom from 'kaboom';
import { load } from './utils/Loader';
import { uiManager } from './utils/UIManager';

kaboom({
  width: 1280,
  height: 720,
  letterbox: true,
  canvas: document.querySelector('#canvas'),
});

load.fonts();
load.assets();

const scenes = {
  menu: () => {
    uiManager.displayMainMenu();
  },
  controls: () => {},
  1: () => {},
  2: () => {},
  3: () => {},
  gameover: () => {},
  end: () => {},
};

for (const key in scenes) {
  scene(key, scenes[key]);
}

go('menu');
