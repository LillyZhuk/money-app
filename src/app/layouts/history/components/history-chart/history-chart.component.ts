import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent implements OnInit {

  constructor() { }

  public Highcharts = Highcharts;
  public chartOptions = {};

  @Input() data;

  static pieColors(): string[] {
    const colors = [];
    const base = Highcharts.getOptions().colors[0];
    let i;

    for (i = 0; i < 3; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
  }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        backgroundColor: 'ghostwhite',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors: HistoryChartComponent.pieColors(),
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          }
        }
      },
      exporting: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [{
        name: 'Значение',
        data: this.data
      }]
    };

    HC_exporting(Highcharts);
  }

}
