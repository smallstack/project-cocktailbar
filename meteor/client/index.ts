import "./imports/initClient";
import { initClient, startClient } from "./imports/initClient";
import { IOC, ConfigurationService, Logger } from "@smallstack/core-common";

import { AppComponent } from "./imports/app/AppComponent";


// Logger.debugMode = true;

initClient();

// loading components
import "./imports/home/Home";


IOC.onRegister("configurationService", (configurationService: ConfigurationService) => {
    configurationService.set("backoffice.application.projectname", "SATA");
    configurationService.set("backoffice.application.name", "Backoffice");
});

startClient(AppComponent, []);
