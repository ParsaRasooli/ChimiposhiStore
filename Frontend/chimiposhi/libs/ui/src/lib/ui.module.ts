import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiRoutes } from './lib.routes';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

const UX_Module = [ButtonModule, GalleriaModule];
@NgModule({
    imports: [CommonModule, RouterModule.forChild(uiRoutes), UX_Module],
    declarations: [BannerComponent],
    exports: [BannerComponent]
})
export class UiModule {}
