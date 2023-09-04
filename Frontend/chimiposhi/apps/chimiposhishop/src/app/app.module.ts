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

@NgModule({
    declarations: [AppComponent, HomePageComponent, HeaderComponent, FooterComponent],
    imports: [BrowserModule, RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }), AccordionModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
    exports: [HeaderComponent, FooterComponent]
})
export class AppModule {}
