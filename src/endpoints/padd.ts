/**
 * PADD endpoint.
 * Provides data for Pi-hole's terminal display tool.
 */

import type { PiholeError } from "../errors.js";
import type { HttpClient } from "../http.js";
import type { Result } from "../result.js";
import type { PaddResponse } from "../types/padd.js";

/**
 * PADD endpoint methods.
 */
export class PaddEndpoints {
  constructor(
    private http: HttpClient,
    private getAuthHeaders: () => Record<string, string> | undefined,
  ) {}

  /**
   * Get PADD-formatted system summary.
   * Returns data suitable for terminal display tools.
   */
  async get(): Promise<Result<PaddResponse, PiholeError>> {
    return this.http.request<PaddResponse>(
      {
        method: "GET",
        path: "/api/padd",
      },
      this.getAuthHeaders(),
    );
  }
}
