import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AccordionModule } from 'primeng/accordion';
import { NavComponent } from './shared/nav/nav.component';
import { CategoriesService, ProductsModule } from '@chimiposhi/products';
import { UiModule } from '@chimiposhi/ui';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, HomePageComponent, HeaderComponent, FooterComponent, NavComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
        AccordionModule,
        BrowserAnimationsModule,
        ProductsModule,
        UiModule,
        HttpClientModule
    ],
    providers: [CategoriesService],
    bootstrap: [AppComponent],
    exports: [HeaderComponent, FooterComponent, NavComponent]
})
export class AppModule {}
