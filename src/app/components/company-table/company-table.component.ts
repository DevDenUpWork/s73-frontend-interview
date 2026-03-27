import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-company-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.css'
})
export class CompanyTableComponent implements OnInit {

  // The columns to display in the mat-table
  displayedColumns: string[] = [
    'name', 'sector', 'fundName', 'valuation', 'irr', 'multiple', 'status'
  ];

  // Total number of companies — bound to the template and mat-paginator [length].
  // This should be updated when data is fetched (e.g. from X-Total-Count header or array length).
  totalItems = 0;

  // TODO: Add remaining properties to manage state
  // - companies: Company[] — the current page of data to bind to the mat-table dataSource
  // - currentPage: number
  // - pageSize: number (default 20)
  // - searchQuery: string
  // - isLoading: boolean

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    // TODO: Load initial data
  }

  // TODO: Implement onPageChange(event: PageEvent) to handle mat-paginator events
  //   event.pageIndex = new page index (0-based)
  //   event.pageSize  = items per page

  // TODO: Implement onSearch(query: string) to handle search input
  //   Hint: Consider debouncing — or keep it simple and search on each keystroke

  // TODO: Add helper methods for formatting:
  //   - formatValuation(value: number): string  →  e.g. "$45.0M"
  //   - formatIRR(value: number): string         →  e.g. "18.5%"
  //   - formatMultiple(value: number): string     →  e.g. "2.3x"

  // TODO: Add a helper for status badge CSS class:
  //   - getStatusClass(status: string): string   →  e.g. "active", "exited", "written-off"
}
