import { MicroTemplate } from './micro-template/micro-template';
import { MicroEvents} from '../micro-events/micro-events';

export class MicroComponent extends MicroEvents {
    constructor(template, strings) {
        super();
        this.view = typeof(template) === 'string' ? new MicroTemplate(template, strings).clone() : template.clone(strings);
    }

    applyText(strings) {
        MicroTemplate.applyText(this.view, strings);
    }
}
