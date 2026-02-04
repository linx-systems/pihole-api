/**
 * PADD endpoint types.
 * PADD is Pi-hole's terminal display tool.
 */

/** PADD response data for terminal display */
export interface PaddResponse {
  /** Pi-hole hostname */
  hostname?: string;
  /** Pi-hole version */
  version?: string;
  /** Update available flag */
  update_available?: boolean;
  /** Total queries today */
  queries_today?: number;
  /** Blocked queries today */
  blocked_today?: number;
  /** Percent of queries blocked */
  percent_blocked?: number;
  /** Number of domains on blocklist */
  domains_blocked?: number;
  /** DNS blocking status */
  status?: "enabled" | "disabled";
  /** Temperature (if available) */
  temperature?: number;
  /** Memory usage percentage */
  memory_usage?: number;
  /** CPU load */
  cpu_load?: number;
  /** Processing time in seconds */
  took?: number;
}
