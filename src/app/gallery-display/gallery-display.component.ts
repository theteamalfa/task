import { Component, OnInit } from '@angular/core';
import { FetchImageService } from '../fetch-image.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gallery-display',
  templateUrl: './gallery-display.component.html',
  styleUrls: ['./gallery-display.component.css']
})
export class GalleryDisplayComponent implements OnInit {
  public arr1 = [];
  public arr2=[];
  public arr3=[];
  public arr4=[];
  public arr5=[];
  public imgData;
  
  constructor(private _imgService : FetchImageService,private _router: Router) { }

  ngOnInit(): void {
    this._imgService.getImages().subscribe(data=> {this.imgData=data
      this.arr1.push(this.imgData);
      //var j=0;
      //console.log(this.arr1[0])
      
      for(var i=0;i<this.arr1[0].length;){
      this.arr2.push(this.arr1[0][i]);
      i=i+4;
      }
      for(var i=1;i<this.arr1[0].length;){
        this.arr3.push(this.arr1[0][i]);
        i=i+4;
        }
        for(var i=2;i<this.arr1[0].length;){
          this.arr4.push(this.arr1[0][i]);
          i=i+4;
          }
          for(var i=3;i<this.arr1[0].length;){
            this.arr5.push(this.arr1[0][i]);
            i=i+4;
            }
    }
      );

    
  }

  // sendTo(dataIn)
  // {
  //   //console.log(dataIn)
  //   //var goURL= "http://www.pinkvilla.com"+dataIn
  //   var goURL="https://www.pinkvilla.com/fashion/beauty/eat-and-apply-tomato-sugar-scrub-and-more-diy-remedies-glowing-skin-541293"
  //   this._nav.navigateByUrl(goURL,{skipLocationChange:true})
   
  // }

  goToUrl(dataIn): void {
    //var goURL= 
   // this._router.navigate(["/"]).then(result=>{window.location.href = goURL;});
   (window as any).open("http://www.pinkvilla.com"+dataIn, "_blank");
}
}
