'use babel';

import BocoranSlotGacorMalamIniPanenCuanView from './bocoran-slot-gacor-malam-ini-panen-cuan-view';
import { CompositeDisposable } from 'atom';

export default {

  bocoranSlotGacorMalamIniPanenCuanView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.bocoranSlotGacorMalamIniPanenCuanView = new BocoranSlotGacorMalamIniPanenCuanView(state.bocoranSlotGacorMalamIniPanenCuanViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.bocoranSlotGacorMalamIniPanenCuanView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'bocoran-slot-gacor-malam-ini-panen-cuan:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.bocoranSlotGacorMalamIniPanenCuanView.destroy();
  },

  serialize() {
    return {
      bocoranSlotGacorMalamIniPanenCuanViewState: this.bocoranSlotGacorMalamIniPanenCuanView.serialize()
    };
  },

  toggle() {
    console.log('BocoranSlotGacorMalamIniPanenCuan was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
