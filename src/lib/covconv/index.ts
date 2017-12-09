import { Util, ICovConvDic } from "./util";

export class CovConv {
  private dic: ICovConvDic[];

  public constructor() {
    this.dic = Util.CovConvDic;
  }

  public covconv(document: HTMLDocument) {
    this.recursiveCovconv(document);
  }

  private recursiveCovconv(element: HTMLDocument | HTMLElement | Node) {
    this.convert(element);

    for (let i = 0; i < element.childNodes.length; i++) {
      this.recursiveCovconv(element.childNodes.item(i));
    }
  }

  private convert(element: HTMLDocument | HTMLElement | Node) {
    if (!Util.isTextElement(element)) {
      return;
    }
    let nodeValue = element.nodeValue;
    if (nodeValue === null) {
      return;
    }

    for (const _ of this.dic) {
      if (nodeValue.match(_.regex)) {
        nodeValue = nodeValue.replace(_.regex, _.kv_JP);
      }
    }
    nodeValue = Util.convertToHalfWidthKana(nodeValue);
    element.nodeValue = nodeValue;
  }
}
