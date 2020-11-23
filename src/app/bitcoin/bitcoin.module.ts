import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TutorialPageComponent } from './pages/tutorial/tutorial-page.component';
import { BitcoinRoutingModule } from './bitcoin-routing.module';
import { PayoutComponent } from './pages/payout/payout.component';
import { DonateComponent } from './pages/donate/donate.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatSliderModule} from "@angular/material/slider";
import { TutorialVideoComponent } from './components/phoenix-tutorial/content/tutorial-video/tutorial-video.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import { SnackMessagePaymentRequestCopied } from './components/snack-messages/payment-request-copied.component';
import {MatMenuModule} from "@angular/material/menu";
import { UseCasesComponent } from './pages/use-cases/use-cases.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PhoenixTutorialComponent } from './components/phoenix-tutorial/phoenix-tutorial.component';
import {MatTabsModule} from "@angular/material/tabs";
import { DonateCardComponent } from './components/donate-card/donate-card.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatIconModule} from "@angular/material/icon";
import { IntroStepComponent } from './components/phoenix-tutorial/steps/intro-step/intro-step.component';
import { WalletStepComponent } from './components/phoenix-tutorial/steps/wallet-step/wallet-step.component';
import { InstallStepComponent } from './components/phoenix-tutorial/steps/install-step/install-step.component';
import { ReceiveStepComponent } from './components/phoenix-tutorial/steps/receive-step/receive-step.component';
import { SendStepComponent } from './components/phoenix-tutorial/steps/send-step/send-step.component';
import { YoutubeVideoComponent } from './components/phoenix-tutorial/content/youtube-video/youtube-video.component';
import {SnackMessageNotSupported} from "./components/snack-messages/not-supported.component";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PaymentSuccessfulComponent } from './components/payment-successful/payment-successful.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';

@NgModule({
    imports: [
        CommonModule,
        BitcoinRoutingModule,
        MatSliderModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatButtonModule,
        MatMenuModule,
        MatTabsModule,
        MatGridListModule,
        MatExpansionModule,
        MatBottomSheetModule,
        MatIconModule,
        MatRadioModule,
        MatInputModule,
        FormsModule,
    ],
    declarations: [
        TutorialPageComponent,
        PayoutComponent,
        DonateComponent,
        HeaderComponent,
        FooterComponent,
        TutorialVideoComponent,
        SnackMessagePaymentRequestCopied,
        SnackMessageNotSupported,
        UseCasesComponent,
        FaqComponent,
        PhoenixTutorialComponent,
        DonateCardComponent,
        IntroStepComponent,
        WalletStepComponent,
        InstallStepComponent,
        ReceiveStepComponent,
        SendStepComponent,
        YoutubeVideoComponent,
        StatisticsComponent,
        PaymentSuccessfulComponent,
        QrCodeComponent,
        HomeButtonComponent,
    ]
})
export class BitcoinModule {
}
