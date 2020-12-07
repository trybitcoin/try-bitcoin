import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialPageComponent } from './pages/tutorial/tutorial-page.component';
import {DonateComponent} from "./pages/donate/donate.component";
import {UseCasesComponent} from "./pages/use-cases/use-cases.component";
import {FaqComponent} from "./pages/faq/faq.component";
import {StatisticsComponent} from "./pages/statistics/statistics.component";
import {NodeInfoComponent} from "./pages/node-info/node-info.component";

const routes: Routes = [
    {
        path: '',
        component: TutorialPageComponent
    },
    {
        path: 'why',
        component: UseCasesComponent
    },
    {
        path: 'how',
        component: TutorialPageComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'about',
        component: DonateComponent
    },
    {
        path: 'stats',
        component: StatisticsComponent
    },
    {
        path: 'connect',
        component: NodeInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BitcoinRoutingModule {
}
