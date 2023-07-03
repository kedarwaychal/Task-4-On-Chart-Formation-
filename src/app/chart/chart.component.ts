import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  value1: any ;

  value2:any;
  chart: any;

  onValueChange(){
    if(this.value1){
      this.value2 = 100 - this.value1
    }
  }


  onValueChanges(){
    if(this.value2 ){
      this.value1 = 100 - this.value2
    }
  }

  ngOnInit() {
    this.Oncreate();
  }

  Oncreate(){
    const canvas = <HTMLCanvasElement>document.getElementById('circleChart');
    if (!canvas) {
      console.error("Canvas element not found.");
      return;
    }

    if (typeof this.chart !== 'undefined') {
      // Destroy the existing chart
      this.chart.destroy();
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Canvas context not found.");
      return;
    }
    if (!ctx) {
      console.error("Canvas context not found.");
      return;
    }
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['value 1', 'value2'], // Replace with your labels
        datasets: [{
          data: [this.value1,this.value2], // Replace with your input values
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}
    

