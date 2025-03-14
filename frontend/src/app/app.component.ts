import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from './services/api.service';
import { ChartOptions } from 'chart.js';
import { Chart } from 'chart.js/auto';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Charts App';

  displayedColumns: string[] = ['month', 'primary', 'secondary'];
  dataSource: any[] = [];

  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
  primaryData: number[] = [];
  secondaryData: number[] = [];
  @ViewChild('barChart', { static: true }) barChart!: ElementRef;

  // Chart Data
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: any = 'bar';
  barChartLegend = true;
  barChartData: any[] = [];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getProductsDetails();
  }

  getProductsDetails(): void {
    this.apiService.getProductDetails().subscribe({
      next: (response: any) => {
        const months = [...this.months];
        this.dataSource =  months.map((month, index) => ({
          month,
          primary: response.data.primaryProducts[index],
          secondary: response.data.secondaryProducts[index]
        }));
        this.primaryData = response.data.primaryProducts;
        this.secondaryData = response.data.secondaryProducts;
        this.createChart();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  createChart() {
    new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.months,
        datasets: [
          {
            label: 'Primary',
            data: this.primaryData,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Secondary',
            data: this.secondaryData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sales Data');
    XLSX.writeFile(wb, 'sales_data.xlsx');
  }

  exportChartAsPDF() {
    const pdf = new jsPDF();
    pdf.text('Product Sales Chart', 15, 15);
    
    const canvas = this.barChart.nativeElement;
    const imgData = canvas.toDataURL('image/png');
    
    pdf.addImage(imgData, 'PNG', 10, 30, 180, 100);
    pdf.save('sales_chart.pdf');
  }
}
