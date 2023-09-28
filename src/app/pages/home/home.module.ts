import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HeaderComponent } from '../../components/header/header.component'
import { CalendarViewComponent } from 'src/app/components/calendar-view/calendar-view.component'
import { CalendarWeekComponent } from 'src/app/components/calendar-week/calendar-week.component'
import { CalendarMonthComponent } from '../../components/calendar-month/calendar-month.component'
import { CalendarDayComponent } from '../../components/calendar-day/calendar-day.component'

@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent,
		CalendarViewComponent,
		CalendarWeekComponent,
		CalendarMonthComponent,
		CalendarDayComponent,
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatIconModule,
	],
})
export class HomeModule {}
