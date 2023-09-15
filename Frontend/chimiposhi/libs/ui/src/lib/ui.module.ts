import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiRoutes } from './lib.routes';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { GalleryComponent } from './components/gallery/gallery.component';

const UX_Module = [ButtonModule, GalleriaModule];
@NgModule({
    imports: [CommonModule, RouterModule.forChild(uiRoutes), UX_Module],
    declarations: [BannerComponent, GalleryComponent],
    exports: [BannerComponent, GalleryComponent]
})
export class UiModule {}
