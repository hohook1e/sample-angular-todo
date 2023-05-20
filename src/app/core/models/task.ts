import { uuidv4 } from "../utils/uuidv4";

export class LabTask {

  readonly expiredClass = 'lab-warn-appearance';
  readonly noticeClass = 'lab-notice-appearance';
  readonly id = uuidv4();

  private readonly noticeDays = 3;

  constructor(
    private title: string,
    private description: string,
    private tsExpires: number
  ) {}

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getTsExpires() {
    return this.tsExpires;
  }

  getClass() {
    if (this.isExpired()) return this.expiredClass;
    if (this.canNotify()) return this.noticeClass;
    return;
  }

  isExpired() {
    return Date.now() >= this.tsExpires;
  }

  canNotify() {
    const diff = this.tsExpires - Date.now();
    return diff <= 86400000 * this.noticeDays;
  }

  patch(title: string, description: string, tsExpires: number) {
    Object.assign(this, { title, description, tsExpires });
  }

}
