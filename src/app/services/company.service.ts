import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = '/companies';

  constructor(private http: HttpClient) {}

  /**
   * TODO: Fetch a page of companies from the API.
   *
   * json-server pagination:
   *   GET /companies?_page=1&_limit=20
   *
   * The total count is returned in the `X-Total-Count` response header.
   * Use { observe: 'response' } in the HTTP options to access headers.
   *
   * @param page - Page number (1-based)
   * @param limit - Number of items per page
   * @returns Observable with company data and total count
   */
  getCompanies(page: number, limit: number): Observable<Company[]> {
    // TODO: Implement paginated fetch
    // Hint: this.http.get<Company[]>(url, { observe: 'response' })
    //       lets you read response.headers.get('X-Total-Count')
    //
    // Note: mat-paginator uses 0-based page index, but json-server uses 1-based.
    //       Make sure to convert: json-server page = matPageIndex + 1
    throw new Error('Not implemented');
  }

  /**
   * TODO: Search companies by name.
   *
   * json-server full-text search:
   *   GET /companies?q=searchTerm
   *
   * This can be combined with pagination:
   *   GET /companies?q=searchTerm&_page=1&_limit=20
   *
   * @param query - Search term to filter by
   * @param page - Page number (1-based)
   * @param limit - Number of items per page
   * @returns Observable with matching companies
   */
  searchCompanies(query: string, page: number, limit: number): Observable<Company[]> {
    // TODO: Implement search with optional pagination
    throw new Error('Not implemented');
  }

  /**
   * TODO: Fetch ALL companies (no pagination).
   *
   * Useful if you choose a client-side pagination approach.
   *   GET /companies
   *
   * @returns Observable with all companies
   */
  getAllCompanies(): Observable<Company[]> {
    // TODO: Implement full fetch
    throw new Error('Not implemented');
  }
}
