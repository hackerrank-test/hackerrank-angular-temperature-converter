import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  c = "";
  f = "";
  constructor() {}

  ngOnInit() {}

  handleChange(val: string | null, type: "c" | "f") {
    if (val === null) {
      this.c = "";
      this.f = "";
      return;
    }

    const temp = Number(val);
    if (type === "c") {
      this.f = ((temp * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temp - 32) * 5) / 9).toFixed(1);
    }
  }
}