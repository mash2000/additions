export default class Customizator {
  constructor() {

  }

  render() {
    this.btnBlock = document.createElement('div');
    this.colorPicker = document.createElement('input');
    let scaleInputS = document.createElement('input'),
        scaleInputM = document.createElement('input'),
        panel = document.createElement('div');

    panel.append(this.btnBlock, this.colorPicker);

    scaleInputS.classList.add('scale_btn');
    scaleInputM.classList.add('scale_btn');
    this.btnBlock.classList.add('scale');

    this.btnBlock.append(scaleInputS, scaleInputM);

    panel.classList.add('panel');

    document.querySelector('body').append(panel);

    console.log(this.btnBlock, scaleInputS, scaleInputM);
  }
}