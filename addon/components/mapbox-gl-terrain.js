import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  map: null,

  /**
   * @property sourceId
   * @private for use by mapbox-gl-source to pass in its sourceId
   */
  sourceId: null,

  init() {
    this._super(...arguments);
    this._updateTerrain();
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this._updateTerrain();
  },

  _updateTerrain() {
    if (this.sourceId) {
      return this.map.setTerrain({ source: this.sourceId });
    }
    return this._removeTerrain();
  },

  willDestroy() {
    this._super(...arguments);
    this._removeTerrain();
  },

  _removeTerrain() {
    // Null or undefined removes terrain
    this.map.setTerrain();
  },
});
