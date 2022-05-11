import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/ObjLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { ObjService } from '../services/obj.service';
import { ObjModel } from '../models/obj.model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})

export class ModelComponent implements OnInit, AfterViewInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  objList: ObjModel[];
  IsWait: boolean=true;
  @ViewChild('canvas') private canvasRef: ElementRef;

  //* Stage Properties

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPane: number = 1;

  @Input('farClipping') public farClippingPane: number = 0;

  //? Scene properties
  private camera: THREE.PerspectiveCamera;

  private controls: OrbitControls;

  private ambientLight: THREE.AmbientLight;

  private light1: THREE.PointLight;

  private light2: THREE.PointLight;

  private light3: THREE.PointLight;

  private light4: THREE.PointLight;

  private model: THREE.Group[] = [];

  private directionalLight: THREE.DirectionalLight;

  //? Helper Properties (Private Properties);

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();
  private MtlLoader = new MTLLoader();
  private ObjLoader = new OBJLoader();

  private renderer: THREE.WebGLRenderer;

  private scene: THREE.Scene;

  /**
   *Animate the model
   *
   * @private
   * @memberof ModelComponent
   */
  private animateModel() {
    if (this.model.length > 0) {
      this.model.forEach(x=>{
        x.rotation.y += 0.005;
      })
    }
  }

  /**
   *create controls
   *
   * @private
   * @memberof ModelComponent
   */
  private createControls = () => {
    const renderer = new CSS2DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    document.body.appendChild(renderer.domElement);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.update();
  };

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff)

    for (let index = 0; index < this.objList.length; index++) {
      this.MtlLoader.setPath(this.objList[index].mtl.mtlPath).load(this.objList[index].mtl.mtlName, (material) => {
        material.preload();
        new OBJLoader()
          .setMaterials(material)
          .setPath(this.objList[index].objpath)
          .load(this.objList[index].objName, (object) => {
  
            object.position.y = -1111;
            this.model.push(object);
            
            console.log(this.model);
                       
            this.scene.add(object); 
            if (index == this.objList.length - 1) {
              this.IsWait = false;
            }
          }, (xhr) => {
  
            if (xhr.lengthComputable) {
  
              const percentComplete = xhr.loaded / xhr.total * 100;
              
              console.log(Math.round(percentComplete) + '% downloaded');
  
            }
          });
      })
    }
    
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      45, window.innerWidth / window.innerHeight, 1, 15000
    )
    this.camera.position.z = 1400;
    const ambientLight = new THREE.AmbientLight( 0xe8e6e6, 0.4 );
				this.scene.add( ambientLight );

				const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
				this.camera.add( pointLight );
				this.scene.add( this.camera );
    // this.light1 = new THREE.PointLight(0x4b371c, 10);
    // this.light1.position.set(0, 200, 400);
    // this.scene.add(this.light1);
    // this.light2 = new THREE.PointLight(0x4b371c, 10);
    // this.light2.position.set(500, 100, 0);
    // this.scene.add(this.light2);
    // this.light3 = new THREE.PointLight(0x4b371c, 10);
    // this.light3.position.set(0, 100, -500);
    // this.scene.add(this.light3);
    // this.light4 = new THREE.PointLight(0x4b371c, 10);
    // this.light4.position.set(-500, 300, 500);
    // this.scene.add(this.light4);
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
 * Start the rendering loop
 *
 * @private
 * @memberof CubeComponent
 */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: ModelComponent = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      
      requestAnimationFrame(render);
      component.animateModel();
    }());
  }

  constructor(private objService: ObjService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.objList = this.objService.get();
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }


}
