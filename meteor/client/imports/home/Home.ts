
import { NavigationService, NavigationEntry, IOC } from "@smallstack/core-common";
import { Angular2Component } from "@smallstack/meteor-client";
import template from "./Home.html";

export class HomeComponent { }


Angular2Component.new("HomeComponent", HomeComponent)
    .setTemplate(template)
    .register();

IOC.onRegister("navigationService", (navigationService: NavigationService) => {
    navigationService.addNavigationEntry(NavigationEntry.new()
        .setDefaultRoute(true)
        .setRoute("/")
        .setRequiresAuthentication(false)
        .setType("main")
        .setComponent(HomeComponent)
    );
});
