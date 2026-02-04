/**
 * Query log types.
 */

/** Client info in a query entry */
export interface QueryClient {
  /** Client IP address */
  ip: string;
  /** Client hostname (if available) */
  name?: string | null;
}

/** Reply info in a query entry */
export interface QueryReply {
  /** Reply type (IP, CNAME, NXDOMAIN, etc.) */
  type?: string | null;
  /** Response time in milliseconds */
  time: number;
}

/** Extended DNS Error info */
export interface QueryEde {
  /** EDE code */
  code: number;
  /** EDE message */
  text?: string | null;
}

export interface QueryEntry {
  /** Query ID in database */
  id: number;
  /** Timestamp */
  time: number;
  /** Query type (A, AAAA, etc.) */
  type: string;
  /** Queried domain */
  domain: string;
  /** Domain blocked during CNAME inspection */
  cname?: string | null;
  /** Query status */
  status?: string | null;
  /** Client information */
  client: QueryClient;
  /** DNSSEC status */
  dnssec?: string | null;
  /** Reply information */
  reply: QueryReply;
  /** Database table ID reference */
  list_id?: number | null;
  /** Upstream server (IP/name + port) */
  upstream?: string | null;
  /** Extended DNS Error */
  ede?: QueryEde;
}

export interface QueriesResponse {
  queries: QueryEntry[];
  /** Cursor for pagination */
  cursor?: number;
  /** Total records in database */
  recordsTotal?: number;
  /** Records matching filter */
  recordsFiltered?: number;
  /** Draw counter (for DataTables compatibility) */
  draw?: number;
  took?: number;
}

export interface QueryParams {
  /** Maximum number of queries to return */
  length?: number;
  /** Start timestamp (Unix) */
  from?: number;
  /** End timestamp (Unix) */
  until?: number;
  /** Filter by client IP or name */
  client?: string;
  /** Filter by domain */
  domain?: string;
  /** Filter by query type (A, AAAA, etc.) */
  type?: string;
  /** Filter by status */
  status?: string;
  /** Cursor for pagination */
  cursor?: string;
  /** Filter by upstream */
  upstream?: string;
  /** Sort order */
  order?: "asc" | "desc";
  /** Filter to show only blocked queries */
  blocked?: boolean;
  /** Filter to show only permitted queries */
  permitted?: boolean;
  /** Filter to show only answered queries */
  answered?: boolean;
}

export interface QuerySuggestions {
  domains: string[];
  clients: string[];
  upstreams: string[];
  types: string[];
  status: string[];
}
