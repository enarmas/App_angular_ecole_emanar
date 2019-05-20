export class RadioOption {
  idQue:string;
  txtRep: string;
  selected:boolean
  constructor(idQ:string,txtR:string,selected:boolean) {
    this.idQue= idQ;
    this.txtRep=txtR;
    this.selected=selected;
  }
}
