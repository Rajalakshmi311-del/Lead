import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileUploadURL='http://localhost:8081/api/excel/upload';

  constructor(private http:HttpClient, private router: Router) { }
  

  ngOnInit():void {}
  file:any;

    selectFile(event){
    // console.log(event);
    this.file=event.target.files[0];
    console.log(this.file);
    }
    uploadFile(){
      let formData= new FormData();
      formData.append('file',this.file)

      this.http.post(this.fileUploadURL,formData).subscribe(
        (data:any)=> {
          console.log(data);
          alert(data.message);

        },
        (error)=>{
          console.log(error);
          
        }
        
      );
    }

  


  }
