// import {helloCommon} from "common/common-module";
// import {helloService} from "services/services-module";
// import { helloApp } from "src/app-module";

export class Main {
    constructor() {
        //no quick-fix: import {helloCommon} from "common/common-module";
        helloCommon();
        //no quick-fix: import {helloService} from "services/services-module";
        helloService();
        //quick-fix available: import { helloApp } from "src/app-module";
        helloApp();
    }
}