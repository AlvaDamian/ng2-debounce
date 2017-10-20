import { NgModule } from '@angular/core';
import { Ng2DebounceDirective } from './directive/debounce.directive';

@NgModule({

	declarations: [Ng2DebounceDirective],
	exports: [Ng2DebounceDirective]
})
export class Ng2DebounceModule { }