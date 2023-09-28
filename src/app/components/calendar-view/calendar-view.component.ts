import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-calendar-view',
	templateUrl: './calendar-view.component.html',
	styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent {
	@Input() selectWeek = 0

	setWeek(week: number) {
		this.selectWeek = week
	}
}
