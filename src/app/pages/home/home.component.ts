import { Component } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	showButtons = false

	changeShowButtons() {
		this.showButtons = !this.showButtons
	}
}
