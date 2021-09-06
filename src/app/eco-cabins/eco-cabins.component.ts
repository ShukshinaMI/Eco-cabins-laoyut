import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco-cabins',
  templateUrl: './eco-cabins.component.html',
  styleUrls: ['./eco-cabins.component.scss']
})
export class EcoCabinsComponent implements OnInit {

  mail = 'info@eco-cabins.com';
  titles: { name: string, description: string}[] = [
    { name: 'Hout', description: 'De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.' },
    { name: 'Afwerking', description: 'De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.' },
    { name: 'Stalen onderstel', description: 'Het stalen onderstel is sterk zijn en heeft de benodigde stijfheid die' },
    { name: 'Glaswol isolatie', description: 'De combinatie van glaswol met een houtskelet constructie geeft een.' },
    { name: 'Triple glas', description: 'De combinatie van glaswol met een houtskelet constructie geeft een.' },
    { name: 'Infrarood vloer', description: 'De vloer wordt opgewarmd middels opgewekte warmte uit eigen zonne-energie.' },
  ];
  info: string[] = [
    `
      Wij hebben als doel om de EcoCabins voortdurend verder te
      ontwikkelen en innoveren, zodat de EcoCabins uiteindelijk 100%
      duurzaam en circulair zijn. Voorwaarde hierbij is dat de EcoCabins
      betaalbaar blijven. Met behulp van de zon, de wind en de
      beste isolatie geniet u van.
    `,
    `
      Alle EcoCabins hebben een hoge isolatiewaarde, worden geproduceerd met
      indien mogelijk duurzame en/of natuurlijke materialen en hebben als
      opvallende uiterlijke kenmerk de ‘ronde hoeken’, mogelijk gemaakt door
      het specifieke materiaalgebruik De voordelen van bouwen.
     `,
  ];
  constructor() { }

  ngOnInit() {
  }

}
