import { Injectable } from '@angular/core';
import { ObjModel } from '../models/obj.model';
import { MtlModel } from '../models/mtl.model';

@Injectable({
  providedIn: 'root'
})
export class ObjService {

  mtl1: MtlModel = {
    mtlId: 1,
    mtlName:"skirt.mtl",
    mtlPath:"assets/skirt/"
  };
  mtl2:MtlModel = {
    mtlId: 2,
    mtlName:"deepneck.mtl",
    mtlPath:"assets/deepneck/"
  };
  objList: Array<ObjModel> = ([  
    {objId:1, objName:'skirt.obj', objpath:'assets/skirt/', mtl: this.mtl1},  
    {objId:2, objName:'deepneck.obj', objpath:'assets/deepneck/', mtl: this.mtl2}, 
  ])  
  
  constructor() { }  
  get() {  
    return this.objList;  
  }  
}
