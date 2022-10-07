import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  public photo: UserPhoto;
  public readyFlag = 0;
  
  constructor() { }

  public async addNewToGallery() {
  // Take a photo
  const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 100,
      saveToGallery: true
    });
  this.readyFlag = 1;
  this.photos.unshift({
    filepath: capturedPhoto.path,
    webviewPath: capturedPhoto.webPath
  })
  this.photo = {
    filepath: capturedPhoto.path,
    webviewPath: capturedPhoto.webPath}
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

